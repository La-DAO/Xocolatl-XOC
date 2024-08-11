import React, { useEffect, useState } from "react";
import Image from "next/image";
import { XOCABI } from "../../../app/components/abis/xocabis";
import BaseLogo from "@/public/Base-Logo.jpg";
import BinanceLogo from "@/public/BinanceLogo.png";
import PolygonLogo from "@/public/PolygonLogo.png";
import { formatEther } from "viem";
import { useChainId, useReadContract } from "wagmi";

const CDPStats: React.FC = () => {
  const chainId = useChainId();
  const chainNames: { [key: number]: string } = {
    56: "Binance Smart Chain",
    137: "Polygon",
    8453: "Base",
  };
  const chainName = chainNames[chainId] || "Unknown Chain";

  const [latestMinted, setLatestMinted] = useState<any>(null);
  const [latestMintedNumber, setLatestMintedNumber] = useState<string | null>(null);
  //const [totalWETHDeposits, setTotalWETHDeposits] = useState<any>(null);
  //const [totalCBETHDeposits, setTotalCBETHDeposits] = useState<any>(null);

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

  /* const {
    data: wethDepositsData,
    isLoading: wethDepositsLoading,
    error: wethDepositsError,
  } = useReadContract({
    address: "0xfF69E183A863151B4152055974aa648b3165014D",
    abi: houseOfReserveABI,
    functionName: "totalDeposits",
  });

  useEffect(() => {
    if (wethDepositsData) {
      setTotalWETHDeposits(wethDepositsData);
    }
  }, [wethDepositsData]);

  const {
    data: cbethDepositsData,
    isLoading: cbethDepositsLoading,
    error: cbethDepositsError,
  } = useReadContract({
    address: "0x5c4a154690AE52844F151bcF3aA44885db3c8A58",
    abi: houseOfReserveABI,
    functionName: "totalDeposits",
  });

  useEffect(() => {
    if (cbethDepositsData) {
      setTotalCBETHDeposits(cbethDepositsData);
    }
  }, [cbethDepositsData]);

  const formattedWETHDeposits = totalWETHDeposits ? formatEther(totalWETHDeposits) : "0.00";
  const formattedCBETHDeposits = totalCBETHDeposits ? parseFloat(formatEther(totalCBETHDeposits)).toFixed(4) : "0.00";
 */

  let logoSrc = BaseLogo;
  if (chainId === 137) {
    logoSrc = PolygonLogo;
  } else if (chainId === 56) {
    logoSrc = BinanceLogo;
  }
  return (
    <header className="bg-white text-white px-12 py-8 flex flex-col space-y-2 w-4/5 m-auto rounded-2xl shadow-md">
      <div>
        {/* Header with Logo and Chain Name */}
        <div className="flex items-center space-x-2 mb-2">
          <div className="text-2xl">
            <Image src={logoSrc} alt={`${chainName} Logo`} className="h-8 w-8" />
          </div>
          <div>
            <div className="text-2xl text-primary font-semibold">{chainName} Market</div>
          </div>
        </div>
        {/* Data Display */}
        <div className="flex items-center space-x-8">
          <div className="text">
            <div className="text-sm text-gray-400">Total XOC Minted</div>
            <div className="text-lg text-accent font-semibold">
              {latestMintedLoading ? "Loading..." : latestMintedError ? "Error" : `$ ${latestMintedNumber?.toString()}`}
            </div>
          </div>
          {/* You can add more data points here if needed */}
        </div>
      </div>
    </header>
  );
};

export default CDPStats;
