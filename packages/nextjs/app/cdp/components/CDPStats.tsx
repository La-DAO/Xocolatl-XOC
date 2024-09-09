import React, { useEffect, useState } from "react";
import Image from "next/image";
import { houseOfReserveABI } from "../../../app/components/abis/houseofreserve";
import { XOCABI } from "../../../app/components/abis/xocabis";
import BaseLogo from "@/public/Base-Logo.jpg";
import BinanceLogo from "@/public/BinanceLogo.png";
import PolygonLogo from "@/public/PolygonLogo.png";
import { Address, formatEther } from "viem";
import { useChainId, useReadContract, useReadContracts } from "wagmi";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "~~/app/context/LanguageContext";

const CDPStats: React.FC = () => {
  const { t } = useTranslation();
  const chainId = useChainId();
  const chainNames: { [key: number]: string } = {
    56: "Binance Smart Chain",
    137: "Polygon",
    8453: t("Base"),
  };
  const chainName = chainNames[chainId] || "Unknown Chain";

  const [latestMinted, setLatestMinted] = useState<any>(null);
  const [latestMintedNumber, setLatestMintedNumber] = useState<string | null>(null);
  const {
    data: latestMintedData,
    isLoading: latestMintedLoading,
    error: latestMintedError,
  } = useReadContract({
    address: "0xa411c9Aa00E020e4f88Bc19996d29c5B7ADB4ACf",
    abi: XOCABI,
    functionName: "totalSupply",
  });

  useEffect(() => {
    if (latestMintedData) {
      setLatestMinted(latestMintedData);
    }
  }, [latestMintedData]);

  useEffect(() => {
    if (latestMinted) {
      const formattedNumber = parseFloat(formatEther(BigInt(latestMinted?.toString()))).toFixed(2);
      const formattedString = parseFloat(formattedNumber).toLocaleString("en-US");
      setLatestMintedNumber(formattedString);
    }
  }, [latestMinted]);

  // Define the contract addresses for each chain
  let houseOfReserveContracts: { address: Address; abi: any; functionName: string }[] = [];
  let assetNames: string[] = [];

  if (chainId === 56) {
    houseOfReserveContracts = [
      {
        address: "0xd411BE9A105Ea7701FabBe58C2834b7033EBC203",
        abi: houseOfReserveABI,
        functionName: "totalDeposits",
      },
      {
        address: "0x070ccE6887E70b75015F948b12601D1E759D2024",
        abi: houseOfReserveABI,
        functionName: "totalDeposits",
      },
    ];
    assetNames = ["WETH", "WBNB"];
  } else if (chainId === 137) {
    houseOfReserveContracts = [
      {
        address: "0xd411BE9A105Ea7701FabBe58C2834b7033EBC203",
        abi: houseOfReserveABI,
        functionName: "totalDeposits",
      },
      {
        address: "0x28C7DF27e5bC7Cb004c8D4bb2C2D91f246D0A2C9",
        abi: houseOfReserveABI,
        functionName: "totalDeposits",
      },
      {
        address: "0x102dda5f4621a08dafD327f29f9c815f851846dC",
        abi: houseOfReserveABI,
        functionName: "totalDeposits",
      },
      {
        address: "0xdB9Dd25660240415d95144C6CE4f21f00Edf8168",
        abi: houseOfReserveABI,
        functionName: "totalDeposits",
      },
      {
        address: "0x983A0eC44bf1BB11592a8bD5F91f05adE4F44D81",
        abi: houseOfReserveABI,
        functionName: "totalDeposits",
      },
    ];
    assetNames = ["WETH", "WSTETH", "MATICX", "WMATIC", "WBTC"];
  } else if (chainId === 8453) {
    houseOfReserveContracts = [
      {
        address: "0xfF69E183A863151B4152055974aa648b3165014D",
        abi: houseOfReserveABI,
        functionName: "totalDeposits",
      },
      {
        address: "0x5c4a154690AE52844F151bcF3aA44885db3c8A58",
        abi: houseOfReserveABI,
        functionName: "totalDeposits",
      },
    ];
    assetNames = ["WETH", "cbETH"];
  }

  // Call to fetch data from the House of Reserve contracts
  const { data: houseOfReserveData, isError: houseOfReserveError } = useReadContracts({
    contracts: houseOfReserveContracts.map(contract => ({
      address: contract.address,
      abi: contract.abi,
      functionName: contract.functionName,
    })),
  });

  useEffect(() => {
    if (houseOfReserveData) {
      console.log("House of Reserve Data:", houseOfReserveData);
    }
    if (houseOfReserveError) {
      console.error("Error fetching house of reserve data:", houseOfReserveError);
    }
  }, [houseOfReserveData, houseOfReserveError]);

  const formattedHouseOfReserveData: any[] = houseOfReserveData
    ? houseOfReserveData.map(({ result }) => Number(result) / 10 ** 18)
    : Array(houseOfReserveContracts.length).fill(0);

  let logoSrc = BaseLogo;
  if (chainId === 137) {
    logoSrc = PolygonLogo;
  } else if (chainId === 56) {
    logoSrc = BinanceLogo;
  }

  const handleProofClick = () => {
    let explorerUrl = "";
    if (chainId === 137) {
      explorerUrl = "https://polygonscan.com/token/0xa411c9Aa00E020e4f88Bc19996d29c5B7ADB4ACf";
    } else if (chainId === 56) {
      explorerUrl = "https://bscscan.com/token/0xa411c9Aa00E020e4f88Bc19996d29c5B7ADB4ACf";
    } else if (chainId === 8453) {
      explorerUrl = "https://basescan.org/token/0xa411c9Aa00E020e4f88Bc19996d29c5B7ADB4ACf";
    }
    window.open(explorerUrl, "_blank");
  };

  return (
    <header className="bg-white text-white px-12 py-8 flex flex-col space-y-2 w-4/5 m-auto rounded-2xl shadow-md">
      <div>
        {/* Header with Logo and Chain Name */}
        <div className="flex items-center space-x-2 mb-2">
          <div className="text-2xl">
            <Image src={logoSrc} alt={`${chainName} Logo`} className="h-8 w-8" />
          </div>
          <div>
            <div className="text-2xl text-primary font-semibold">
              {chainName} {t("Market")}
            </div>
          </div>
        </div>
        {/* Data Display */}
        <div className="flex items-center space-x-8">
          <div className="text">
            <div className="text-sm text-gray-400">{t("TotalXOCMinted")}</div>
            <div className="text-lg text-accent font-semibold flex items-end">
              {latestMintedLoading ? "Loading..." : latestMintedError ? "Error" : `$ ${latestMintedNumber?.toString()}`}
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-accent cursor-pointer" onClick={handleProofClick} />
            </div>
          </div>
          {/* Dynamically Generated House of Reserve Data */}
          <div className="flex flex-wrap space-x-8">
            {formattedHouseOfReserveData.map((data, index) => (
              <div key={index} className="text">
                <div className="text-sm text-gray-400">{`${assetNames[index]}  ${t("Deposits")}`}</div>
                <div className="text-lg text-accent font-semibold">
                  {data !== 0 ? ` ${data.toFixed(4)}` : "Loading..."}
                </div>
              </div>
            ))}
          </div>
          {/* You can add more data points here if needed */}
        </div>
      </div>
    </header>
  );
};

export default CDPStats;
