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

// Import and transform JSON data for assets available to borrow
const assetsData: Asset[] = borrowsDataRaw.map((asset: any) => ({
  ...asset,
  amount: Number(asset.amount),
  apy: Number(asset.apy),
}));

// Import and transform JSON data for already borrowed assets
const yourBorrowData: Asset[] = yourBorrowDataRaw.map((asset: any) => ({
  ...asset,
  amount: Number(asset.amount),
  apy: Number(asset.apy),
}));

const Borrows: React.FC = () => {
  // State hooks for managing assets and modal visibility
  const [assetsToBorrow, setAssetsToBorrow] = useState<Asset[]>(assetsData);
  const [yourBorrow, setYourBorrow] = useState<Asset[]>(yourBorrowData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [borrowAmount, setBorrowAmount] = useState<number>(0);

  // Use custom hooks to obtain balance, average APY, and borrow power
  const balance = useBalance(yourBorrow);
  const averageApy = useApy(yourBorrow);
  const borrowPower = useBorrowPower(yourBorrow);

  /**
   * Opens the modal with the selected asset.
   * @param asset The asset to be selected and displayed in the modal.
   */
  const openModal = (asset: Asset) => {
    setSelectedAsset(asset);
    setBorrowAmount(asset.amount || 0); // Default transfer amount to the wallet balance
    setIsModalOpen(true);
  };

  /**
   * Closes the modal and resets the selected asset.
   */
  const closeModal = () => {
    setSelectedAsset(null);
    setIsModalOpen(false);
  };

  /**
   * Handles the borrowing action.
   * @param amount The amount to be borrowed.
   */
  const handleBorrow = (amount: number) => {
    if (!selectedAsset) return;

    // Update the list of assets available to borrow
    const updatedAssetsToBorrow = assetsToBorrow.map(a => {
      if (a.asset === selectedAsset.asset) {
        return { ...a, amount: (a.amount || 0) - amount }; // Subtract the borrowed amount
      }
      return a;
    });

    // Update the list of already borrowed assets
    const existingAsset = yourBorrow.find(a => a.asset === selectedAsset.asset);
    if (existingAsset) {
      // If the asset is already borrowed, increase the amount
      const updatedYourBorrow = yourBorrow.map(a => {
        if (a.asset === selectedAsset.asset) {
          return { ...a, amount: (a.amount || 0) + amount };
        }
        return a;
      });
      setYourBorrow(updatedYourBorrow);
    } else {
      // If the asset is not borrowed yet, add it to the list of borrowed assets
      const newBorrow = { ...selectedAsset, amount };
      setYourBorrow([...yourBorrow, newBorrow]);
    }

    // Save the changes to both states
    setAssetsToBorrow(updatedAssetsToBorrow);
    closeModal();
  };

  /**
   * Handles the repayment action.
   * @param asset The asset to be repaid.
   */
  const handleRepay = (asset: Asset) => {
    // Remove the asset from the list of borrowed assets
    const updatedYourBorrow = yourBorrow.filter(a => a.asset !== asset.asset);
    setYourBorrow(updatedYourBorrow);

    // Update the list of assets available to borrow
    const existingAssetInAssetsToBorrow = assetsToBorrow.find(a => a.asset === asset.asset);
    if (existingAssetInAssetsToBorrow) {
      // If the asset already exists, update its amount
      const updatedAssetsToBorrow = assetsToBorrow.map(a => {
        if (a.asset === asset.asset) {
          return { ...a, amount: (a.amount ?? 0) + (asset.amount ?? 0) }; // Using nullish coalescing
        }
        return a;
      });
      setAssetsToBorrow(updatedAssetsToBorrow);
    } else {
      // If the asset does not exist in the list, add it with the repaid amount
      const updatedAssetsToBorrow = [...assetsToBorrow, { ...asset, amount: asset.amount ?? 0 }];
      setAssetsToBorrow(updatedAssetsToBorrow);
    }
  };

  return (
    <div className="rounded-md">
      {/* Section for displaying borrowed assets */}
      <div className="w-full bg-white px-6 py-4 rounded-2xl shadow-md mb-4">
        <h2 className="text-2xl text-primary font-semibold mb-2">Your Borrows</h2>
        {yourBorrow.length > 0 ? (
          <>
            {/* Display collateral information */}
            <div className="flex justify-between my-4 text-sm w-fit gap-2">
              <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md">Balance ${balance}</span>
              <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md">
                Average APY {averageApy.toFixed(2)}%
              </span>
              <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md">
                Borrow power used {borrowPower.toFixed(2)}
              </span>
            </div>
            <BorrowTable assets={yourBorrow} isBorrowed={true} onAction={handleRepay} />
          </>
        ) : (
          <p className="text-slate-800">Nothing borrowed yet</p>
        )}
      </div>

      {/* Section for displaying assets available to borrow */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl text-primary font-semibold mb-4">Assets to Borrow</h2>
        <p className="text-gray-500 mb-4">Select the asset you want to borrow against your supplies</p>
        <BorrowTable assets={assetsToBorrow} isBorrowed={false} onAction={openModal} />
      </div>

      <BorrowModal
        isOpen={isModalOpen}
        onClose={closeModal}
        asset={selectedAsset}
        borrowAmount={borrowAmount}
        setBorrowAmount={setBorrowAmount}
        onConfirm={() => handleBorrow(borrowAmount)}
      />
    </div>
  );
};

export default Borrows;
