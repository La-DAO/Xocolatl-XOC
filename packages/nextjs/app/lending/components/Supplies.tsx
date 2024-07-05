"use client";

import React from "react";
import SupplyModal from "./modals/SupplyModal";
import SupplyTable from "./tables/SupplyTable";
import assetsDataRaw from "@/data/assetsToSupply.json";
import yourSupplyDataRaw from "@/data/yourSupplies.json";
import useApy from "@/hooks/useApy";
import useAssetOperations from "@/hooks/useAssetOperations";
import useBalance from "@/hooks/useBalance";
import useCollateralBalance from "@/hooks/useCollateralBalance";
import { Asset } from "@/types/assets/assets";

// Process raw data into typed assets
const assetsData: Asset[] = assetsDataRaw.map((asset: any) => ({
  ...asset,
  walletBalance: Number(asset.walletBalance),
  apy: Number(asset.apy),
}));

const yourSupplyData: Asset[] = yourSupplyDataRaw.map((asset: any) => ({
  ...asset,
  amount: Number(asset.walletBalance), // Ensure amount is initialized with walletBalance
  apy: Number(asset.apy),
}));

/**
 * Supplies component manages and displays the user's supplied assets and available assets to supply.
 * It provides a modal for performing supply actions and shows relevant financial data.
 */
const Supplies: React.FC = () => {
  const {
    assets: assetsToSupply,
    yourAssets: yourSupply,
    isModalOpen,
    selectedAsset,
    transferAmount,
    isAction: isSupplyAction,
    openModal,
    closeModal,
    handleConfirm,
    setTransferAmount,
    updateYourAssets,
  } = useAssetOperations(assetsData, yourSupplyData);

  const balance = useBalance(yourSupply);
  const averageApy = useApy(yourSupply);
  const collateralBalance = useCollateralBalance(yourSupply);

  // Toggle collateral status for the asset
  const handleCollateralToggle = (asset: Asset) => {
    const updatedYourSupply = yourSupply.map(a => {
      if (a.asset === asset.asset) {
        const newCollateralStatus = !a.collateral;
        return { ...a, collateral: newCollateralStatus };
      }
      return a;
    });
    updateYourAssets(updatedYourSupply);
  };

  return (
    <div className="rounded-md">
      <div className="w-full bg-white px-6 py-4 rounded-2xl shadow-md mb-4">
        <h2 className="text-2xl text-primary font-semibold mb-2">Your Supplies</h2>
        {yourSupply.length > 0 ? (
          <>
            <div className="flex justify-between my-4 text-sm w-fit gap-2">
              <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md">Balance ${balance}</span>
              <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md">
                Average APY {averageApy.toFixed(2)}%
              </span>
              <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md">
                Collateral {collateralBalance.toFixed(2)}
              </span>
            </div>
            <SupplyTable
              assets={yourSupply}
              isSupplied={true}
              onAction={asset => openModal(asset, false)}
              onCollateralToggle={handleCollateralToggle}
            />
          </>
        ) : (
          <p className="text-slate-800">Nothing supplied yet</p>
        )}
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl text-primary font-semibold mb-4">Assets to Supply</h2>
        <p className="text-gray-500 mb-4">Select the asset to deposit as collateral</p>
        <SupplyTable assets={assetsToSupply} isSupplied={false} onAction={asset => openModal(asset, true)} />
      </div>

      <SupplyModal
        isOpen={isModalOpen}
        onClose={closeModal}
        asset={selectedAsset}
        transferAmount={transferAmount}
        setTransferAmount={setTransferAmount}
        onConfirm={handleConfirm}
        isSupplyAction={isSupplyAction}
      />
    </div>
  );
};

export default Supplies;
