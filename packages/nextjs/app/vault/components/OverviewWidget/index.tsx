"use client";

import React, { useEffect, useState } from "react";
import { useReadContract } from "wagmi";
import { vaultABI } from "~~/app/components/abis/vault";

const OverviewWidget: React.FC = () => {
  const [tokenA, setTokenA] = useState<number | null>(null);
  const [tokenB, setTokenB] = useState<number | null>(null);
  const {
    data: lpTokenData,
    isLoading: lpTokenLoading,
    error: lpTokenError,
  } = useReadContract({
    address: "0xD6DaB267b7C23EdB2ed5605d9f3f37420e88e291",
    abi: vaultABI,
    functionName: "getTotalAmounts",
  });

  useEffect(() => {
    if (lpTokenData) {
      // Extract and format tokenA and tokenB from lpTokenData
      const [tokenAValue, tokenBValue] = (lpTokenData as bigint[]).map((value: bigint) => Number(value) / 10 ** 18);
      setTokenA(tokenAValue);
      setTokenB(tokenBValue);
    }
  }, [lpTokenData]);

  // Format as currency: tokenA as USD and tokenB as MXN
  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const formattedTokenA = tokenA !== null ? formatCurrency(tokenA, "USD") : null;
  const formattedTokenB = tokenB !== null ? formatCurrency(tokenB, "MXN") : null;

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md mt-6">
      {/* Title */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Overview</h2>
        <hr className="border-t-2 border-gray-300 rounded-t-full" />
      </div>

      {/* Loading and Error States */}
      {lpTokenLoading && <p className="text-gray-500">Loading data...</p>}
      {lpTokenError && <p className="text-red-500">Error loading data.</p>}

      {/* Token Information */}
      {!lpTokenLoading && !lpTokenError && tokenA !== null && tokenB !== null && (
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-700">Total USDC Deposits:</span>
            <span className="text-gray-900 font-semibold">{formattedTokenA}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-700">Total XOC Deposits:</span>
            <span className="text-gray-900 font-semibold">{formattedTokenB}</span>
          </div>

          <div className="flex justify-between border-t pt-4 mt-4">
            <span className="text-gray-700">Total Value:</span>
            <span className="text-gray-900 font-bold">
              {formattedTokenA && formattedTokenB ? `${formattedTokenA} + ${formattedTokenB}` : ""}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default OverviewWidget;
