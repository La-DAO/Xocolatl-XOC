"use client";

import React from "react";
import { BorrowModalProps } from "@/types/assets/assets";
import { faCircleExclamation, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SupplyModal: React.FC<BorrowModalProps> = ({
  isOpen,
  onClose,
  asset,
  borrowAmount,
  setBorrowAmount,
  onConfirm,
}) => {
  // Return null if modal is not open or no asset is selected
  if (!isOpen || !asset) return null;

  // Handle the confirmation of the borrow action
  const handleConfirm = () => {
    onConfirm(borrowAmount);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 text-slate-800">
      {/* Overlay to close modal when clicking outside */}
      <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose}></div>
      <div className="bg-white rounded-lg p-4 z-50 w-3/12">
        {/* Modal header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Borrow {asset.asset}</h2>
          <button onClick={onClose} className="text-3xl">
            &times;
          </button>
        </div>

        {/* Amount input section */}
        <div className="flex justify-between items-center mt-6">
          <div className="flex justify-between gap-4 items-center">
            <p className="text-xl font-medium">Amount</p>
            <FontAwesomeIcon icon={faCircleExclamation} className="text-sm cursor-pointer" />
          </div>
          <div>
            <FontAwesomeIcon icon={faGear} className="text-sm cursor-pointer" />
          </div>
        </div>
        <div className="mt-2 border rounded-xl p-4">
          <div className="flex flex-col rounded-md gap-1">
            <div className="flex w-full justify-between items-center">
              <input
                type="number"
                value={borrowAmount}
                onChange={e => setBorrowAmount(Number(e.target.value))}
                className="bg-white border rounded-lg p-2 w-2/5"
                min="0"
                max={asset.amount || 0}
              />
              <p className="text-xl font-bold">${asset.asset}</p>
            </div>
            <div className="flex w-full justify-between items-center">
              <span className="text-xs">${asset.amountConverted} USD</span>
              <p className="text-xs">
                Available Balance {asset.amount} <span className="font-medium">Max</span>
              </p>
            </div>
          </div>
        </div>

        {/* Transaction overview section */}
        <h2 className="mt-4 text-xl font-medium">Transaction Overview</h2>
        <div className="mt-2 border rounded-xl p-4">
          <div className="flex flex-col rounded-md gap-1">
            <div className="flex w-full justify-between items-center">
              <p className="text-md font-medium">Health Factor</p>
              <p className="text-sm font-bold text-success">4.15</p>
            </div>
          </div>
        </div>

        <div className="bg-neutral mt-2 rounded-xl p-4 border-slate-800 border">
          <p>
            <span className="font-medium">Atention:</span> This can notice to the user to communicate very important
            information
          </p>
        </div>

        {/* Confirmation button */}
        <button onClick={handleConfirm} className="mt-6 w-full bg-accent text-white px-4 py-2 rounded-md">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SupplyModal;
