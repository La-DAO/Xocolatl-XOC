"use client";

import React, { useState } from "react";
import assetsDataRaw from "../../data/assetsToSupply.json";
import yourSupplyDataRaw from "../../data/yourSupplies.json";
import SupplyModal from "./SupplyModal";
import SupplyTable from "./SupplyTable";
import { Asset } from "@/types/assets/assets";

// Import and transform JSON data for assets available to supply
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
  // State hooks for managing assets and modal visibility
  const [assetsToSupply, setAssetsToSupply] = useState<Asset[]>(assetsData);
  const [yourSupply, setYourSupply] = useState<Asset[]>(yourSupplyData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [transferAmount, setTransferAmount] = useState<number>(0);

  // Open modal and set selected asset and default transfer amount
  const openModal = (asset: Asset) => {
    setSelectedAsset(asset);
    setTransferAmount(asset.walletBalance || 0); // Default transfer amount to the wallet balance
    setIsModalOpen(true);
  };

  // Close modal and reset selected asset
  const closeModal = () => {
    setSelectedAsset(null);
    setIsModalOpen(false);
  };

  // Handle the supply action
  const handleSupply = (amount: number) => {
    if (!selectedAsset) return;

    // Update assets available to supply
    const updatedAssetsToSupply = assetsToSupply
      .map(a => {
        if (a.asset === selectedAsset.asset) {
          return { ...a, walletBalance: (a.walletBalance || 0) - amount };
        }
        return a;
      })
      .filter(a => a.walletBalance! > 0);
    setAssetsToSupply(updatedAssetsToSupply);

    // Update assets already supplied
    const existingAssetInYourSupply = yourSupply.find(a => a.asset === selectedAsset.asset);
    if (existingAssetInYourSupply) {
      const updatedYourSupply = yourSupply.map(a => {
        if (a.asset === selectedAsset.asset) {
          return { ...a, balance: (a.balance || 0) + amount };
        }
        return a;
      });
      setYourSupply(updatedYourSupply);
    } else {
      const updatedYourSupply = [...yourSupply, { ...selectedAsset, balance: amount }];
      setYourSupply(updatedYourSupply);
    }

    closeModal();
  };

  // Handle the withdrawal action
  const handleWithdraw = (asset: Asset) => {
    const updatedYourSupply = yourSupply.filter(a => a.asset !== asset.asset);
    setYourSupply(updatedYourSupply);

    // Update assets available to supply
    const existingAssetInAssetsToSupply = assetsToSupply.find(a => a.asset === asset.asset);
    if (existingAssetInAssetsToSupply) {
      const updatedAssetsToSupply = assetsToSupply.map(a => {
        if (a.asset === asset.asset) {
          return { ...a, walletBalance: (a.walletBalance || 0) + (asset.balance || 0) };
        }
        return a;
      });
      setAssetsToSupply(updatedAssetsToSupply);
    } else {
      const updatedAssetsToSupply = [...assetsToSupply, { ...asset, walletBalance: asset.balance }];
      setAssetsToSupply(updatedAssetsToSupply);
    }
  };

  // Toggle collateral status for an asset
  const handleCollateralToggle = (asset: Asset) => {
    const updatedYourSupply = yourSupply.map(a => {
      if (a.asset === asset.asset) {
        const newCollateralStatus = !a.collateral;
        return { ...a, collateral: newCollateralStatus };
      }
      return a;
    });
    setYourSupply(updatedYourSupply);
  };

  return (
    <div className="rounded-md">
      <div className="w-full bg-white px-6 py-4 rounded-2xl shadow-md mb-4">
        <h2 className="text-2xl text-primary font-semibold mb-2">Your Supply</h2>
        {yourSupply.length > 0 ? (
          <>
            <div className="flex justify-between mb-2 text-sm w-fit m-auto gap-2">
              <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md">Collateral $5,443.12</span>
            </div>
            <SupplyTable
              assets={yourSupply}
              isSupplied={true}
              onAction={handleWithdraw}
              onCollateralToggle={handleCollateralToggle}
            />
          </>
        ) : (
          <p className="text-slate-800">Nothing supplied yet</p>
        )}
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl text-primary font-semibold mb-4">Assets to Supply</h2>
        <p className="text-gray-500 mb-4">Select the amount of WETH to deposit as collateral</p>
        <SupplyTable assets={assetsToSupply} isSupplied={false} onAction={openModal} />
      </div>

      <SupplyModal
        isOpen={isModalOpen}
        onClose={closeModal}
        asset={selectedAsset}
        transferAmount={transferAmount}
        setTransferAmount={setTransferAmount}
        onConfirm={() => handleSupply(transferAmount)}
      />
    </div>
  );
};

export default Supplies;
