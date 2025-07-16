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

  const formattedTokenA = tokenA !== null ? formatCurrency(tokenA, "USD") : "-";
  const formattedTokenB = tokenB !== null ? formatCurrency(tokenB, "MXN") : "-";

  return (
    <div className="card shadow-xl bg-primary text-white dark:bg-neutral dark:text-primary w-full md:w-3/4 mx-auto">
      <div className="card-body">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <Image src="/warrior.png" alt="Xoktle Warrior" width={120} height={120} className="rounded-full" />
          </div>

          {/* Content Section */}
          <div className="flex-grow text-center lg:text-left">
            {/* Title and Description */}
            <div className="mb-6">
              <h3 className="card-title text-2xl mb-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {t("XoktleTitle")}
              </h3>
              <p className="text-white/80 dark:text-primary/80">{t("XoktleDescription")}</p>
            </div>

            {networkErrorMessage && (
              <div className="alert alert-error mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
                <span>
                  Wrong network, change to the <span className="font-bold">Base</span> network! 🤖🍫
                </span>
              </div>
            )}

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card bg-base-100 text-base-content shadow-sm">
                <div className="card-body p-4">
                  <h4 className="card-title text-sm mb-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    {t("XoktleTotalShares")}
                  </h4>
                  <p className="text-2xl font-bold text-primary dark:text-white">
                    {formattedTotalReserves
                      ? formattedTotalReserves.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " Shares"
                      : lpTokenLoading
                      ? "Loading..."
                      : "-"}
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 text-base-content shadow-sm">
                <div className="card-body p-4">
                  <h4 className="card-title text-sm mb-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                    USDC Deposits
                  </h4>
                  <p className="text-2xl font-bold text-primary dark:text-white">
                    {lpTokenLoading ? "Loading..." : formattedTokenA}
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 text-base-content shadow-sm">
                <div className="card-body p-4">
                  <h4 className="card-title text-sm mb-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                    XOC Deposits
                  </h4>
                  <p className="text-2xl font-bold text-primary dark:text-white">
                    {lpTokenLoading ? "Loading..." : formattedTokenB}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidityInfo;
