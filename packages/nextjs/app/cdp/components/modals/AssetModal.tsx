import React, { useEffect, useState } from "react";
import IsolatedStateComponent from "@/components/tags/IsolatedState";
import { Asset } from "@/types/assets/assets";
import { faCircleExclamation, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Asegúrate de importar correctamente el componente

interface AssetModalProps {
  isOpen: boolean;
  onClose: () => void;
  asset: Asset | null;
  transferAmount: number;
  setTransferAmount: (amount: number) => void;
  onConfirm: (amount: number) => void;
  isAction: boolean; // True for borrow/supply, false for repay/withdraw
  isBorrowAction: boolean; // True for borrow/repay, false for supply/withdraw
}

const AssetModal: React.FC<AssetModalProps> = ({
  isOpen,
  onClose,
  asset,
  transferAmount,
  setTransferAmount,
  onConfirm,
  isAction,
  isBorrowAction,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (asset) {
      const balance = isBorrowAction
        ? isAction
          ? asset.amount || 0
          : asset.amount || 0
        : isAction
        ? asset.walletBalance || 0
        : asset.balance || 0;
      if (transferAmount <= 0 || transferAmount > balance) {
        setErrorMessage("Please enter a valid amount not exceeding your available balance.");
        setIsButtonDisabled(true);
      } else {
        setErrorMessage("");
        setIsButtonDisabled(false);
      }
    }
  }, [transferAmount, asset, isBorrowAction, isAction]);

  if (!isOpen || !asset) return null;

  const handleConfirm = () => {
    if (asset) {
      onConfirm(transferAmount);
      onClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      setTransferAmount(value);
    }
  };

  const actionText = isBorrowAction
    ? isAction
      ? `Borrow ${asset.asset}`
      : `Repay ${asset.asset}`
    : isAction
    ? `Supply ${asset.asset}`
    : `Withdraw ${asset.asset}`;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 text-slate-800">
      <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose}></div>
      <div className="bg-white rounded-lg p-4 z-50 w-3/12">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{actionText}</h2>
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
                value={transferAmount}
                onChange={handleChange}
                className="bg-white border rounded-lg p-2 w-2/5"
                min="0"
                max={
                  isBorrowAction
                    ? isAction
                      ? asset.amount || 0
                      : asset.amount || 0
                    : isAction
                    ? asset.walletBalance || 0
                    : asset.balance || 0
                }
              />
              <p className="text-xl font-bold">${asset.asset}</p>
            </div>
            <div className="flex w-full justify-between items-center">
              <span className="text-xs">
                ${isBorrowAction ? asset.amountConverted : asset.walletBalanceConverted} USD
              </span>
              <p className="text-xs">
                Available Balance{" "}
                {isBorrowAction
                  ? isAction
                    ? asset.amount
                    : asset.amount
                  : isAction
                  ? asset.walletBalance
                  : asset.balance}{" "}
                <span className="font-medium">Max</span>
              </p>
            </div>
          </div>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>
        <h2 className="mt-4 text-xl font-medium">Transaction Overview</h2>
        <div className="mt-2 border rounded-xl p-4">
          <div className="flex flex-col rounded-md gap-1">
            {!isBorrowAction && (
              <>
                <div className="flex w-full justify-between items-center">
                  <p className="text-md font-medium">Supply APY</p>
                  <p className="text-sm font-bold text-success">{asset.apy}%</p>
                </div>
                <div className="flex w-full justify-between items-center">
                  <p className="text-md font-medium">Collateralization</p>
                  <p className="text-sm font-bold text-success">
                    {asset.collateral ? "Enabled" : <IsolatedStateComponent message="Isolated" />}
                  </p>
                </div>
              </>
            )}
            <div className="flex w-full justify-between items-center">
              <p className="text-md font-medium">Health Factor</p>
              <p className="text-sm font-bold text-success">4.15</p>
            </div>
          </div>
        </div>
        {isBorrowAction && (
          <div className="bg-neutral mt-2 rounded-xl p-4 border-slate-800 border">
            <p>
              <span className="font-medium">Attention:</span> This can notice to the user to communicate very important
              information
            </p>
          </div>
        )}
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

export default AssetModal;
