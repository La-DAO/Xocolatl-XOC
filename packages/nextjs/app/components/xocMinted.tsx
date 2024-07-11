import React, { useEffect, useState } from "react";
import { approveABI } from "../components/abis/xocabis";
import { formatEther } from "viem";
import { useReadContract } from "wagmi";

const XOCMinted: React.FC = () => {
  const [latestMinted, setLatestMinted] = useState<any>(null);
  const [latestMintedNumber, setLatestMintedNumber] = useState<number | bigint | any>(null);
  const { data: latestMintedData } = useReadContract({
    address: "0xa411c9Aa00E020e4f88Bc19996d29c5B7ADB4ACf", // House of Reserve (WETH)
    abi: approveABI,
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
  // Render the latest price data
  return (
    <>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">$XOC Minted</div>
          <div className="stat-value">{latestMintedNumber}</div>
          <div className="stat-desc text-base">in Polygon</div>
        </div>
      </div>
    </>
  );
};

export default XOCMinted;
