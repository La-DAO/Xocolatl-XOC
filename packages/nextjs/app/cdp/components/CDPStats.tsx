import React, { useEffect, useState } from "react";
import Image from "next/image";
import { houseOfReserveABI } from "../../../app/components/abis/houseofreserve";
import { XOCABI } from "../../../app/components/abis/xocabis";
import { contractData } from "@/app/constants/contracts";
import BaseLogo from "@/public/Base-Logo.jpg";
import BinanceLogo from "@/public/BinanceLogo.png";
import PolygonLogo from "@/public/PolygonLogo.png";
import OptimismLogo from "@/public/optimism-logo.png";
import { Abi, formatEther } from "viem";
import { useChainId, useReadContract, useReadContracts } from "wagmi";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "~~/app/context/LanguageContext";
import { getTokenBlockExplorerUrl } from "~~/app/utils/utils";

const CDPStats: React.FC = () => {
  const { t } = useTranslation();
  const chainId = useChainId();
  const chainNames: { [key: number]: string } = {
    56: "Binance Smart Chain",
    137: "Polygon",
    8453: t("Base"),
    10: "Optimism",
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

  // Access config for current chain
  const config = contractData[chainId];

  // Build the wagmi-compatible contract read list
  const houseOfReserveContracts = Object.entries(config.houseOfReserves).map(([, address]) => ({
    address,
    abi: houseOfReserveABI as Abi,
    functionName: "totalDeposits",
  }));

  // Call to fetch data from the House of Reserve contracts
  const { data: houseOfReserveData, isError: houseOfReserveError } = useReadContracts({
    contracts: houseOfReserveContracts.map(contract => ({
      address: contract.address,
      abi: contract.abi,
      functionName: contract.functionName,
    })),
  });

  const assetNames = Object.keys(config.houseOfReserves);

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
  } else if (chainId === 10) {
    logoSrc = OptimismLogo;
  }

  const handleOpenTokenInExplorerClick = () => {
    const explorerUrl = getTokenBlockExplorerUrl(chainId);
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
                onClick={handleOpenTokenInExplorerClick}
              />
            </div>
          </div>

          {/* Dynamically Generated House of Reserve Data */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8">
            {formattedHouseOfReserveData.map((data, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-sm text-gray-400">{`${assetNames[index]} ${t("Deposits")}`}</div>
                <div className="text-lg text-accent font-semibold">
                  {data !== 0 ? ` ${data.toFixed(4)}` : "Loading..."}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Button to Download Whitepaper */}
        <div className="flex justify-end mt-4 md:mt-0">
          <a
            href="/xocolatl_whitepaper.pdf"
            download="xocolatl_whitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-all"
          >
            {t("Download Whitepaper")}
          </a>
        </div>
      </div>
    </header>
  );
};

export default CDPStats;
