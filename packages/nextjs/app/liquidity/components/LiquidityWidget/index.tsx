"use client";

import React, { useEffect, useState } from "react";
import { spenderAddress, usdcContract, xocContract } from "@/app/constants/contracts";
import { useAccount, useReadContract } from "wagmi";
import { ERC20ABI } from "~~/app/components/abis/erc20";
import { useTranslation } from "~~/app/context/LanguageContext";

const LiquidityWidget: React.FC = () => {
  const { address: accountAddress } = useAccount(); // Get the address, not the entire account object
  const { t } = useTranslation();
  const [action, setAction] = useState<"Deposit" | "Withdraw">("Deposit");
  const [tokenA, setTokenA] = useState("");
  const [tokenB, setTokenB] = useState("");
  const [xocAllowanceState, xocSetAllowanceState] = useState<string>("0");
  const [usdcAllowanceState, usdcSetAllowanceState] = useState<string>("0");

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

  console.log("XOCAllowance", xocAllowanceState);

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
      const allowanceInEther = (Number(usdcAllowance) / 1e6).toFixed(7);
      usdcSetAllowanceState(allowanceInEther);
    }
  }, [usdcAllowance, usdcIsError, usdcIsLoading]);

  console.log("USDCAllowance", usdcAllowanceState);

  const handleActionChange = (newAction: "Deposit" | "Withdraw") => {
    setAction(newAction);
  };

  const calculateOutput = () => {
    return parseFloat(tokenA) + parseFloat(tokenB);
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
            {action === "Deposit" ? t("XoktleDepositSwitcher") : t("XoktleWithdrawSwitcher")}
          </button>
          <button
            onClick={() => handleActionChange("Withdraw")}
            className={`px-6 py-2 rounded-r-full ${
              action === "Withdraw" ? "bg-base-300 text-xl text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            {action === "Deposit" ? t("XoktleWithdrawSwitcher") : t("XoktleDepositSwitcher")}
          </button>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-gray-700">{t("XoktleXOCIndicate")}</label>
          <input
            type="number"
            value={tokenA}
            onChange={e => setTokenA(e.target.value)}
            className="w-full p-2 border rounded-lg dark:bg-neutral dark:text-neutral-content"
            placeholder={t("XoktleXOCAmount")}
          />
        </div>

        <div>
          <label className="block text-gray-700">{t("XoktleUSDCIndicate")}</label>
          <input
            type="number"
            value={tokenB}
            onChange={e => setTokenB(e.target.value)}
            className="w-full p-2 border rounded-lg dark:bg-neutral dark:text-neutral-content"
            placeholder={t("XoktleUSDCAmount")}
          />
        </div>

        <div>
          <label className="block text-gray-700">Calculated Vault Shares You Will Get</label>
          <input
            type="number"
            value={calculateOutput()}
            readOnly
            className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-neutral dark:text-neutral-content"
            placeholder="Output will be calculated"
          />
        </div>
      </div>

      <button className="w-full py-3 bg-base-300 text-2xl text-white font-semibold rounded-lg">{action}</button>
    </div>
  );
};

export default LiquidityWidget;
