"use client";

import React from "react";
import AssetModal from "./modals/AssetModal";
import BorrowTable from "./tables/BorrowTable";
import borrowsDataRaw from "@/data/assetsToBorrow.json";
import yourBorrowDataRaw from "@/data/yourBorrows.json";
import useApy from "@/hooks/useApy";
import useAssetOperations from "@/hooks/useAssetOperations";
import useBalance from "@/hooks/useBalance";
import useBorrowPower from "@/hooks/useBorrowPower";
import { Asset } from "@/types/assets/assets";

/**
 * Component representing the borrows section, displaying user's current borrows
 * and available assets to borrow, with modal functionality for borrowing actions.
 */
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

/**
 * Borrows component manages and displays the user's borrowed assets and available assets to borrow.
 * It provides a modal for performing borrow actions and shows relevant financial data.
 */
const Borrows: React.FC = () => {
  const {
    assets: assetsToBorrow,
    yourAssets: yourBorrow,
    isModalOpen,
    selectedAsset,
    transferAmount: borrowAmount,
    isAction: isBorrowAction,
    openModal,
    closeModal,
    handleConfirm,
    setTransferAmount: setBorrowAmount,
  } = useAssetOperations(assetsData, yourBorrowData);

  const balance = useBalance(yourBorrow);
  const averageApy = useApy(yourBorrow);
  const borrowPower = useBorrowPower(yourBorrow);

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

      <AssetModal
        isOpen={isModalOpen}
        onClose={closeModal}
        asset={selectedAsset}
        transferAmount={borrowAmount}
        setTransferAmount={setBorrowAmount}
        onConfirm={handleConfirm}
        isAction={isBorrowAction}
        isBorrowAction={true}
      />
    </div>
  );
};

export default Borrows;
