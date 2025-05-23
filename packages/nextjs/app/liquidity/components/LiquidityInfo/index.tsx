"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useChainId, useReadContract } from "wagmi";
import { liquidityABI } from "~~/app/components/abis/liquidity";
import { useTranslation } from "~~/app/context/LanguageContext";

const LiquidityInfo: React.FC = () => {
  const { t } = useTranslation();
  const [, setTotalReserves] = useState<number | null>(null);
  const chainId = useChainId();
  // Function to get network error message based on chainId
  const getNetworkErrorMessage = () => {
    if (chainId !== 8453) {
      return t("WrongNetworkMessage"); // Replace with your translation key
    }
    return null;
  };

  const networkErrorMessage = getNetworkErrorMessage();

  const { data: totalReserves } = useReadContract({
    address: "0xD6DaB267b7C23EdB2ed5605d9f3f37420e88e291",
    abi: liquidityABI,
    functionName: "totalSupply",
  });

  useEffect(() => {
    if (totalReserves) {
      setTotalReserves(totalReserves as number);
    }
  }, [totalReserves]);

  console.log("Total Reserves", totalReserves);

  const formattedTotalReserves: number | null = totalReserves ? Number(totalReserves) / 10 ** 18 : null;

  const [tokenA, setTokenA] = useState<number | null>(null);
  const [tokenB, setTokenB] = useState<number | null>(null);
  const { data: lpTokenData, isLoading: lpTokenLoading } = useReadContract({
    address: "0xD6DaB267b7C23EdB2ed5605d9f3f37420e88e291",
    abi: liquidityABI,
    functionName: "getTotalAmounts",
  });

  useEffect(() => {
    if (lpTokenData) {
      // Extract and format tokenA and tokenB from lpTokenData
      const [tokenAValue, tokenBValue] = (lpTokenData as bigint[]).map((value: bigint) => Number(value));
      setTokenA(tokenAValue / 10 ** 6);
      setTokenB(tokenBValue / 10 ** 18);
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
    <div className="w-full sm:w-4/5 mx-auto mt-8 p-6 bg-white shadow-md rounded-lg flex flex-col sm:flex-row items-center">
      {/* Image Section */}
      <div className="flex-shrink-0 mb-6 sm:mb-0 sm:mr-6">
        <Image
          src="/warrior.png"
          alt="Description of Image"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
      </div>

      {/* Text and Numbers Section */}
      <div className="flex-grow">
        {/* Title and Description */}
        <div className="mb-4 text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary">{t("XoktleTitle")}</h2>
          <p className="text-gray-600">{t("XoktleDescription")}</p>
        </div>

        {networkErrorMessage && (
          <p className="text-red-500 text-center sm:text-left">
            Wrong network, change to the <span className="text-blue-500 text-lg">Base</span> network! 🤖🍫
          </p>
        )}

        {/* Number Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-lg sm:text-xl font-bold text-primary">{t("XoktleTotalShares")}</p>
            <p className="text-gray-600">
              {formattedTotalReserves
                ? formattedTotalReserves.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " Shares"
                : "-"}
              {lpTokenLoading && <p className="text-gray-500 text-center sm:text-left">Loading data...</p>}
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-lg sm:text-xl font-bold text-primary">$USDC Deposits</p>
            <p className="text-gray-600">{formattedTokenA}</p>
            {lpTokenLoading && <p className="text-gray-500 text-center sm:text-left">Loading data...</p>}
          </div>
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-lg sm:text-xl font-bold text-primary">$XOC Deposits</p>
            <p className="text-gray-600">{formattedTokenB}</p>
            {lpTokenLoading && <p className="text-gray-500 text-center sm:text-left">Loading data...</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidityInfo;
