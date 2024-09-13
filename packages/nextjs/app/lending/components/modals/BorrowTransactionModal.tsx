import React, { useEffect, useState } from "react";
import useAccountAddress from "@/hooks/useAccount";
import useBorrow from "@/hooks/useBorrow";
import { ReserveData } from "@/types/types";
import { toWeiConverter } from "@/utils/toWeiConverter";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Address } from "viem";
import { useTranslation } from "~~/app/context/LanguageContext";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  reserve: ReserveData | null;
  balance: string;
}

/**
 * Modal component for handling borrow transactions.
 * @param {boolean} isOpen - Whether the modal is open or not.
 * @param {() => void} onClose - Function to call when the modal is closed.
 * @param {ReserveData | null} reserve - The reserve data to borrow from.
 * @param {string} balance - The available liquidity as a string.
 * @returns {JSX.Element | null} - The modal component or null if not open.
 */
const BorrowTransactionModal: React.FC<ModalProps> = ({ isOpen, onClose, reserve, balance }) => {
  // Translation context
  const { t } = useTranslation();
  // State management for the amount to be borrowed, interest rate mode, validity check, and error messages
  const [amount, setAmount] = useState("");
  const [interestRateMode, setInterestRateMode] = useState(2); // Default to Stable
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState<any>(null); // Reset data state
  const [isError, setIsError] = useState(false); // Reset isError state
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);

  // Hook for handling borrow transactions
  const { handleBorrow, isError: borrowError, error, data: borrowData } = useBorrow();

  // Fetch the user's wallet address
  const { address: walletAddress } = useAccountAddress();

  useEffect(() => {
    validateAmount(amount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  useEffect(() => {
    // Update state based on borrow hook response
    if (borrowError) {
      setIsError(true);
      setErrorMessage(error?.message || "An unknown error occurred.");
    }
    if (borrowData) {
      setData(borrowData);
    }
  }, [borrowError, borrowData, error]);

  /**
   * Validates the input amount for borrow.
   * @param {string} value - The amount input value.
   */
  const validateAmount = (value: string) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue) || numValue < 0) {
      setIsValid(false);
      setErrorMessage("Amount must be a positive number.");
    } else if (numValue === 0) {
      setIsValid(false);
      setErrorMessage("Amount must be greater than zero.");
    } else if (numValue > parseFloat(balance)) {
      setIsValid(false);
      setErrorMessage("Amount exceeds available liquidity.");
    } else {
      setIsValid(true);
      setErrorMessage("");
    }
  };

  /**
   * Handles changes to the input amount.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  /**
   * Sets the input amount to the maximum available balance.
   */
  const handleMaxClick = () => {
    setAmount(balance);
  };

  /**
   * Handles changes to the interest rate mode.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  /* const handleInterestRateModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInterestRateMode(parseInt(event.target.value));
  }; */
  /**
   * Handles the borrow button click event.
   */
  const handleBorrowClick = () => {
    if (walletAddress && reserve) {
      try {
        const decimals = reserve.decimals ? Number(reserve.decimals) : 18; // Convert decimals to number
        const amountInWei = toWeiConverter(parseFloat(amount), decimals); // Adjust if different
        handleBorrow(reserve.underlyingAsset as Address, amountInWei, interestRateMode, walletAddress as Address);
      } catch (err) {
        console.error("Error converting amount to BigInt:", err);
        setErrorMessage("Failed to process the borrow transaction.");
      }
    } else {
      console.error("User wallet address is not available.");
      setErrorMessage("User wallet address is not available.");
    }
  };

  /**
   * Handles copying the error message to the clipboard.
   */
  const handleCopyError = () => {
    if (error?.message) {
      navigator.clipboard
        .writeText(error.message)
        .then(() => {
          console.log("Error copied to clipboard");
          setShowSuccessIcon(true);
          setTimeout(() => {
            setShowSuccessIcon(false);
          }, 1500);
        })
        .catch(err => {
          console.error("Failed to copy error to clipboard", err);
        });
    }
  };

  /**
   * Handles closing the modal and resetting state.
   */
  const handleClose = () => {
    setAmount("");
    setInterestRateMode(2); // Reset to default Stable
    setIsValid(false);
    setErrorMessage("");
    setData(null);
    setIsError(false);
    onClose(); // Call the original onClose handler
  };

  // Return null if the modal is not open or if the reserve data is not available
  if (!isOpen || !reserve) {
    return null;
  }

  return (
    <div className="modal-blur-background">
      <div className="modal-container general-text-color flex flex-col gap-6">
        <h2>
          {t("LendingBorrowModalTitle")} {reserve.symbol}
        </h2>
        <div className="table-border-top">
          {!data && !isError && (
            <div className="flex flex-col gap-6 mt-6">
              <div className="container-gray-borders flex flex-col gap-2">
                <label className="font-bold">{t("LendingBorrowModalLabel")}</label>
                <div className="flex items-center">
                  <input
                    type="number"
                    className="without-borders"
                    placeholder="0.00"
                    value={amount}
                    onChange={handleChange}
                  />
                  <span className="font-bold">{reserve.symbol}</span>
                </div>
                <div className="text-xs">
                  {t("LendingBorrowModalBalance")}: {balance}{" "}
                  <span className="font-bold hover:underline cursor-pointer" onClick={handleMaxClick}>
                    MAX
                  </span>
                </div>
                {errorMessage && <p className="text-error text-xs">{errorMessage}</p>}
              </div>
              <div className="container-gray-borders flex flex-col gap-2">
                <label className="font-bold">{t("LendingBorrowModalTransactionOverview")}</label>
                <div className="flex justify-between items-center text-sm">
                  <span>{t("LendingBorrowModalTransactionBorrowAPY")}</span>
                  <span className="font-bold">{(Number(reserve.variableBorrowRate) / 1e25).toFixed(2)}%</span>
                </div>
              </div>
              <div className="flex justify-between gap-4">
                <button
                  className={`flex-grow-2 basis-2/3 ${isValid ? "primary-btn" : "disabled-btn"}`}
                  onClick={handleBorrowClick}
                  disabled={!isValid}
                >
                  {t("LendingBorrowModalButton")}
                </button>
                <button onClick={handleClose} className="secondary-btn flex-grow-1 basis-1/3">
                  {t("LendingBorrowModalClose")}
                </button>
              </div>
            </div>
          )}
          {isError && (
            <div className="flex flex-col gap-6 mt-6">
              <div className="error-container text-center">
                <p>
                  {t("LendingBorrowModalCancelMessage")}{" "}
                  <span onClick={handleCopyError} className="cursor-pointer underline">
                    {t("LendingBorrowModalCopyMessage")}
                  </span>
                  {showSuccessIcon && <FontAwesomeIcon icon={faClipboardCheck} className="text-lg ml-2" />}
                </p>
              </div>
              <button onClick={handleClose} className="primary-btn">
                {t("LendingBorrowModalClose")}
              </button>
            </div>
          )}
          {data && (
            <div className="flex flex-col gap-6 mt-6">
              <div className="success-container text-center">
                <h2 className="">{t("LendingBorrowModalSuccessTitle")}</h2>
                <p>{t("LendingBorrowModalSuccessMessage")}</p>
              </div>
              <button onClick={handleClose} className="primary-btn">
                Ok, {t("LendingBorrowModalClose")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BorrowTransactionModal;
