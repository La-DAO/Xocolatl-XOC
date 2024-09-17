"use client";

import React from "react";
import DepositTable from "./tables/DepositTable";
import YourDeposits from "./tables/YourDeposits";
import { useTranslation } from "~~/app/context/LanguageContext";

// Supplies component for displaying user's supplied assets and available assets to supply
const Deposits: React.FC = () => {
  // Get the translation object
  const { t } = useTranslation();
  // Render the Supplies component
  return (
    <div className="flex flex-wrap gap-4">
      {/* Section for displaying user's deposits in the house of reserves */}
      <div className="bg-white p-6 rounded-2xl shadow-md flex-1">
        <h2 className="text-xl text-primary font-semibold mb-4">{t("YourDepositTableTitle")}</h2>
        <p className="text-gray-500 mb-4">{t("YourDepositsDescription")}</p>
        {/* Table for displaying user's deposits in the house of reserves */}
        <YourDeposits />
      </div>
      {/* Section for displaying available assets to deposit */}
      <div className="bg-white p-6 rounded-2xl shadow-md flex-1">
        <h2 className="text-xl text-primary font-semibold mb-4">{t("AssetTableTitle")}</h2>
        <p className="text-gray-500 mb-4">{t("AssetTableDescription")}</p>
        {/* Table for displaying available assets to supply */}
        <DepositTable />
      </div>
    </div>
  );
};

export default Deposits;
