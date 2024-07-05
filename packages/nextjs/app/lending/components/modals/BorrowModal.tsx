import React, { useEffect, useState } from "react";
import { BorrowModalProps } from "@/types/assets/assets";
import { faCircleExclamation, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BorrowModal: React.FC<BorrowModalProps> = ({
  isOpen,
  onClose,
  asset,
  borrowAmount,
  setBorrowAmount,
  onConfirm,
  isBorrowAction,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (asset) {
      const amount = asset.amount || 0;
      if (borrowAmount <= 0 || borrowAmount > amount) {
        setErrorMessage("Please enter a valid amount not exceeding your available balance.");
        setIsButtonDisabled(true);
      } else {
        setErrorMessage("");
        setIsButtonDisabled(false);
      }
    }
  }, [borrowAmount, asset]);

  if (!isOpen || !asset) return null;

  const handleConfirm = () => {
    if (asset) {
      onConfirm(borrowAmount);
      onClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setBorrowAmount(value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 text-slate-800">
      <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose}></div>
      <div className="bg-white rounded-lg p-4 z-50 w-3/12">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{isBorrowAction ? `Borrow ${asset.asset}` : `Repay ${asset.asset}`}</h2>
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
              <input
                type="number"
                value={borrowAmount}
                onChange={handleChange}
                className="bg-white border rounded-lg p-2 w-2/5"
                min="0"
                max={asset.amount || 0}
              />
              <p className="text-xl font-bold">${asset.asset}</p>
            </div>
            <div className="flex w-full justify-between items-center">
              <span className="text-xs">${asset.amountConverted || 0} USD</span>
              <p className="text-xs">
                Available Balance {asset.amount || 0} <span className="font-medium">Max</span>
              </p>
            </div>
          </div>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>
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
            <span className="font-medium">Attention:</span> This can notice to the user to communicate very important
            information
          </p>
        </div>
        <button
          onClick={handleConfirm}
          className={`mt-6 w-full px-4 py-2 rounded-md ${
            isButtonDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-accent text-white"
          }`}
          disabled={isButtonDisabled}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default BorrowModal;
