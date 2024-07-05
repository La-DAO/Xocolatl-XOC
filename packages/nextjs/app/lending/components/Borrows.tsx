"use client";

import React, { useState } from "react";
import borrowsDataRaw from "@/data/assetsToBorrow.json";
import yourBorrowDataRaw from "@/data/yourBorrows.json";
import useApy from "@/hooks/useApy";
import useBalance from "@/hooks/useBalance";
import useBorrowPower from "@/hooks/useBorrowPower";
import { Asset } from "@/types/assets/assets";
import BorrowModal from "~~/app/lending/components/modals/BorrowModal";
import BorrowTable from "~~/app/lending/components/tables/BorrowTable";

const assetsData: Asset[] = borrowsDataRaw.map((asset: any) => ({
  ...asset,
  amount: Number(asset.amount),
  apy: Number(asset.apy),
}));

const yourBorrowData: Asset[] = yourBorrowDataRaw.map((asset: any) => ({
  ...asset,
  amount: Number(asset.amount),
  apy: Number(asset.apy),
}));

const Borrows: React.FC = () => {
  const [assetsToBorrow, setAssetsToBorrow] = useState<Asset[]>(assetsData);
  const [yourBorrow, setYourBorrow] = useState<Asset[]>(yourBorrowData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [borrowAmount, setBorrowAmount] = useState<number>(0);
  const [isBorrowAction, setIsBorrowAction] = useState(true); // Nueva propiedad de estado

  const balance = useBalance(yourBorrow);
  const averageApy = useApy(yourBorrow);
  const borrowPower = useBorrowPower(yourBorrow);

  const openModal = (asset: Asset, isBorrow: boolean) => {
    setSelectedAsset(asset);
    setBorrowAmount(asset.amount || 0); // Default transfer amount to the wallet balance
    setIsBorrowAction(isBorrow);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedAsset(null);
    setIsModalOpen(false);
  };

  const handleBorrow = (amount: number) => {
    if (!selectedAsset) return;

    const updatedAssetsToBorrow = assetsToBorrow.map(a => {
      if (a.asset === selectedAsset.asset) {
        return { ...a, amount: (a.amount || 0) - amount };
      }
      return a;
    });

    const existingAsset = yourBorrow.find(a => a.asset === selectedAsset.asset);
    if (existingAsset) {
      const updatedYourBorrow = yourBorrow.map(a => {
        if (a.asset === selectedAsset.asset) {
          return { ...a, amount: (a.amount || 0) + amount };
        }
        return a;
      });
      setYourBorrow(updatedYourBorrow);
    } else {
      const newBorrow = { ...selectedAsset, amount };
      setYourBorrow([...yourBorrow, newBorrow]);
    }

    setAssetsToBorrow(updatedAssetsToBorrow);
    closeModal();
  };

  const handleRepay = (amount: number) => {
    if (!selectedAsset) return;

    const updatedYourBorrow = yourBorrow
      .map(a => {
        if (a.asset === selectedAsset.asset) {
          return { ...a, amount: (a.amount || 0) - amount };
        }
        return a;
      })
      .filter(a => a.amount! > 0);
    setYourBorrow(updatedYourBorrow);

    const existingAssetInAssetsToBorrow = assetsToBorrow.find(a => a.asset === selectedAsset.asset);
    if (existingAssetInAssetsToBorrow) {
      const updatedAssetsToBorrow = assetsToBorrow.map(a => {
        if (a.asset === selectedAsset.asset) {
          return { ...a, amount: (a.amount || 0) + amount };
        }
        return a;
      });
      setAssetsToBorrow(updatedAssetsToBorrow);
    } else {
      const updatedAssetsToBorrow = [...assetsToBorrow, { ...selectedAsset, amount }];
      setAssetsToBorrow(updatedAssetsToBorrow);
    }

    closeModal();
  };

  const handleConfirm = (amount: number) => {
    if (isBorrowAction) {
      handleBorrow(amount);
    } else {
      handleRepay(amount);
    }
  };

  return (
    <div className="rounded-md">
      <div className="w-full bg-white px-6 py-4 rounded-2xl shadow-md mb-4">
        <h2 className="text-2xl text-primary font-semibold mb-2">Your Borrows</h2>
        {yourBorrow.length > 0 ? (
          <>
            <div className="flex justify-between my-4 text-sm w-fit gap-2">
              <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md">Balance ${balance}</span>
              <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md">
                Average APY {averageApy.toFixed(2)}%
              </span>
              <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md">
                Borrow power used {borrowPower.toFixed(2)}
              </span>
            </div>
            <BorrowTable assets={yourBorrow} isBorrowed={true} onAction={asset => openModal(asset, false)} />
          </>
        ) : (
          <p className="text-slate-800">Nothing borrowed yet</p>
        )}
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl text-primary font-semibold mb-4">Assets to Borrow</h2>
        <p className="text-gray-500 mb-4">Select the asset you want to borrow against your supplies</p>
        <BorrowTable assets={assetsToBorrow} isBorrowed={false} onAction={asset => openModal(asset, true)} />
      </div>

      <BorrowModal
        isOpen={isModalOpen}
        onClose={closeModal}
        asset={selectedAsset}
        borrowAmount={borrowAmount}
        setBorrowAmount={setBorrowAmount}
        onConfirm={handleConfirm}
        isBorrowAction={isBorrowAction} // Pasar la propiedad isBorrowAction
      />
    </div>
  );
};

export default Borrows;
