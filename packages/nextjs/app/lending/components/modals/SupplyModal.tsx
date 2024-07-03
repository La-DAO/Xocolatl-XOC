// SupplyModal.tsx
import React, { useEffect, useState } from "react";
import AmountInput from "@/components/inputs/AmountInput";
import IsolatedStateComponent from "@/components/tags/IsolatedState";
import { SupplyModalProps } from "@/types/assets/assets";
import { faCircleExclamation, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * SupplyModal component displays a modal for supplying assets,
 * allowing users to enter an amount and confirm the supply action.
 *
 * @param {SupplyModalProps} props - Props containing modal state and actions.
 * @param {boolean} props.isOpen - Flag indicating if the modal is open.
 * @param {Function} props.onClose - Callback function to close the modal.
 * @param {object} props.asset - The asset to supply.
 * @param {number} props.transferAmount - Amount of asset to supply.
 * @param {Function} props.setTransferAmount - Function to transfer the supply amount.
 * @param {Function} props.onConfirm - Callback function to confirm the supplying action.
 */
const SupplyModal: React.FC<SupplyModalProps> = ({
  isOpen,
  onClose,
  asset,
  transferAmount,
  setTransferAmount,
  onConfirm,
}) => {
  // State for error message
  const [errorMessage, setErrorMessage] = useState("");
  // State to disable the button
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    // Effect to validate transfer amount based on asset balance
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

  // Return null if modal is not open or no asset is selected
  if (!isOpen || !asset) return null;

  // Handle the confirmation of the supply action
  const handleConfirm = () => {
    if (asset) {
      onConfirm(transferAmount);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 text-slate-800">
      {/* Overlay to close modal when clicking outside */}
      <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose}></div>
      <div className="bg-white rounded-lg p-4 z-50 w-3/12">
        {/* Modal header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Supply {asset.asset}</h2>
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

        {/* Transaction overview section */}
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

        {/* Confirmation button */}
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
