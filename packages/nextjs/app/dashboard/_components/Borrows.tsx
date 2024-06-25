import React from "react";
import BorrowsTable from "./BorrowsTable";

/**
 * Borrows component displays a list of assets available to borrow.
 * It also shows assets the user has borrowed and allows for borrowing actions.
 */
const Borrows: React.FC = () => {
  // Sample data for assets available to borrow
  const assetsToBorrow = [
    { asset: "WETH", available: "0.01", apy: "0.46%" },
    { asset: "USDC", available: "100", apy: "2.10%" },
  ];

  // Sample data for assets borrowed
  const borrowedAssets = [{ asset: "WETH", debt: "1", apy: "8.6%", apyType: "Variable" }];

  // To show the borrowed assets table information
  const hasBorrows = true;

  return (
    <div className="rounded-md">
      {/* Container for borrows section */}
      <div className="w-full bg-white px-6 py-4 rounded-2xl shadow-md mb-4">
        <h2 className="text-2xl text-primary font-semibold mb-2">Your Borrows</h2>
        {hasBorrows ? (
          <>
            <div className="flex justify-between mb-2 text-sm w-fit m-auto gap-2">
              <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md">Balance: $3,443.12</span>
              <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md">APY 8.70%</span>
              <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md">Borrow power used 25.93%</span>
            </div>
            <BorrowsTable assets={borrowedAssets} isBorrowed={true} />
          </>
        ) : (
          <p className="text-slate-800">Nothing borrowed yet</p>
        )}
      </div>

      {/* Container for assets available to borrow */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl text-primary font-semibold mb-4">Assets to Borrow</h2>
        <p className="text-gray-500 mb-4">Select the amount of WETH to deposit as collateral</p>
        {/* Table displaying assets available to borrow */}
        <BorrowsTable assets={assetsToBorrow} isBorrowed={false} />
      </div>
    </div>
  );
};

export default Borrows;
