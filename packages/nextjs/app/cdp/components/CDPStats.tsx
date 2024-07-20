import React, { useEffect, useState } from "react";
import { houseOfReserveABI } from "../../../app/components/abis/houseofreserve";
import { XOCABI } from "../../../app/components/abis/xocabis";
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
  const [totalWETHDeposits, setTotalWETHDeposits] = useState<any>(null);
  const [totalCBETHDeposits, setTotalCBETHDeposits] = useState<any>(null);

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

  const {
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

  return (
    <header className="bg-neutral text-white px-12 py-8 flex flex-col space-y-2 w-full m-auto">
      <div className="pl-32">
        <div className="flex items-center space-x-2">
          <div className="dropdown dropdown-right">
            <div tabIndex={0} role="button" className="btn m-1 text-3xl">
              {chainName}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-8 pl-2 pt-4">
          <div className="text">
            <div className="text-sm text-gray-400">Total XOC Minted</div>
            <div className="text-lg text-accent font-semibold">
              $ {latestMintedLoading ? "Loading..." : latestMintedError ? "Error" : latestMintedNumber?.toString()}
            </div>
          </div>
          <div className="text">
            <div className="text-sm text-gray-400">Total Deposits</div>
            <div className="text-lg text-accent font-semibold">
              {wethDepositsLoading || cbethDepositsLoading
                ? "Loading..."
                : wethDepositsError || cbethDepositsError
                ? "Error"
                : `WETH: ${formattedWETHDeposits} CBETH: ${formattedCBETHDeposits}`}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CDPStats;
