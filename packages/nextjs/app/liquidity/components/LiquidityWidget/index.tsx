"use client";

import React, { useEffect, useState } from "react";
import { spenderAddress, usdcContract, xocContract } from "@/app/constants/contracts";
import { Address, formatUnits, parseEther, parseUnits } from "viem";
import { useAccount, useChainId, useReadContract, useWriteContract } from "wagmi";
import { ERC20ABI } from "~~/app/components/abis/erc20";
import { liquidityABI } from "~~/app/components/abis/liquidity";
import { useTranslation } from "~~/app/context/LanguageContext";
import { useBalanceOf } from "~~/hooks/useBalanceOf";

// Use parseUnits for USDC

const LiquidityWidget: React.FC = () => {
  const { address: accountAddress } = useAccount(); // Get the address, not the entire account object
  const { t } = useTranslation();
  const chainId = useChainId();
  const [action, setAction] = useState<"Deposit" | "Withdraw">("Deposit");
  const [tokenA, setTokenA] = useState(""); // USDC amount
  const [tokenB, setTokenB] = useState(""); // XOC amount
  const [xocAllowanceState, xocSetAllowanceState] = useState<string>("0");
  const [usdcAllowanceState, usdcSetAllowanceState] = useState<string>("0");

  // State for share withdrawal input
  const [shareAmount, setShareAmount] = useState(""); // Share amount

  // State to track errors
  const [usdcError, setUsdcError] = useState<string | null>(null);
  const [xocError, setXocError] = useState<string | null>(null);
  const [sharesError, setSharesError] = useState<string | null>(null);

  // State to track if approval is needed
  const [requiresApproval, setRequiresApproval] = useState(false);

  const [approvalLoading, setApprovalLoading] = useState(false); // New state to track loading

  const { writeContract: deposit } = useWriteContract();

  const { writeContract: approveERC20 } = useWriteContract();

  const { writeContract: withdraw } = useWriteContract();

  const xocBalance = useBalanceOf({ tokenAddress: xocContract, walletAddress: accountAddress as Address });
  const usdcBalance = useBalanceOf({ tokenAddress: usdcContract, walletAddress: accountAddress as Address });

  // Fetch the balanceOf using the accountAddress
  const { data: sharesBalance } = useReadContract({
    address: "0xD6DaB267b7C23EdB2ed5605d9f3f37420e88e291", // Liquidity contract address
    abi: liquidityABI,
    functionName: "balanceOf",
    args: [accountAddress], // Pass accountAddress as argument to balanceOf
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

  const handleApproval = async () => {
    setApprovalLoading(true); // Start the loading state immediately
    try {
      const usdcAmount = parseFloat(tokenA) || 0;
      const xocAmount = parseFloat(tokenB) || 0;

      // Approve USDC if needed
      if (usdcAmount > parseFloat(usdcAllowanceState)) {
        await approveERC20({
          abi: ERC20ABI,
          address: usdcContract,
          functionName: "approve",
          args: [spenderAddress, usdcAmount * 1e6],
        });
      }

      // Approve XOC if needed
      if (xocAmount > parseFloat(xocAllowanceState)) {
        await approveERC20({
          abi: ERC20ABI,
          address: xocContract,
          functionName: "approve",
          args: [spenderAddress, xocAmount * 1e18],
        });
      }
    } catch (err) {
      console.error("Error approving tokens:", err);
    } finally {
      setApprovalLoading(false); // Stop the loading state after completion
    }
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

  // Function to handle the withdrawal
  const handleWithdrawal = async () => {
    if (!accountAddress) {
      console.error("Account address not found");
      return;
    }

    const shareAmountInWei = parseEther(shareAmount.toString()); // XOC uses 18 decimals

    try {
      const tx = await withdraw({
        abi: liquidityABI,
        address: "0xD6DaB267b7C23EdB2ed5605d9f3f37420e88e291", // Liquidity contract address
        functionName: "withdraw",
        args: [shareAmountInWei, accountAddress],
      });

      console.log("Transaction submitted:", tx);
      // Optionally wait for the transaction to be mined
      // const receipt = await tx.wait();
      // console.log("Transaction confirmed:", receipt);
    } catch (err) {
      console.error("Error executing contract function:", err);
    }
  };

  // Validate USDC balance against input
  useEffect(() => {
    const usdcAmount = parseFloat(tokenA) || 0;
    if (usdcBalance && usdcAmount > parseFloat(usdcBalance)) {
      setUsdcError("You don't have enough USDC tokens in your wallet");
    } else {
      setUsdcError(null); // Clear error if valid
    }
  }, [tokenA, usdcBalance]);

  // Validate XOC balance against input
  useEffect(() => {
    const xocAmount = parseFloat(tokenB) || 0;
    if (xocBalance && xocAmount > parseFloat(xocBalance)) {
      setXocError("You don't have enough XOC tokens in your wallet");
    } else {
      setXocError(null); // Clear error if valid
    }
  }, [tokenB, xocBalance]);

  // Validate shares balance against input for withdrawal
  useEffect(() => {
    const sharesAmount = parseFloat(shareAmount) || 0;

    // Ensure sharesBalance is available and of type bigint
    if (sharesBalance && typeof sharesBalance === "bigint") {
      // Convert BigInt to a readable number, assuming 18 decimals
      const formattedSharesBalance = parseFloat(formatUnits(sharesBalance, 18));

      // Validate against user's input
      if (sharesAmount > formattedSharesBalance) {
        setSharesError("You don't have enough shares to withdraw");
      } else {
        setSharesError(null);
      }
    }
  }, [shareAmount, sharesBalance]);

  // Function to set the maximum available balance for USDC
  const handleUSDCMaxClick = () => {
    if (usdcBalance) {
      setTokenA(usdcBalance.toString());
    }
  };

  // Function to set the maximum available balance for XOC
  const handleXOCMaxClick = () => {
    if (xocBalance) {
      setTokenB(xocBalance.toString());
    }
  };

  // Function to set the maximum available balance for shares
  const handleSharesMaxClick = () => {
    // Ensure sharesBalance is available and of type bigint
    if (sharesBalance && typeof sharesBalance === "bigint") {
      // Convert BigInt to a readable number, assuming 18 decimals
      const formattedSharesBalance = parseFloat(formatUnits(sharesBalance, 18));
      setShareAmount(formattedSharesBalance.toString());
    }
  };

  // Modify the button style and text based on chainId
  const isWrongNetwork = chainId !== 8453;
  const buttonLabel = approvalLoading
    ? t("Processing...") // Show "Processing" when loading
    : isWrongNetwork
    ? t("Wrong Network!")
    : requiresApproval
    ? t("Approve")
    : action;

  const buttonClass = approvalLoading
    ? "w-full py-3 bg-gray-500 text-xl text-white font-semibold rounded-lg cursor-not-allowed"
    : isWrongNetwork
    ? "w-full py-3 bg-red-500 text-xl text-white font-semibold rounded-lg"
    : "w-full py-3 bg-secondary dark:bg-base-100 text-xl font-semibold text-white rounded-lg hover:bg-warning hover:text-primary hover:border-2 hover:border-pink-200 hover:dark:border-pink-500 hover:scale-105 transition-all duration-300 hover:shadow-lg";

  return (
    <div className="card shadow-xl bg-primary text-white dark:bg-neutral dark:text-primary">
      <div className="card-body">
        <h3 className="card-title">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
            />
          </svg>
          {t("XoktleLiquidityTitle")}
        </h3>

        <div className="mb-6 flex justify-center">
          <div className="flex w-full max-w-md bg-base-200 dark:bg-base-300 rounded-lg">
            <button
              onClick={() => handleActionChange("Deposit")}
              className={`flex-1 px-6 py-3 border-1 rounded-md transition-all duration-300 font-semibold ${
                action === "Deposit"
                  ? "bg-primary border-2 dark:bg-base-100 text-white shadow-lg scale-105"
                  : "bg-secondary dark:bg-gray-200 dark:text-primary text-base-content hover:bg-warning hover:border-2 hover:border-pink-200 hover:dark:border-pink-500 hover:scale-105 transition-all duration-300 hover:shadow-lg"
              }`}
            >
              {t("XoktleDepositSwitcher")}
            </button>
            <button
              onClick={() => handleActionChange("Withdraw")}
              className={`flex-1 px-6 py-3 rounded-md transition-all duration-300 font-semibold ${
                action === "Withdraw"
                  ? "bg-primary border-2 dark:bg-base-100 text-white shadow-lg scale-105"
                  : "bg-secondary dark:bg-gray-200 dark:text-primary text-base-content hover:bg-warning hover:border-2 hover:border-pink-200 hover:dark:border-pink-500 hover:scale-105 transition-all duration-300 hover:shadow-lg"
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
              <label className="block text-sm font-medium mb-2 text-white dark:text-primary">
                {t("XoktleUSDCIndicate")}
              </label>
              <input
                type="number"
                value={tokenA}
                onChange={e => setTokenA(e.target.value)}
                className="w-full p-3 border rounded-lg bg-base-100 text-base-content"
                placeholder={t("XoktleUSDCAmount")}
              />
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-white dark:text-primary">{`${t("Balance")}: ${usdcBalance || 0}`}</span>
                <span className="font-bold hover:underline cursor-pointer text-accent" onClick={handleUSDCMaxClick}>
                  MAX
                </span>
              </div>
              {usdcError && <p className="text-red-500 mt-2 text-sm">{usdcError}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-white dark:text-primary">
                {t("XoktleXOCIndicate")}
              </label>
              <input
                type="number"
                value={tokenB}
                onChange={e => setTokenB(e.target.value)}
                className="w-full p-3 border rounded-lg bg-base-100 text-base-content"
                placeholder={t("XoktleXOCAmount")}
              />
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-white dark:text-primary">{`${t("Balance")}: ${xocBalance || 0}`}</span>
                <span className="font-bold hover:underline cursor-pointer text-accent" onClick={handleXOCMaxClick}>
                  MAX
                </span>
              </div>
              {xocError && <p className="text-red-500 mt-2 text-sm">{xocError}</p>}
            </div>
          </div>
        ) : (
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-white dark:text-primary">
                {t("XoktleShareIndicate")}
              </label>
              <input
                type="number"
                value={shareAmount}
                onChange={e => setShareAmount(e.target.value)}
                className="w-full p-3 border rounded-lg bg-base-100 text-base-content"
                placeholder={t("XoktleShareAmount")}
              />
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-white dark:text-primary">{`${t("Balance")}: ${
                  sharesBalance && typeof sharesBalance === "bigint" ? formatUnits(sharesBalance, 18) : 0
                }`}</span>
                <span className="font-bold hover:underline cursor-pointer text-accent" onClick={handleSharesMaxClick}>
                  MAX
                </span>
              </div>
              {sharesError && <p className="text-red-500 mt-2 text-sm">{sharesError}</p>}
            </div>
          </div>
        )}

        <div className="card-actions justify-end">
          <button
            className={buttonClass}
            onClick={() => {
              if (!approvalLoading) {
                if (requiresApproval) {
                  handleApproval();
                } else if (action === "Deposit") {
                  handleDeposit();
                } else if (action === "Withdraw") {
                  handleWithdrawal();
                }
              }
            }}
            disabled={approvalLoading}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiquidityWidget;
