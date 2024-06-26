"use client";

import React from "react";
import { SupplyModalProps } from "@/types/assets/assets";
import { faCircleExclamation, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * SupplyModal component displays a modal for supplying assets.
 * @param isOpen Boolean indicating if the modal is open.
 * @param onClose Function to close the modal.
 * @param asset The asset to be supplied.
 */
const SupplyModal: React.FC<SupplyModalProps> = ({ isOpen, onClose, asset }) => {
  // If the modal is not open or no asset is selected, return null
  if (!isOpen || !asset) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 text-slate-800">
      <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose}></div>
      <div className="bg-white rounded-lg p-4 z-50 w-3/12">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Supply {asset.asset}</h2>
          <button onClick={onClose} className="text-3xl">
            &times;
          </button>
        </div>
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
              <p className="text-xl font-medium">${asset.walletBalance ? asset.walletBalance : asset.balance}</p>
              <p className="text-xl font-bold">{asset.asset}</p>
            </div>
            <div className="flex w-full justify-between items-center">
              <span className="text-xs">${asset.walletBalance ? asset.walletBalance : asset.balance} USD</span>
              <p className="text-xs">
                Wallet Balance 33,987.34 <span className="font-medium">Max</span>
              </p>
            </div>
          </div>
        </div>

        <h2 className="mt-4 text-xl font-medium">Transaction Overview</h2>
        <div className="mt-2 border rounded-xl p-4">
          <div className="flex flex-col rounded-md gap-1">
            <div className="flex w-full justify-between items-center">
              <p className="text-md font-medium">Supply APY</p>
              <p className="text-sm font-bold">1.41%</p>
            </div>
            <div className="flex w-full justify-between items-center">
              <p className="text-md font-medium">Collateralization</p>
              <p className="text-sm font-bold text-success">Enabled</p>
            </div>
            <div className="flex w-full justify-between items-center">
              <p className="text-md font-medium">Health Factor</p>
              <p className="text-sm font-bold text-success">4.15</p>
            </div>
          </div>
        </div>

        <button className="mt-6 w-full bg-accent text-white px-4 py-2 rounded-md">Supply</button>
      </div>
    </div>
  );
};

export default SupplyModal;
