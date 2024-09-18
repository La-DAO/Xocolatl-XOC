"use client";

import React, { useEffect, useState } from "react";
import { useAccount, useChainId, useReadContract } from "wagmi";
import { liquidityABI } from "~~/app/components/abis/liquidity";
import { useTranslation } from "~~/app/context/LanguageContext";

const OverviewWidget: React.FC = () => {
  const { t } = useTranslation();
  const [balance, setBalance] = useState<number | null>(null);
  const { address: accountAddress } = useAccount(); // Get accountAddress using useAccount hook
  const chainId = useChainId();
  // Fetch the balanceOf using the accountAddress
  const {
    data: balanceData,
    isLoading: balanceLoading,
    error: balanceError,
  } = useReadContract({
    address: "0xD6DaB267b7C23EdB2ed5605d9f3f37420e88e291", // Liquidity contract address
    abi: liquidityABI,
    functionName: "balanceOf",
    args: [accountAddress], // Pass accountAddress as argument to balanceOf
  });

  useEffect(() => {
    if (balanceData) {
      // Convert the BigInt to a number and format it
      const balanceValue = Number(balanceData) / 10 ** 18; // Assuming the token has 18 decimals
      setBalance(balanceValue);
    }
  }, [balanceData]);

  // Function to format the balance as a standard number with commas
  const formatNumber = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 6,
      maximumFractionDigits: 6,
    }).format(amount);
  };

  const formattedBalance = balance !== null ? formatNumber(balance) : null;

  // Function to get network error message based on chainId
  const getNetworkErrorMessage = () => {
    if (chainId === 56 || chainId === 137) {
      return t("WrongNetworkMessage"); // Replace with your translation key
    }
    return null;
  };

  const networkErrorMessage = getNetworkErrorMessage();

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md mt-6">
      {/* Title */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{t("XoktleOverView")}</h2>
        <hr className="border-t-2 border-gray-300 rounded-t-full" />
      </div>

      {/* Loading and Error States */}
      {balanceLoading && <p className="text-gray-500">Loading balance...</p>}
      {balanceError && <p className="text-red-500">Error loading balance.</p>}
      {networkErrorMessage && <p className="text-red-500">Wrong network, change to the Base network!</p>}

      {/* Display Balance */}
      {!balanceLoading && !balanceError && balance !== null && (
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-700">{t("XoktleAccountShares")}:</span>
            <span className="text-gray-900 font-semibold">{formattedBalance} shares</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default OverviewWidget;
