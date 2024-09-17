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
        address: "0x2718644E0C38A6a1F82136FC31dcA00DFCdF92a3",
        abi: houseOfReserveABI,
        functionName: "totalDeposits",
      },
      {
        address: "0x76CAc0bC384a49485627D2235fE132e3038b45BB",
        abi: houseOfReserveABI,
        functionName: "totalDeposits",
      },
      {
        address: "0xF56293025437Db5C0024a37dfcEc792125d56A48",
        abi: houseOfReserveABI,
        functionName: "totalDeposits",
      },
    ];
    assetNames = ["WETH", "MATICX", "WMATIC"];
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
    <header className="bg-white text-white px-4 py-4 md:px-12 md:py-8 flex flex-col space-y-2 w-4/5 md:w-4/5 m-auto rounded-2xl shadow-md">
      <div>
        {/* Header with Logo and Chain Name */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 mb-2">
          <div className="text-2xl">
            <Image src={logoSrc} alt={`${chainName} Logo`} className="h-8 w-8" />
          </div>
          <div>
            <div className="text-2xl text-primary font-semibold text-center md:text-left">
              {chainName} {t("Market")}
            </div>
          </div>
        </div>
        {/* Data Display */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="text-center md:text-left">
            <div className="text-sm text-gray-400">{t("TotalXOCMinted")}</div>
            <div className="text-lg text-accent font-semibold flex items-center justify-center md:justify-start">
              {latestMintedLoading ? "Loading..." : latestMintedError ? "Error" : `$ ${latestMintedNumber?.toString()}`}
              <ArrowTopRightOnSquareIcon
                className="h-6 w-6 text-accent cursor-pointer ml-2"
                onClick={handleProofClick}
              />
            </div>
          </div>
          {/* Dynamically Generated House of Reserve Data */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8">
            {formattedHouseOfReserveData.map((data, index) => (
              <div key={index} className="text-center md:text-left">
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
