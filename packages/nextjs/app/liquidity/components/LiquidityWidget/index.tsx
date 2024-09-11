"use client";

import React, { useEffect, useState } from "react";
import { spenderAddress, usdcContract, xocContract } from "@/app/constants/contracts";
import { parseEther, parseUnits } from "viem";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { ERC20ABI } from "~~/app/components/abis/erc20";
import { liquidityABI } from "~~/app/components/abis/liquidity";
import { useTranslation } from "~~/app/context/LanguageContext";

// Use parseUnits for USDC

const LiquidityWidget: React.FC = () => {
  const { address: accountAddress } = useAccount(); // Get the address, not the entire account object
  const { t } = useTranslation();
  const [action, setAction] = useState<"Deposit" | "Withdraw">("Deposit");
  const [tokenA, setTokenA] = useState(""); // USDC amount
  const [tokenB, setTokenB] = useState(""); // XOC amount
  const [xocAllowanceState, xocSetAllowanceState] = useState<string>("0");
  const [usdcAllowanceState, usdcSetAllowanceState] = useState<string>("0");

  // State to track if approval is needed
  const [requiresApproval, setRequiresApproval] = useState(false);

  const { writeContract: deposit } = useWriteContract();

  const { writeContract: approveERC20 } = useWriteContract();

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
      const allowanceInEther = (Number(xocAllowance) / 1e18).toFixed(7);
      xocSetAllowanceState(allowanceInEther);
    }
  }, [xocAllowance, isError, isLoading]);

  // Hook to read the USDC contract allowance
  const {
    data: usdcAllowance,
    isError: usdcIsError,
    isLoading: usdcIsLoading,
  } = useReadContract({
    address: usdcContract,
    abi: ERC20ABI,
    functionName: "allowance",
    args: [accountAddress, spenderAddress],
  });

  useEffect(() => {
    if (usdcIsError) {
      console.error("Error fetching allowance");
      usdcSetAllowanceState("0");
    } else if (!usdcIsLoading && usdcAllowance) {
      const allowanceInEther = (Number(usdcAllowance) / 1e6).toFixed(7); // USDC has 6 decimals
      usdcSetAllowanceState(allowanceInEther);
    }
  }, [usdcAllowance, usdcIsError, usdcIsLoading]);

  // Trigger approval check whenever tokenA or tokenB changes
  useEffect(() => {
    // Function to check if approval is required
    const checkIfApprovalNeeded = () => {
      const usdcAmount = parseFloat(tokenA) || 0;
      const xocAmount = parseFloat(tokenB) || 0;

      // Compare the input values against the allowance states
      const needsApproval = xocAmount > parseFloat(xocAllowanceState) || usdcAmount > parseFloat(usdcAllowanceState);
      setRequiresApproval(needsApproval);
    };

    checkIfApprovalNeeded();
  }, [tokenA, tokenB, xocAllowanceState, usdcAllowanceState]);

  const handleActionChange = (newAction: "Deposit" | "Withdraw") => {
    setAction(newAction);
  };

  // Function to handle the deposit
  const handleDeposit = async () => {
    if (!accountAddress) {
      console.error("Account address not found");
      return;
    }

    const usdcAmount = parseFloat(tokenA) || 0;
    const xocAmount = parseFloat(tokenB) || 0;
    const xocAmountInWei = parseEther(xocAmount.toString()); // XOC uses 18 decimals
    const usdcAmountInWei = parseUnits(usdcAmount.toString(), 6); // USDC uses 6 decimals

    try {
      const tx = await deposit({
        abi: liquidityABI,
        address: "0xD6DaB267b7C23EdB2ed5605d9f3f37420e88e291", // Liquidity contract address
        functionName: "deposit",
        args: [usdcAmountInWei, xocAmountInWei, accountAddress],
      });

      console.log("Transaction submitted:", tx);
      // Optionally wait for the transaction to be mined
      // const receipt = await tx.wait();
      // console.log("Transaction confirmed:", receipt);
    } catch (err) {
      console.error("Error executing contract function:", err);
    }
  };

  // Function to handle approval
  const handleApproval = async () => {
    const usdcAmount = parseFloat(tokenA) || 0;
    const xocAmount = parseFloat(tokenB) || 0;

    try {
      // Approve XOC
      if (usdcAmount > parseFloat(usdcAllowanceState)) {
        await approveERC20({
          abi: ERC20ABI,
          address: usdcContract,
          functionName: "approve",
          args: [spenderAddress, usdcAmount * 1e6], // Multiply by 1e6 to convert to USDC decimals
        });
      }

      // Approve USDC
      if (xocAmount > parseFloat(xocAllowanceState)) {
        await approveERC20({
          abi: ERC20ABI,
          address: xocContract,
          functionName: "approve",
          args: [spenderAddress, xocAmount * 1e18], // Multiply by 1e18 to convert to XOC decimals
        });
      }
    } catch (err) {
      console.error("Error approving tokens:", err);
    }
  };

  console.log("Xoc Allowance", xocAllowanceState);
  console.log("USDC Allowance", usdcAllowanceState);

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md mt-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{t("XoktleLiquidityTitle")}</h2>
        <hr className="border-t-2 border-gray-300 rounded-t-full" />
      </div>

      <div className="mb-6 flex justify-center">
        <div className="flex">
          <button
            onClick={() => handleActionChange("Deposit")}
            className={`px-6 py-2 rounded-l-full ${
              action === "Deposit" ? "bg-base-300 text-xl text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            {t("XoktleDepositSwitcher")}
          </button>
          <button
            onClick={() => handleActionChange("Withdraw")}
            className={`px-6 py-2 rounded-r-full ${
              action === "Withdraw" ? "bg-base-300 text-xl text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            {t("XoktleWithdrawSwitcher")}
          </button>
        </div>
      </div>

      {/* Conditionally render input fields based on the selected action */}
      {action === "Deposit" ? (
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-gray-700">{t("XoktleUSDCIndicate")}</label>
            <input
              type="number"
              value={tokenA}
              onChange={e => setTokenA(e.target.value)}
              className="w-full p-2 border rounded-lg dark:bg-neutral dark:text-neutral-content"
              placeholder={t("XoktleUSDCAmount")}
            />
          </div>

          <div>
            <label className="block text-gray-700">{t("XoktleXOCIndicate")}</label>
            <input
              type="number"
              value={tokenB}
              onChange={e => setTokenB(e.target.value)}
              className="w-full p-2 border rounded-lg dark:bg-neutral dark:text-neutral-content"
              placeholder={t("XoktleXOCAmount")}
            />
          </div>
        </div>
      ) : (
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-gray-700">{t("XoktleShareIndicate")}</label>
            <input
              type="number"
              value={tokenB} // This will represent the share amount to withdraw
              onChange={e => setTokenB(e.target.value)}
              className="w-full p-2 border rounded-lg dark:bg-neutral dark:text-neutral-content"
              placeholder={t("XoktleShareAmount")}
            />
          </div>
        </div>
      )}

      <button
        className="w-full py-3 bg-base-300 text-2xl text-white font-semibold rounded-lg"
        onClick={() => {
          if (requiresApproval) {
            handleApproval(); // Call handleApproval when approval is needed
          } else {
            handleDeposit(); // Call handleDeposit if approval isn't required
          }
        }}
      >
        {requiresApproval ? t("Approve") : action}
      </button>
    </div>
  );
};

export default LiquidityWidget;
