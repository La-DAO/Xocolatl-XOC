"use client";

import React, { useState } from "react";
import assetsDataRaw from "../../data/assetsToSupply.json";
import yourSupplyDataRaw from "../../data/yourSupplies.json";
import SupplyTable from "./SupplyTable";
import { Asset } from "@/types/assets/assets";

// // Import and transform JSON data for assets available to supply
const assetsData: Asset[] = assetsDataRaw.map((asset: any) => ({
  ...asset,
  walletBalance: Number(asset.walletBalance),
  apy: Number(asset.apy),
}));

// Import and transform JSON data for already supplied assets
const yourSupplyData: Asset[] = yourSupplyDataRaw.map((asset: any) => ({
  ...asset,
  walletBalance: Number(asset.walletBalance),
  apy: Number(asset.apy),
}));

const Supplies: React.FC = () => {
  // State to manage assets available to supply and assets already supplied
  const [assetsToSupply, setAssetsToSupply] = useState<Asset[]>(assetsData);
  const [yourSupply, setYourSupply] = useState<Asset[]>(yourSupplyData);

  // Function to handle supplying an asset
  const handleSupply = (asset: Asset) => {
    // Remove the asset from assetsToSupply
    const updatedAssetsToSupply = assetsToSupply.filter(a => a.asset !== asset.asset);
    setAssetsToSupply(updatedAssetsToSupply);

    // Add the asset to yourSupply with balance set to walletBalance
    const updatedYourSupply = [...yourSupply, { ...asset, balance: asset.walletBalance }];
    setYourSupply(updatedYourSupply);
  };

  // Function to handle withdrawing an asset
  const handleWithdraw = (asset: Asset) => {
    // Remove the asset from yourSupply
    const updatedYourSupply = yourSupply.filter(a => a.asset !== asset.asset);
    setYourSupply(updatedYourSupply);

    // Add the asset back to assetsToSupply with walletBalance updated
    const updatedAssetsToSupply = [...assetsToSupply, { ...asset, walletBalance: asset.balance }];
    setAssetsToSupply(updatedAssetsToSupply);
  };

  return (
    <div className="rounded-md">
      {/* Section for displaying assets already supplied */}
      <div className="w-full bg-white px-6 py-4 rounded-2xl shadow-md mb-4">
        <h2 className="text-2xl text-primary font-semibold mb-2">Your Supply</h2>
        {yourSupply.length > 0 ? (
          <>
            {/* Display collateral information */}
            <div className="flex justify-between mb-2 text-sm w-fit m-auto gap-2">
              <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md">Collateral $5,443.12</span>
            </div>
            {/* Render SupplyTable with supplied assets */}
            <SupplyTable assets={yourSupply} isSupplied={true} onAction={handleWithdraw} />
          </>
        ) : (
          // Display message if no assets are supplied yet
          <p className="text-slate-800">Nothing supplied yet</p>
        )}
      </div>

      {/* Section for displaying assets available to supply */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl text-primary font-semibold mb-4">Assets to Supply</h2>
        <p className="text-gray-500 mb-4">Select the amount of WETH to deposit as collateral</p>
        {/* Render SupplyTable with assets to supply */}
        <SupplyTable assets={assetsToSupply} isSupplied={false} onAction={handleSupply} />
      </div>
    </div>
  );
};

export default Supplies;
