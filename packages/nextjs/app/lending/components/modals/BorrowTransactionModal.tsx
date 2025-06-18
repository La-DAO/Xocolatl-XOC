import React, { useEffect, useState } from "react";
import Image from "next/image";
import useAccountAddress from "@/hooks/useAccount";
import useBorrow from "@/hooks/useBorrow";
import { ReserveData } from "@/types/types";
import { toWeiConverter } from "@/utils/toWeiConverter";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Address } from "viem";
import { useChainId } from "wagmi";
import { useTranslation } from "~~/app/context/LanguageContext";
import { getBlockExplorerUrl } from "~~/app/utils/utils";

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
 * @param {boolean} canBorrow - Whether the user can borrow this asset.
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

  const chainId = useChainId();

  // Hook for handling borrow transactions
  const { handleBorrow, isError: borrowError, error, borrowHash } = useBorrow();

  // Fetch the user's wallet address
  const { address: walletAddress } = useAccountAddress();

  const blockExplorerUrl = `${getBlockExplorerUrl(chainId)}${borrowHash}`;

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
    if (borrowHash) {
      setData(borrowHash);
    }
  }, [borrowError, borrowHash, error]);

  /**
   * Validates the input amount for borrow.
   * @param {string} value - The amount input value.
   */
  const validateAmount = (value: string) => {
    const numValue = parseFloat(value);
    const decimals = reserve?.decimals ? Number(reserve.decimals) : 18;
    const borrowCap = reserve?.borrowCap ? Number(reserve.borrowCap) : null;
    const alreadyBorrowed = reserve?.totalScaledVariableDebt
      ? Number(reserve.totalScaledVariableDebt) / 10 ** decimals
      : 0;

    if (isNaN(numValue) || numValue < 0) {
      setIsValid(false);
      setErrorMessage("Amount must be a positive number.");
    } else if (numValue === 0) {
      setIsValid(false);
      setErrorMessage("Amount must be greater than zero.");
    } else if (numValue > parseFloat(balance)) {
      setIsValid(false);
      setErrorMessage("Amount exceeds available liquidity.");
    } else if (borrowCap !== null && borrowCap > 0 && numValue + alreadyBorrowed > borrowCap) {
      setIsValid(false);
      setErrorMessage("Amount exceeds the borrow cap.");
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
    const decimals = reserve?.decimals ? Number(reserve.decimals) : 18;
    const borrowCap = reserve?.borrowCap ? Number(reserve.borrowCap) : null;
    const alreadyBorrowed = reserve?.totalScaledVariableDebt
      ? Number(reserve.totalScaledVariableDebt) / 10 ** decimals
      : 0;
    let maxAmount = parseFloat(balance);

    if (borrowCap !== null && borrowCap > 0) {
      maxAmount = Math.min(maxAmount, borrowCap - alreadyBorrowed);
    }
    setAmount(maxAmount > 0 ? maxAmount.toFixed(2) : "0");
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
                <div className="flex justify-between items-center text-sm">
                  <span>{t("LendingBorrowModalTransactionBorrowCap")}</span>
                  <span className="font-bold">
                    {reserve.borrowCap ? `${Math.floor(Number(reserve.borrowCap)).toLocaleString("en-US")}` : "N/A"}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>{t("LendingBorrowModalTransactionBorrowed")}</span>
                  <span className="font-bold">
                    {reserve.totalScaledVariableDebt
                      ? (() => {
                          const decimals = reserve.decimals ? Number(reserve.decimals) : 18;
                          const borrowed = Number(reserve.totalScaledVariableDebt) / 10 ** decimals;
                          return borrowed.toLocaleString("en-US");
                        })()
                      : "N/A"}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>{t("LendingBorrowModalTransactionAvailableLiquidity")}</span>
                  <span
                    className={`font-bold ${(() => {
                      if (!reserve.availableLiquidity) return "";
                      const decimals = reserve.decimals ? Number(reserve.decimals) : 18;
                      const available = Number(reserve.availableLiquidity) / 10 ** decimals;
                      return available < 5 ? "text-error" : "";
                    })()}`}
                  >
                    {reserve.availableLiquidity
                      ? (() => {
                          const decimals = reserve.decimals ? Number(reserve.decimals) : 18;
                          const available = Number(reserve.availableLiquidity) / 10 ** decimals;
                          return available.toLocaleString("en-US");
                        })()
                      : "N/A"}
                  </span>
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
                <Image
                  src="/Open Doodles - Messy.svg"
                  alt="Error"
                  className="max-w-60 mx-auto mb-4"
                  width={250}
                  height={250}
                />
                <p className="text-xs sm:text-sm">
                  Oops! Something went wrong.{" "}
                  {showSuccessIcon && <FontAwesomeIcon icon={faClipboardCheck} className="text-lg ml-2" />}
                </p>
                <span onClick={handleCopyError} className="cursor-pointer underline font-bold text-lg">
                  Copy the error.
                </span>
              </div>
              <button onClick={handleClose} className="primary-btn text-xs sm:text-sm">
                Close
              </button>
            </div>
          )}
          {data && (
            <div className="flex flex-col gap-6 mt-6">
              <div className="success-container text-center">
                <Image
                  src="/Open Doodles - Meditating.svg"
                  alt="Meditating"
                  className="max-w-60 mx-auto mb-4"
                  width={250}
                  height={250}
                />
                <h2 className="text-base sm:text-lg">All done!</h2>
                <p className="text-xs sm:text-sm">Deposit transaction successful</p>
                <div className="pb-3"></div>
                {blockExplorerUrl && (
                  <a href={blockExplorerUrl} target="_blank" rel="noreferrer" className="block link pb-3">
                    Open in Block Explorer
                  </a>
                )}
              </div>
              <button onClick={handleClose} className="primary-btn text-xs sm:text-sm">
                Ok, close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BorrowTransactionModal;
