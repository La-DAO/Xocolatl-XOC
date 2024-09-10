"use client";

import React, { useState } from "react";
import { useTranslation } from "~~/app/context/LanguageContext";

const LiquidityWidget: React.FC = () => {
  const { t } = useTranslation();
  const [action, setAction] = useState<"Deposit" | "Withdraw">("Deposit");
  const [tokenA, setTokenA] = useState("");
  const [tokenB, setTokenB] = useState("");

  const handleActionChange = (newAction: "Deposit" | "Withdraw") => {
    setAction(newAction);
  };

  const calculateOutput = () => {
    // Replace this with your actual calculation logic
    return parseFloat(tokenA) + parseFloat(tokenB);
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md mt-6">
      {/* Title and Divider */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{t("XoktleLiquidityTitle")}</h2>
        <hr className="border-t-2 border-gray-300 rounded-t-full" />
      </div>

      {/* Action Switcher */}
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

      {/* Inputs for Token A, Token B, and Calculation */}
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

      {/* Action Button */}
      <button className="w-full py-3 bg-base-300 text-2xl text-white font-semibold rounded-lg">{action}</button>
    </div>
  );
};

export default LiquidityWidget;
