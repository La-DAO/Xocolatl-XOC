"use client";

import React, { useEffect, useState } from "react";
import AssetModal from "./modals/AssetModal";
import SupplyTable from "./tables/SupplyTable";
import useApy from "@/hooks/useApy";
import useAssetOperations from "@/hooks/useAssetOperations";
import useCollateralBalance from "@/hooks/useCollateralBalance";
import { Asset } from "@/types/assets/assets";

// Define the interface for Supplies component props
interface SuppliesProps {
  assetsData: Asset[];
  yourSupplyData: Asset[];
  setBalance: (balance: number) => void;
}

// Supplies component for displaying user's supplied assets and available assets to supply
const Supplies: React.FC<SuppliesProps> = ({ assetsData, yourSupplyData, setBalance }) => {
  // Local state to keep track of the user's supply balance
  const [localBalance, setLocalBalance] = useState(0);

  // Destructure the return values from the custom hook for asset operations
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

  // Calculate the average APY for the user's supplied assets
  const averageApy = useApy(yourSupply);

  // Calculate the user's collateral balance based on their supplied assets
  const collateralBalance = useCollateralBalance(yourSupply);

  // useEffect hook to update the local and parent component's balance whenever the user's supplied assets change
  useEffect(() => {
    const newBalance = yourSupply.reduce((acc, asset) => acc + (asset.walletBalance ?? 0), 0);
    setLocalBalance(newBalance);
    setBalance(newBalance);
  }, [yourSupply, setBalance]);

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

  // Render the Supplies component
  return (
    <div className="rounded-md">
      {/* Section for displaying the user's supplied assets */}
      <div className="w-full bg-white px-6 py-4 rounded-2xl shadow-md mb-4">
        <h2 className="text-2xl text-primary font-semibold mb-2">Your Supplies</h2>
        {yourSupply.length > 0 ? (
          <>
            {/* Display balance, average APY, and collateral balance if the user has supplied assets */}
            <div className="flex justify-between my-4 text-sm w-fit gap-2">
              <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md">Balance ${localBalance}</span>
              <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md">
                Average APY {averageApy.toFixed(2)}%
              </span>
              <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md">
                Collateral {collateralBalance.toFixed(2)}
              </span>
            </div>
            {/* Table for displaying supplied assets */}
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

      {/* Section for displaying available assets to supply */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl text-primary font-semibold mb-4">Assets to Supply</h2>
        <p className="text-gray-500 mb-4">Select the asset to deposit as collateral</p>
        {/* Table for displaying available assets to supply */}
        <SupplyTable assets={assetsToSupply} isSupplied={false} onAction={asset => openModal(asset, true)} />
      </div>

      {/* Modal for confirming supply actions */}
      <AssetModal
        isOpen={isModalOpen}
        onClose={closeModal}
        asset={selectedAsset}
        transferAmount={transferAmount}
        setTransferAmount={setTransferAmount}
        onConfirm={handleConfirm}
        isAction={isSupplyAction}
        isBorrowAction={false}
      />
    </div>
  );
};

export default Supplies;
