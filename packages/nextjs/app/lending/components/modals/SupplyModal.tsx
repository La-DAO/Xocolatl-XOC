import React, { useEffect, useState } from "react";
import AmountInput from "@/components/inputs/AmountInput";
import IsolatedStateComponent from "@/components/tags/IsolatedState";
import { Asset } from "@/types/assets/assets";
import { faCircleExclamation, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ModalProps {
  asset: Asset | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (amount: number) => void;
  transferAmount: number;
  setTransferAmount: (amount: number) => void;
  isSupplyAction: boolean;
}

const SupplyModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  asset,
  transferAmount,
  setTransferAmount,
  onConfirm,
  isSupplyAction,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (asset) {
      const walletBalance = asset.walletBalance || 0;
      if (transferAmount <= 0 || transferAmount > walletBalance) {
        setErrorMessage("Please enter a valid amount not exceeding your available balance.");
        setIsButtonDisabled(true);
      } else {
        setErrorMessage("");
        setIsButtonDisabled(false);
      }
    }
  }, [transferAmount, asset]);

  if (!isOpen || !asset) return null;

  const handleConfirm = () => {
    if (asset) {
      onConfirm(transferAmount);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 text-slate-800">
      <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose}></div>
      <div className="bg-white rounded-lg p-4 z-50 w-3/12">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{isSupplyAction ? `Supply ${asset.asset}` : `Withdraw ${asset.asset}`}</h2>
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
          <AmountInput
            value={transferAmount}
            onChange={setTransferAmount}
            max={asset.walletBalance || 0}
            assetSymbol={asset.asset}
            walletBalanceConverted={asset.walletBalanceConverted}
            walletBalance={asset.walletBalance}
          />
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>
        <h2 className="mt-4 text-xl font-medium">Transaction Overview</h2>
        <div className="mt-2 border rounded-xl p-4">
          <div className="flex flex-col rounded-md gap-1">
            <div className="flex w-full justify-between items-center">
              <p className="text-md font-medium">Supply APY</p>
              <p className="text-sm font-bold">{asset.apy}%</p>
            </div>
            <div className="flex w-full justify-between items-center">
              <p className="text-md font-medium">Collateralization</p>
              <p className="text-sm font-bold text-success">
                {asset.collateral ? "Enabled" : <IsolatedStateComponent message="Isolated" />}
              </p>
            </div>
            <div className="flex w-full justify-between items-center">
              <p className="text-md font-medium">Health Factor</p>
              <p className="text-sm font-bold text-success">4.15</p>
            </div>
          </div>
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

export default SupplyModal;
