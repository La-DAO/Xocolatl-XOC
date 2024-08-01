"use client";

import React, { useEffect, useState } from "react";
import AssetModal from "./modals/AssetModal";
import BorrowTable from "./tables/BorrowTable";
import useApy from "@/hooks/useApy";
import useAssetOperations from "@/hooks/useAssetOperations";
import useBorrowPower from "@/hooks/useBorrowPower";
import { Asset } from "@/types/assets/assets";

// Define the interface for Borrows component props
interface BorrowsProps {
  assetsData: Asset[];
  yourBorrowData: Asset[];
  setBalance: (balance: number) => void;
}

// Borrows component for displaying user's borrowed assets and available assets to borrow
const Borrows: React.FC<BorrowsProps> = ({ assetsData, yourBorrowData, setBalance }) => {
  // Local state to keep track of the user's borrow balance
  const [localBalance, setLocalBalance] = useState(0);

  // Destructure the return values from the custom hook for asset operations
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

  // Calculate the average APY for the user's borrowed assets
  const averageApy = useApy(yourBorrow);

  // Calculate the user's borrow power based on their borrowed assets
  const borrowPower = useBorrowPower(yourBorrow);

  // useEffect hook to update the local and parent component's balance whenever the user's borrowed assets change
  useEffect(() => {
    const newBalance = yourBorrow.reduce((acc, asset) => acc + (asset.amount ?? 0), 0);
    setLocalBalance(newBalance);
    setBalance(newBalance);
  }, [yourBorrow, setBalance]);

  // Render the Borrows component
  return (
    <div className="rounded-md">
      {/* Section for displaying the user's borrowed assets */}
      <div className="w-full bg-white px-6 py-4 rounded-2xl shadow-md mb-4">
        <h2 className="text-2xl text-primary font-semibold mb-2">Your Borrows</h2>
        {yourBorrow.length > 0 ? (
          <>
            {/* Display balance, average APY, and borrow power if the user has borrowed assets */}
            <div className="flex justify-between my-4 text-sm w-fit gap-2">
              <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md">Balance ${localBalance}</span>
              <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md">
                Average APY {averageApy.toFixed(2)}%
              </span>
              <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md">
                Borrow power used {borrowPower.toFixed(2)}
              </span>
            </div>
            {/* Table for displaying borrowed assets */}
            <BorrowTable assets={yourBorrow} isBorrowed={true} onAction={asset => openModal(asset, false)} />
          </>
        ) : (
          <p className="text-slate-800">Nothing borrowed yet</p>
        )}
      </div>

      {/* Section for displaying available assets to borrow */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl text-primary font-semibold mb-4">Assets to Borrow</h2>
        <p className="text-gray-500 mb-4">Select the asset you want to borrow against your supplies</p>
        {/* Table for displaying available assets to borrow */}
        <BorrowTable assets={assetsToBorrow} isBorrowed={false} onAction={asset => openModal(asset, true)} />
      </div>

      {/* Modal for confirming borrow actions */}
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
