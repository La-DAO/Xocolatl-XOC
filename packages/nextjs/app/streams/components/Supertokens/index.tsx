"use client";

import React, { useEffect, useState } from "react";
import { ArrowDown, ChevronDown, Loader2 } from "lucide-react";
import { type Address, Hash, parseEther } from "viem";
import { useAccount, useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { supertokenABI } from "~~/app/components/abis/Supertoken";
import { ERC20ABI } from "~~/app/components/abis/erc20";
import { xocContract } from "~~/app/constants/contracts";
import { useBalanceOf } from "~~/hooks/useBalanceOf";
import { useStreamingStore, useUpdateSuperXocBalance } from "~~/stores/streaming-store";

const TokenConverter = () => {
  const { address: accountAddress } = useAccount();
  const [tab, setTab] = useState<"upgrade" | "downgrade">("upgrade");
  const [tokenAmount, setTokenAmount] = useState<string>("0.0");
  const [tokenError, setTokenError] = useState<string | null>(null);
  const [usdValue, setUsdValue] = useState<string>("$0.00");
  const [isTransactionPending, setIsTransactionPending] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState<string>("");

  const xocBalance = useBalanceOf({ tokenAddress: xocContract, walletAddress: accountAddress as Address });
  const [xocAllowanceState, xocSetAllowanceState] = useState<string>("0");
  const [requiresApproval, setRequiresApproval] = useState(false);

  // Write contract hooks
  const { writeContract: upgradeXOC, data: upgradeData } = useWriteContract();
  const { writeContract: approveERC20, data: approveData } = useWriteContract();
  const { writeContract: downgradeSuperXOC, data: downgradeData } = useWriteContract();

  // Store refresh functions
  const { refreshComponents } = useStreamingStore();
  const { refreshBalancesManually } = useUpdateSuperXocBalance();

  // Custom balance refresh function that directly updates the store
  const forceBalanceRefresh = React.useCallback(() => {
    console.log("Force refreshing balances after transaction...");
    // Force immediate refresh
    refreshBalancesManually();
    refreshComponents();

    // Additional refreshes with delays to ensure blockchain state is updated
    setTimeout(() => {
      console.log("Secondary balance refresh...");
      refreshBalancesManually();
      refreshComponents();
    }, 2000);

    setTimeout(() => {
      console.log("Final balance refresh...");
      refreshBalancesManually();
      refreshComponents();
    }, 5000);
  }, [refreshBalancesManually, refreshComponents]);

  // Transaction receipt hooks
  const { isSuccess: isUpgradeSuccess, isError: isUpgradeError } = useWaitForTransactionReceipt({
    hash: upgradeData as Hash,
  });

  const { isSuccess: isApproveSuccess, isError: isApproveError } = useWaitForTransactionReceipt({
    hash: approveData as Hash,
  });

  const { isSuccess: isDowngradeSuccess, isError: isDowngradeError } = useWaitForTransactionReceipt({
    hash: downgradeData as Hash,
  });

  // Handle transaction success/error states
  useEffect(() => {
    if (isUpgradeSuccess) {
      console.log("Upgrade transaction successful");
      setTransactionStatus("Wrap successful!");
      setIsTransactionPending(false);
      refreshComponents();
      // Refresh balances after successful wrap
      forceBalanceRefresh();
    } else if (isUpgradeError) {
      console.error("Upgrade transaction failed");
      setTransactionStatus("Wrap failed!");
      setIsTransactionPending(false);
    }
  }, [isUpgradeSuccess, isUpgradeError, refreshComponents, forceBalanceRefresh]);

  useEffect(() => {
    if (isDowngradeSuccess) {
      console.log("Downgrade transaction successful");
      setTransactionStatus("Unwrap successful!");
      setIsTransactionPending(false);
      refreshComponents();
      // Refresh balances after successful unwrap
      forceBalanceRefresh();
    } else if (isDowngradeError) {
      console.error("Downgrade transaction failed");
      setTransactionStatus("Unwrap failed!");
      setIsTransactionPending(false);
    }
  }, [isDowngradeSuccess, isDowngradeError, refreshComponents, forceBalanceRefresh]);

  const superXocBalance = useBalanceOf({
    tokenAddress: "0xedF89f2612a5B07FEF051e1a0444342B5410C405",
    walletAddress: accountAddress as Address,
  });

  // Hook to read the XOC contract allowance for the supertoken contract
  const {
    data: xocAllowance,
    isError,
    isLoading,
    refetch: refetchAllowance,
  } = useReadContract({
    address: xocContract,
    abi: ERC20ABI,
    functionName: "allowance",
    args: [accountAddress, "0xedF89f2612a5B07FEF051e1a0444342B5410C405"],
  });

  useEffect(() => {
    if (isError) {
      console.error("Error fetching allowance");
      xocSetAllowanceState("0");
    } else if (!isLoading && xocAllowance) {
      const formattedAllowance = (Number.parseFloat(xocAllowance.toString()) / 1e18).toString();
      xocSetAllowanceState(formattedAllowance);
    }
  }, [xocAllowance, isError, isLoading]);

  useEffect(() => {
    const amount = Number.parseFloat(tokenAmount) || 0;
    if (tab === "upgrade") {
      const xocAmountInWei = amount * 1e18;
      const xocAllowanceInWei = Number.parseFloat(xocAllowanceState) * 1e18;
      const needsApproval = xocAmountInWei > xocAllowanceInWei;
      console.log("Approval check:", {
        amount,
        xocAmountInWei: xocAmountInWei.toString(),
        xocAllowanceState,
        xocAllowanceInWei: xocAllowanceInWei.toString(),
        needsApproval,
      });
      setRequiresApproval(needsApproval);
    } else {
      setRequiresApproval(false);
    }
  }, [tokenAmount, xocAllowanceState, tab]);

  // Handle approval transaction success/error states
  useEffect(() => {
    if (isApproveSuccess) {
      console.log("Approval transaction successful");
      setTransactionStatus("Approval successful!");
      setIsTransactionPending(false);
      refreshComponents();

      // Refetch allowance with multiple attempts to ensure it updates
      refetchAllowance();
      setTimeout(() => {
        console.log("Refreshing allowance after delay...");
        refetchAllowance();
      }, 2000);
      setTimeout(() => {
        console.log("Final allowance refresh...");
        refetchAllowance();
      }, 5000);
    } else if (isApproveError) {
      console.error("Approval transaction failed");
      setTransactionStatus("Approval failed!");
      setIsTransactionPending(false);
    }
  }, [isApproveSuccess, isApproveError, refreshComponents, refetchAllowance]);

  const handleUpgrade = async () => {
    if (!accountAddress) {
      console.error("Account address not found");
      return;
    }
    const amount = Number.parseFloat(tokenAmount) || 0;
    const xocAmountInWei = parseEther(amount.toString());
    try {
      setIsTransactionPending(true);
      setTransactionStatus("Wrapping tokens...");
      await upgradeXOC({
        abi: supertokenABI,
        address: "0xedF89f2612a5B07FEF051e1a0444342B5410C405",
        functionName: "upgrade",
        args: [xocAmountInWei],
      });
    } catch (error) {
      console.error("Error executing contract function:", error);
      setTransactionStatus("Wrap failed!");
      setIsTransactionPending(false);
    }
  };

  const handleXocApproval = async () => {
    const amount = Number.parseFloat(tokenAmount) || 0;
    const xocAmountInWei = amount * 1e18;
    try {
      setIsTransactionPending(true);
      setTransactionStatus("Approving tokens...");
      if (xocAmountInWei > Number.parseFloat(xocAllowanceState)) {
        await approveERC20({
          abi: ERC20ABI,
          address: xocContract,
          functionName: "approve",
          args: ["0xedF89f2612a5B07FEF051e1a0444342B5410C405", xocAmountInWei],
        });
      }
    } catch (err) {
      console.error("Error approving XOC tokens:", err);
      setTransactionStatus("Approval failed!");
      setIsTransactionPending(false);
    }
  };

  const handleDowngrade = async () => {
    if (!accountAddress) {
      console.error("Account address not found");
      return;
    }
    const amount = Number.parseFloat(tokenAmount) || 0;
    const xocAmountInWei = parseEther(amount.toString());
    try {
      setIsTransactionPending(true);
      setTransactionStatus("Unwrapping tokens...");
      await downgradeSuperXOC({
        abi: supertokenABI,
        address: "0xedF89f2612a5B07FEF051e1a0444342B5410C405",
        functionName: "downgrade",
        args: [xocAmountInWei],
      });
    } catch (error) {
      console.error("Error executing downgrade function:", error);
      setTransactionStatus("Unwrap failed!");
      setIsTransactionPending(false);
    }
  };

  // Balance validation effect
  useEffect(() => {
    const amount = Number.parseFloat(tokenAmount);
    if (isNaN(amount) || amount <= 0) {
      setTokenError("Please enter a valid amount");
      return;
    }

    if (tab === "upgrade") {
      if (amount > Number.parseFloat(xocBalance || "0")) {
        setTokenError("Insufficient XOC balance");
      } else {
        setTokenError(null);
      }
    } else {
      if (amount > Number.parseFloat(superXocBalance || "0")) {
        setTokenError("Insufficient Super XOC balance");
      } else {
        setTokenError(null);
      }
    }
  }, [tokenAmount, xocBalance, superXocBalance, tab]);

  // USD value calculation effect
  useEffect(() => {
    const amount = Number.parseFloat(tokenAmount);
    if (!isNaN(amount) && amount > 0) {
      setUsdValue(`$${(amount * 0).toFixed(2)}`);
    } else {
      setUsdValue("$0.00");
    }
  }, [tokenAmount]);

  const handleMaxClick = () => {
    if (tab === "upgrade") {
      if (xocBalance) setTokenAmount(xocBalance);
    } else {
      if (superXocBalance) setTokenAmount(superXocBalance);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setTokenAmount(value);
    }
  };

  return (
    <div
      data-token-converter
      className="bg-white dark:bg-base-100 rounded-2xl p-6 mx-auto overflow-hidden shadow-lg transition-all duration-300 w-full"
    >
      {/* Tabs */}
      <div className="flex mb-6 gap-4">
        <button
          className={`px-6 py-2 rounded-full font-medium text-sm transition-colors ${
            tab === "upgrade"
              ? "bg-primary dark:bg-secondary text-white dark:text-gray-400"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
          }`}
          onClick={() => setTab("upgrade")}
        >
          Wrap
        </button>
        <button
          className={`px-6 py-2 rounded-full font-medium text-sm transition-colors ${
            tab === "downgrade"
              ? "bg-primary dark:bg-secondary text-white dark:text-gray-400"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
          }`}
          onClick={() => setTab("downgrade")}
        >
          Unwrap
        </button>
      </div>

      {/* First input field */}
      <div className="mb-2 bg-gray-50 dark:bg-secondary rounded-xl p-4">
        <div className="flex justify-between items-center mb-2">
          <input
            type="text"
            value={tokenAmount}
            onChange={handleInputChange}
            className="bg-transparent text-gray-900 dark:text-white text-4xl font-light w-full focus:outline-none"
            placeholder="0.0"
          />
          <div className="flex items-center bg-gray-100 dark:bg-[#3a3a3a] rounded-lg px-3 py-2 text-gray-900 dark:text-white">
            <span className="mr-1">{tab === "upgrade" ? "XOC" : "sXOC"}</span>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 dark:text-gray-400">{usdValue}</span>
          <div className="flex items-center">
            <span className="text-gray-500 dark:text-gray-400 mr-1">
              Balance: {tab === "upgrade" ? xocBalance || "0" : superXocBalance || "0"}
            </span>
            <button
              className="text-green-600 dark:text-green-500 font-medium ml-1 hover:text-green-700 dark:hover:text-green-400"
              onClick={handleMaxClick}
            >
              MAX
            </button>
          </div>
        </div>
      </div>

      {/* Arrow down */}
      <div className="flex justify-center -my-1">
        <div className="bg-gray-50 dark:bg-secondary rounded-full p-2">
          <ArrowDown size={16} className="text-gray-500 dark:text-gray-400" />
        </div>
      </div>

      {/* Second input field */}
      <div className="mt-2 mb-4 bg-gray-50 dark:bg-secondary rounded-xl p-4">
        <div className="flex justify-between items-center mb-2">
          <input
            type="text"
            value={tokenAmount}
            onChange={handleInputChange}
            className="bg-transparent text-gray-900 dark:text-white text-4xl font-light w-full focus:outline-none"
            placeholder="0.0"
          />
          <div className="flex items-center bg-gray-100 dark:bg-[#3a3a3a] rounded-lg px-3 py-2 text-gray-900 dark:text-white">
            <span className="mr-1">{tab === "upgrade" ? "sXOC" : "XOC"}</span>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 dark:text-gray-400">{usdValue}</span>
          <div className="flex items-center">
            <span className="text-gray-500 dark:text-gray-400">
              Balance: {tab === "upgrade" ? superXocBalance || "0" : xocBalance || "0"}
            </span>
          </div>
        </div>
      </div>

      {/* Exchange rate */}
      <div className="text-center text-gray-600 dark:text-gray-300 mb-6">1 XOC = 1 sXOC ({usdValue})</div>

      {/* Action button */}
      <button
        className={`w-full py-4 rounded-xl font-medium text-white transition-colors ${
          tokenError || Number.parseFloat(tokenAmount) <= 0 || isTransactionPending
            ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700"
        }`}
        disabled={!!tokenError || Number.parseFloat(tokenAmount) <= 0 || isTransactionPending}
        onClick={() => {
          if (tab === "upgrade") {
            if (requiresApproval) {
              handleXocApproval();
            } else {
              handleUpgrade();
            }
          } else {
            handleDowngrade();
          }
        }}
      >
        {isTransactionPending ? (
          <div className="flex items-center justify-center">
            <Loader2 className="animate-spin mr-2" size={16} />
            {transactionStatus}
          </div>
        ) : tokenError ? (
          tokenError
        ) : tab === "upgrade" ? (
          requiresApproval ? (
            "Approve"
          ) : (
            "Wrap"
          )
        ) : (
          "Unwrap"
        )}
      </button>
    </div>
  );
};

export default TokenConverter;
