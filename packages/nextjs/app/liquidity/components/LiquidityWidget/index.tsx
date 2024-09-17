"use client";

import React, { useEffect, useState } from "react";
import { spenderAddress, usdcContract, xocContract } from "@/app/constants/contracts";
import { Address, formatUnits, parseEther, parseUnits } from "viem";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { ERC20ABI } from "~~/app/components/abis/erc20";
import { liquidityABI } from "~~/app/components/abis/liquidity";
import { useTranslation } from "~~/app/context/LanguageContext";
import { useBalanceOf } from "~~/hooks/useBalanceOf";

// Use parseUnits for USDC

const LiquidityWidget: React.FC = () => {
  const { address: accountAddress } = useAccount(); // Get the address, not the entire account object
  const { t } = useTranslation();
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

  console.log("XOC Balance", xocBalance);
  console.log("USDC Balance", usdcBalance);

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
      // Approve USDC
      if (usdcAmount > parseFloat(usdcAllowanceState)) {
        await approveERC20({
          abi: ERC20ABI,
          address: usdcContract,
          functionName: "approve",
          args: [spenderAddress, usdcAmount * 1e6], // Multiply by 1e6 to convert to USDC decimals
        });
      }

      // Approve XOC
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

  console.log("Shares Balance", sharesBalance);

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
            <span className="text-gray-500 mr-1">{`${t("Balance")}: ${usdcBalance || 0}`}</span>
            <span className="font-bold hover:underline cursor-pointer dark: text-primary" onClick={handleUSDCMaxClick}>
              MAX
            </span>
            {usdcError && <p className="text-red-500 mt-2">{usdcError}</p>} {/* Display USDC balance error */}
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
            <span className="text-gray-500 mr-1">{`${t("Balance")}: ${xocBalance || 0}`}</span>
            <span className="font-bold hover:underline cursor-pointer dark: text-primary" onClick={handleXOCMaxClick}>
              MAX
            </span>
            {xocError && <p className="text-red-500 mt-2">{xocError}</p>} {/* Display XOC balance error */}
          </div>
        </div>
      ) : (
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-gray-700">{t("XoktleShareIndicate")}</label>
            <input
              type="number"
              value={shareAmount} // This will represent the share amount to withdraw
              onChange={e => setShareAmount(e.target.value)}
              className="w-full p-2 border rounded-lg dark:bg-neutral dark:text-neutral-content"
              placeholder={t("XoktleShareAmount")}
            />
            <span className="text-gray-500 mr-1">{`${t("Balance")}: ${
              sharesBalance && typeof sharesBalance === "bigint" ? formatUnits(sharesBalance, 18) : 0
            }`}</span>
            <span
              className="font-bold hover:underline cursor-pointer dark: text-primary"
              onClick={handleSharesMaxClick}
            >
              MAX
            </span>
            {sharesError && <p className="text-red-500 mt-2">{sharesError}</p>} {/* Display shares balance error */}
          </div>
        </div>
      )}

      <button
        className="w-full py-3 bg-base-300 text-2xl text-white font-semibold rounded-lg"
        onClick={() => {
          if (requiresApproval) {
            handleApproval(); // Call handleApproval when approval is needed
          } else if (action === "Deposit" && !usdcError && !xocError) {
            handleDeposit(); // Call handleDeposit if deposit is selected
          } else if (action === "Withdraw" && !sharesError) {
            handleWithdrawal(); // Call handleWithdrawal if withdraw is selected
          }
        }}
      >
        {requiresApproval ? t("Approve") : action}
      </button>
    </div>
  );
};

export default LiquidityWidget;
