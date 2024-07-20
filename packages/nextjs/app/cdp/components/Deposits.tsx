"use client";

import React from "react";
import DepositTable from "./tables/DepositTable";

// Supplies component for displaying user's supplied assets and available assets to supply
const Deposits: React.FC = () => {
  // Render the Supplies component
  return (
    <div className="rounded-md">
      {/* Section for displaying available assets to supply */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl text-primary font-semibold mb-4">Assets to Deposit</h2>
        <p className="text-gray-500 mb-4">Select the asset to deposit as collateral</p>
        {/* Table for displaying available assets to supply */}
        <DepositTable />
      </div>

      {/* Modal for confirming supply actions */}
    </div>
  );
};

export default Deposits;
