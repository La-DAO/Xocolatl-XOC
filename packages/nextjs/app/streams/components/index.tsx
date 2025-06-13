"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { ArrowDown, ChevronDown } from "lucide-react";
import { type Address, parseEther } from "viem";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { supertokenABI } from "~~/app/components/abis/Supertoken";
import { ERC20ABI } from "~~/app/components/abis/erc20";
import { spenderAddress, xocContract } from "~~/app/constants/contracts";
import { useBalanceOf } from "~~/hooks/useBalanceOf";

const TokenConverter = () => {
  const { address: accountAddress } = useAccount();
  const [tab, setTab] = useState<"upgrade" | "downgrade">("upgrade");
  const [tokenAmount, setTokenAmount] = useState<string>("0.0");
  const [tokenError, setTokenError] = useState<string | null>(null);
  const [usdValue, setUsdValue] = useState<string>("$0.00");

  const xocBalance = useBalanceOf({ tokenAddress: xocContract, walletAddress: accountAddress as Address });
  const [xocAllowanceState, xocSetAllowanceState] = useState<string>("0");
  const [requiresApproval, setRequiresApproval] = useState(false);

  // Write contract hooks
  const { writeContract: upgradeXOC } = useWriteContract();
  const { writeContract: approveERC20 } = useWriteContract();
  const { writeContract: downgradeSuperXOC } = useWriteContract();

  const superXocBalance = useBalanceOf({
    tokenAddress: "0xedF89f2612a5B07FEF051e1a0444342B5410C405",
    walletAddress: accountAddress as Address,
  });

  // Hook to read the XOC contract allowance
  const {
    data: xocAllowance,
    isError,
    isLoading,
  } = useReadContract({
    address: xocContract,
    abi: ERC20ABI,
    functionName: "allowance",
    args: [accountAddress, spenderAddress],
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
      setRequiresApproval(needsApproval);
    } else {
      setRequiresApproval(false);
    }
  }, [tokenAmount, xocAllowanceState, tab]);

  const handleUpgrade = async () => {
    if (!accountAddress) {
      console.error("Account address not found");
      return;
    }
    const amount = Number.parseFloat(tokenAmount) || 0;
    const xocAmountInWei = parseEther(amount.toString());
    try {
      const tx = await upgradeXOC({
        abi: supertokenABI,
        address: "0xedF89f2612a5B07FEF051e1a0444342B5410C405",
        functionName: "upgrade",
        args: [xocAmountInWei],
      });
      console.log("Transaction submitted:", tx);
    } catch (error) {
      console.error("Error executing contract function:", error);
    }
  };

  const handleXocApproval = async () => {
    const amount = Number.parseFloat(tokenAmount) || 0;
    const xocAmountInWei = amount * 1e18;
    try {
      if (xocAmountInWei > Number.parseFloat(xocAllowanceState)) {
        await approveERC20({
          abi: ERC20ABI,
          address: xocContract,
          functionName: "approve",
          args: [spenderAddress, xocAmountInWei],
        });
      }
    } catch (err) {
      console.error("Error approving XOC tokens:", err);
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
      const tx = await downgradeSuperXOC({
        abi: supertokenABI,
        address: "0xedF89f2612a5B07FEF051e1a0444342B5410C405",
        functionName: "downgrade",
        args: [xocAmountInWei],
      });
      console.log("Downgrade transaction submitted:", tx);
    } catch (error) {
      console.error("Error executing downgrade function:", error);
    }
  };

  useEffect(() => {
    const amount = Number.parseFloat(tokenAmount) || 0;
    if (tab === "upgrade") {
      if (xocBalance && amount > Number.parseFloat(xocBalance)) {
        setTokenError("Insufficient balance");
      } else {
        setTokenError(null);
      }
    } else {
      if (superXocBalance && amount > Number.parseFloat(superXocBalance)) {
        setTokenError("Insufficient balance");
      } else {
        setTokenError(null);
      }
    }

    // Update USD value (mock calculation)
    setUsdValue(`$${(amount * 0).toFixed(2)}`);
  }, [tokenAmount, xocBalance, superXocBalance, tab]);

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
    <div className="bg-white dark:bg-base-100 rounded-2xl p-6 max-w-md mx-auto overflow-hidden shadow-lg">
      {/* Blue accent in top right corner */}
      <div className="absolute top-0 right-0 w-16 h-8 bg-blue-500 dark:bg-blue-600 rounded-bl-2xl"></div>

      {/* Tabs */}
      <div className="flex mb-6 gap-4">
        <button
          className={`px-6 py-2 rounded-full font-medium text-sm transition-colors ${
            tab === "upgrade"
              ? "bg-secondary dark:bg-secondary text-neutral dark:text-gray-400"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
          }`}
          onClick={() => setTab("upgrade")}
        >
          Wrap
        </button>
        <button
          className={`px-6 py-2 rounded-full font-medium text-sm transition-colors ${
            tab === "downgrade"
              ? "bg-secondary dark:bg-secondary text-neutral dark:text-gray-400"
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
            readOnly
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
          tokenError || Number.parseFloat(tokenAmount) <= 0
            ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700"
        }`}
        disabled={!!tokenError || Number.parseFloat(tokenAmount) <= 0}
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
        {tokenError ? tokenError : tab === "upgrade" ? (requiresApproval ? "Approve" : "Wrap") : "Unwrap"}
      </button>
    </div>
  );
};

export default TokenConverter;
