"use client";

import React, { useState } from "react";
import assetsDataRaw from "@/data/assetsToSupply.json";
import yourSupplyDataRaw from "@/data/yourSupplies.json";
import useApy from "@/hooks/useApy";
import useBalance from "@/hooks/useBalance";
import useCollateralBalance from "@/hooks/useCollateralBalance";
import { Asset } from "@/types/assets/assets";
import SupplyModal from "~~/app/lending/components/modals/SupplyModal";
import SupplyTable from "~~/app/lending/components/tables/SupplyTable";

const assetsData: Asset[] = assetsDataRaw.map((asset: any) => ({
  ...asset,
  walletBalance: Number(asset.walletBalance),
  apy: Number(asset.apy),
}));

const yourSupplyData: Asset[] = yourSupplyDataRaw.map((asset: any) => ({
  ...asset,
  walletBalance: Number(asset.walletBalance),
  apy: Number(asset.apy),
}));

const Supplies: React.FC = () => {
  const [assetsToSupply, setAssetsToSupply] = useState<Asset[]>(assetsData);
  const [yourSupply, setYourSupply] = useState<Asset[]>(yourSupplyData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [transferAmount, setTransferAmount] = useState<number>(0);
  const [isSupplyAction, setIsSupplyAction] = useState(true);

  const balance = useBalance(yourSupply);
  const averageApy = useApy(yourSupply);
  const collateralBalance = useCollateralBalance(yourSupply);

  const openModal = (asset: Asset, isSupply: boolean) => {
    setSelectedAsset(asset);
    setTransferAmount(asset.walletBalance || 0);
    setIsSupplyAction(isSupply);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedAsset(null);
    setIsModalOpen(false);
  };

  const handleSupply = (amount: number) => {
    if (!selectedAsset) return;

    const updatedAssetsToSupply = assetsToSupply.map(a => {
      if (a.asset === selectedAsset.asset) {
        return { ...a, walletBalance: (a.walletBalance || 0) - amount };
      }
      return a;
    });
    setAssetsToSupply(updatedAssetsToSupply);

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

  const handleWithdraw = (amount: number) => {
    if (!selectedAsset) return;

    const updatedYourSupply = yourSupply
      .map(a => {
        if (a.asset === selectedAsset.asset) {
          return { ...a, balance: (a.balance || 0) - amount };
        }
        return a;
      })
      .filter(a => a.balance! > 0);
    setYourSupply(updatedYourSupply);

    const existingAssetInAssetsToSupply = assetsToSupply.find(a => a.asset === selectedAsset.asset);
    if (existingAssetInAssetsToSupply) {
      const updatedAssetsToSupply = assetsToSupply.map(a => {
        if (a.asset === selectedAsset.asset) {
          return { ...a, walletBalance: (a.walletBalance || 0) + amount };
        }
        return a;
      });
      setAssetsToSupply(updatedAssetsToSupply);
    } else {
      const updatedAssetsToSupply = [...assetsToSupply, { ...selectedAsset, walletBalance: amount }];
      setAssetsToSupply(updatedAssetsToSupply);
    }

    closeModal();
  };

  const handleConfirm = (amount: number) => {
    if (isSupplyAction) {
      handleSupply(amount);
    } else {
      handleWithdraw(amount);
    }
  };

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
        isSupplyAction={isSupplyAction} // Aquí se pasa la variable
      />
    </div>
  );
};

export default Supplies;
