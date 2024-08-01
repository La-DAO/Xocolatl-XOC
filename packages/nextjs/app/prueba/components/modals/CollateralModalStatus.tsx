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

  const toggleCollateral = async () => {
    try {
      await handleSetUserUseReserveAsCollateral(assetAddress, !initialUseAsCollateral);
    } catch (err) {
      console.error("Error toggling collateral:", err);
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
    <div className="modal-blur-background">
      <div className="modal-container general-text-color flex flex-col gap-6">
        <h2 className="text-left">{initialUseAsCollateral ? "Remove as a collateral" : "Set as collateral"}</h2>
        <div className="table-border-top">
          {!data && !isError && (
            <div className="flex flex-col gap-6 mt-6">
              <div className="warning-container text-left">
                <p>
                  {initialUseAsCollateral
                    ? "Disabling this asset as collateral affects your borrowing power and Health Factor."
                    : "Enabling this asset as collateral increases your borrowing power and Health Factor. However, it can get liquidated if your health factor drops below 1."}
                </p>
              </div>
              <div className="flex gap-4">
                <button onClick={toggleCollateral} className="primary-btn flex-grow-2 basis-2/3">
                  {initialUseAsCollateral ? "Remove as collateral" : "Set as collateral"}
                </button>
                <button onClick={onClose} className="secondary-btn flex-grow-1 basis-1/3">
                  Cancel
                </button>
              </div>
            </div>
          )}
          {isError && (
            <div className="flex flex-col gap-6 mt-6">
              <div className="error-container">
                <p>
                  You cancelled the transaction.{" "}
                  <span onClick={handleCopyError} className="cursor-pointer underline">
                    Copy the error.
                  </span>
                </p>
              </div>
              <button onClick={onClose} className="primary-btn">
                Close
              </button>
            </div>
          )}
          {data && (
            <div className="flex flex-col gap-6 mt-6">
              <div className="success-container text-center">
                <h2 className="">All done!</h2>
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
                className="primary-btn"
              >
                Ok, close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollateralModal;
