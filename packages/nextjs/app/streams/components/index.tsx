"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { NextPage } from "next";
import { Address, parseEther } from "viem";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { supertokenABI } from "~~/app/components/abis/Supertoken";
import { ERC20ABI } from "~~/app/components/abis/erc20";
import { spenderAddress, xocContract } from "~~/app/constants/contracts";
import { useBalanceOf } from "~~/hooks/useBalanceOf";

const TokenConverter: NextPage = () => {
  const { address: accountAddress } = useAccount();
  const [tab, setTab] = useState<"upgrade" | "downgrade">("upgrade");
  const [xocAmount, setXocAmount] = useState<number>(0);
  const [xocError, setXocError] = useState<string | null>(null);
  const xocBalance = useBalanceOf({ tokenAddress: xocContract, walletAddress: accountAddress as Address });
  const [xocAllowanceState, xocSetAllowanceState] = useState<string>("0");
  const [requiresApproval, setRequiresApproval] = useState(false);

  //write contract
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
    args: [accountAddress, spenderAddress], // Only pass the address
  });

  useEffect(() => {
    if (isError) {
      console.error("Error fetching allowance");
      xocSetAllowanceState("0");
    } else if (!isLoading && xocAllowance) {
      const formattedAllowance = (parseFloat(xocAllowance.toString()) / 1e18).toString(); // Convert from Wei to readable format
      xocSetAllowanceState(formattedAllowance);
    }
  }, [xocAllowance, isError, isLoading]);

  useEffect(() => {
    if (tab === "upgrade") {
      const xocAmountInWei = xocAmount * 1e18; // XOC amount in Wei
      const xocAllowanceInWei = parseFloat(xocAllowanceState) * 1e18; // Allowance in Wei
      const needsApproval = xocAmountInWei > xocAllowanceInWei;
      setRequiresApproval(needsApproval);
    } else {
      setRequiresApproval(false); // No approval needed for downgrade
    }
  }, [xocAmount, xocAllowanceState, tab]);

  const handleUpgrade = async () => {
    if (!accountAddress) {
      console.error("Account address not found");
      return;
    }
    const xocAmountInWei = parseEther(xocAmount.toString());
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

  // Function to handle XOC approval
  const handleXocApproval = async () => {
    const xocAmountInWei = xocAmount * 1e18;
    try {
      if (xocAmountInWei > parseFloat(xocAllowanceState)) {
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

  // Downgrade handler
  const handleDowngrade = async () => {
    if (!accountAddress) {
      console.error("Account address not found");
      return;
    }
    const xocAmountInWei = parseEther(xocAmount.toString());
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

  // Validate balance against input
  useEffect(() => {
    if (tab === "upgrade") {
      if (xocBalance && xocAmount > parseFloat(xocBalance)) {
        setXocError("You don't have enough XOC tokens in your wallet");
      } else {
        setXocError(null);
      }
    } else {
      if (superXocBalance && xocAmount > parseFloat(superXocBalance)) {
        setXocError("You don't have enough Super XOC tokens in your wallet");
      } else {
        setXocError(null);
      }
    }
  }, [xocAmount, xocBalance, superXocBalance, tab]);

  // Set max for current tab
  const handleXOCMaxClick = () => {
    if (tab === "upgrade") {
      if (xocBalance) setXocAmount(parseFloat(xocBalance));
    } else {
      if (superXocBalance) setXocAmount(parseFloat(superXocBalance));
    }
  };

  return (
    <div className="bg-white rounded-lg border p-6 max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 dark:text-primary">Token Converter</h2>
      {/* Tabs */}
      <div className="flex mb-6 border-b">
        <button
          className={clsx(
            "px-4 py-2 font-semibold focus:outline-none transition-colors",
            tab === "upgrade" ? "border-b-2 border-indigo-600 text-indigo-600" : "text-gray-500 hover:text-indigo-600",
          )}
          onClick={() => setTab("upgrade")}
        >
          Upgrade
        </button>
        <button
          className={clsx(
            "px-4 py-2 font-semibold focus:outline-none transition-colors",
            tab === "downgrade"
              ? "border-b-2 border-indigo-600 text-indigo-600"
              : "text-gray-500 hover:text-indigo-600",
          )}
          onClick={() => setTab("downgrade")}
        >
          Downgrade
        </button>
      </div>
      <div className="mb-4">
        <label htmlFor="xocAmount" className="block text-lg font-medium text-gray-700 mb-1">
          {tab === "upgrade" ? "XOC Amount:" : "Super XOC Amount:"}
        </label>
        <input
          type="number"
          id="xocAmount"
          value={xocAmount}
          onChange={e => setXocAmount(Number(e.target.value))}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-lg border-gray-300 rounded-md dark:bg-base-100 px-2"
        />
        <span className="text-gray-500 mr-1">
          {tab === "upgrade" ? `Balance: ${xocBalance || 0}` : `Balance: ${superXocBalance || 0}`}
        </span>
        <span className="font-bold hover:underline cursor-pointer dark: text-primary" onClick={handleXOCMaxClick}>
          MAX
        </span>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-4 dark:text-primary">{`Super XOC Balance: ${superXocBalance || 0}`}</h2>
      </div>
      <div className="mb-4"></div>
      {tab === "upgrade" && <span className="text-gray-500 ml-2">{`Allowance: ${xocAllowanceState}`}</span>}
      <button
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => {
          if (tab === "upgrade") {
            if (requiresApproval) {
              handleXocApproval();
            } else if (!xocError) {
              handleUpgrade();
            }
          } else if (tab === "downgrade" && !xocError) {
            handleDowngrade();
          }
        }}
      >
        {tab === "upgrade" ? (requiresApproval ? "Approve" : "Upgrade") : "Downgrade"}
      </button>
      {xocError && <p className="text-red-500 mt-2">{xocError}</p>}
    </div>
  );
};

export default TokenConverter;
