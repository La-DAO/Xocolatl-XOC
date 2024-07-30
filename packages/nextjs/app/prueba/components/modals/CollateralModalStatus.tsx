import React, { useState } from "react";
import useSetUserUseReserveAsCollateral from "@/hooks/useSetUserUseReserveAsCollateral";
import { Address } from "viem";

/**
 * Props for the CollateralModal component.
 */
interface CollateralModalProps {
  assetAddress: Address;
  initialUseAsCollateral: boolean;
  onClose: () => void;
  onConfirm: () => void; // New prop for handling the confirmation
}

/**
 * Modal for handling collateral transactions.
 * @param {Address} assetAddress - The address of the asset.
 * @param {boolean} initialUseAsCollateral - Initial collateral status.
 * @param {function} onClose - Function to close the modal.
 * @param {function} onConfirm - Function to confirm the action.
 */
const CollateralModal: React.FC<CollateralModalProps> = ({
  assetAddress,
  initialUseAsCollateral,
  onClose,
  onConfirm,
}) => {
  const { handleSetUserUseReserveAsCollateral, isError, error, data } = useSetUserUseReserveAsCollateral();
  const [isProcessing, setIsProcessing] = useState(false);

  const toggleCollateral = async () => {
    setIsProcessing(true);
    try {
      await handleSetUserUseReserveAsCollateral(assetAddress, !initialUseAsCollateral);
    } catch (err) {
      console.error("Error toggling collateral:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCopyError = () => {
    if (error?.message) {
      navigator.clipboard
        .writeText(error.message)
        .then(() => {
          console.log("Error copied to clipboard");
        })
        .catch(err => {
          console.error("Failed to copy error to clipboard", err);
        });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4 text-left">
          {initialUseAsCollateral ? "Remove as a collateral" : "Set as Collateral"}
        </h2>
        {isProcessing ? (
          <p className="text-blue-500">Processing...</p>
        ) : (
          <>
            {!data && !isError && (
              <div className=" flex flex-col gap-4">
                <div className="border-2 border-amber-400 bg-amber-50 rounded p-2 text-amber-400 text-left">
                  <p>
                    {initialUseAsCollateral
                      ? "Disabling this asset as collateral affects your borrowing power and Health Factor."
                      : "Enabling this asset as collateral increases your borrowing power and Health Factor. However, it can get liquidated if your health factor drops below 1."}
                  </p>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={toggleCollateral}
                    className="bg-accent text-white px-3 py-1 rounded-lg hover:bg-primary"
                  >
                    {initialUseAsCollateral ? "Remove as collateral" : "Set as collateral"}
                  </button>
                  <button
                    onClick={onClose}
                    className="bg-gray-300 text-gray-800 px-3 py-1 rounded-lg hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
            {isError && (
              <div className="flex flex-col">
                <div className="p-4 border border-red-600 rounded bg-red-100 mt-4 max-w-full overflow-x-auto">
                  <p className="text-red-600">
                    You cancelled the transaction.{" "}
                    <span onClick={handleCopyError} className="cursor-pointer underline">
                      Copy the error.
                    </span>
                  </p>
                </div>
                <button onClick={onClose} className="bg-accent text-white px-3 py-1 rounded-lg hover:bg-primary mt-2">
                  Close
                </button>
              </div>
            )}
            {data && (
              <div className="flex flex-col">
                <div className="p-4 border border-green-500 text-green-500 rounded bg-green-100 mt-4">
                  <h2 className="text-xl font-bold">All done!</h2>
                  <p>
                    {initialUseAsCollateral
                      ? "Your asset is not used as a collateral"
                      : "Your asset is used as a collateral"}
                  </p>
                </div>
                <button
                  onClick={() => {
                    onConfirm();
                    onClose();
                  }}
                  className="bg-accent text-white px-3 py-1 rounded-lg hover:bg-primary mt-2"
                >
                  Ok, close
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CollateralModal;
