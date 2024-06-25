import React from "react";
import SupplyTable from "./SupplyTable";

/**
 * Supplies component displays a list of assets available to supply.
 * It also shows assets the user has supplied and allows for supply actions.
 */
const Supplies: React.FC = () => {
  // Sample data for assets available to supply
  const assetsToSupply = [{ asset: "XOC", walletBalance: "20,000", apy: "3.6%", collateral: true }];

  // Sample data for assets supplied
  const suppliedAssets = [{ asset: "XOC", balance: "200,000", apy: "3.6%", collateral: true }];

  const hasSupplies = true;

  // Adjust walletBalance to 0 if hasSupplies is false
  const adjustedAssetsToSupply = hasSupplies
    ? assetsToSupply
    : assetsToSupply.map(asset => ({ ...asset, walletBalance: "0" }));

  return (
    <div className="rounded-md">
      {/* Container for supplies section */}
      <div className="w-full bg-white px-6 py-4 rounded-2xl shadow-md mb-4">
        <h2 className="text-2xl text-primary font-semibold mb-2">Your Supply</h2>
        {hasSupplies ? (
          <>
            <div className="flex justify-between mb-2 text-sm w-fit m-auto gap-2">
              <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md">Collateral $5,443.12</span>
            </div>
            <SupplyTable assets={suppliedAssets} isSupplied={true} />
          </>
        ) : (
          <p className="text-slate-800">Nothing supplied yet</p>
        )}
      </div>

      {/* Container for assets available to supply */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl text-primary font-semibold mb-4">Assets to Supply</h2>
        <p className="text-gray-500 mb-4">Select the amount of WETH to deposit as collateral</p>
        {/* Table displaying assets available to supply */}
        <SupplyTable assets={adjustedAssetsToSupply} isSupplied={false} />
      </div>
    </div>
  );
};

export default Supplies;
