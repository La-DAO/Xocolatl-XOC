"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useReadContract } from "wagmi";
import { liquidityABI } from "~~/app/components/abis/liquidity";
import { useTranslation } from "~~/app/context/LanguageContext";

const LiquidityInfo: React.FC = () => {
  const { t } = useTranslation();
  const [, setTotalReserves] = useState<number | null>(null);
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
  const {
    data: lpTokenData,
    isLoading: lpTokenLoading,
    error: lpTokenError,
  } = useReadContract({
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
    <div className="w-4/5 mx-auto mt-8 p-6 bg-white shadow-md rounded-lg flex items-center">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image src="/warrior.png" alt="Description of Image" width={200} height={200} className="rounded-full" />
      </div>

      {/* Text and Numbers Section */}
      <div className="ml-6 flex-grow">
        {/* Title and Description */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-primary">{t("XoktleTitle")}</h2>
          <p className="text-gray-600">{t("XoktleDescription")}</p>
        </div>

        {lpTokenLoading && <p className="text-gray-500">Loading data...</p>}
        {lpTokenError && <p className="text-red-500">Error loading data.</p>}

        {/* Number Boxes */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-xl font-bold text-primary">{t("XoktleTotalShares")}</p>
            <p className="text-gray-600">
              {formattedTotalReserves
                ? formattedTotalReserves.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " Shares"
                : "-"}
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-xl font-bold text-primary">$USDC Deposits</p>
            <p className="text-gray-600">{formattedTokenA}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-xl font-bold text-primary">$XOC Deposits</p>
            <p className="text-gray-600">{formattedTokenB}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidityInfo;
