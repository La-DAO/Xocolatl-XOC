import React, { useEffect, useState } from "react";
import Image from "next/image";
import CONFIG from "@/config";
import useAccountAddress from "@/hooks/useAccount";
import { useApproval } from "@/hooks/useApproval";
import { ReserveData } from "@/types/types";
import { toWeiConverter } from "@/utils/toWeiConverter";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Address } from "viem";
import { useChainId } from "wagmi";
import { useTranslation } from "~~/app/context/LanguageContext";
import { getBlockExplorerUrl } from "~~/app/utils/blockExplorer";
import useRepay from "~~/hooks/useRepay";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  reserve: ReserveData | null;
  balance: string;
}

/**
 * Modal component for handling repay transactions.
 * @param {boolean} isOpen - Whether the modal is open or not.
 * @param {() => void} onClose - Function to call when the modal is closed.
 * @param {ReserveData | null} reserve - The reserve data to repay.
 * @param {string} balance - The user's debt balance as a string.
 * @returns {JSX.Element | null} - The modal component or null if not open.
 */
const RepayTransactionModal: React.FC<ModalProps> = ({ isOpen, onClose, reserve, balance }) => {
  // Translation context
  const { t } = useTranslation();
  const [amount, setAmount] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState<any>(null);
  const [isError, setIsError] = useState(false);
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);
  const [isApproved, setIsApproved] = useState(false); // State to handle approval

  const chainId = useChainId();

  const { handleRepay, isError: repayError, error, repayHash } = useRepay();
  const { address: walletAddress } = useAccountAddress();

  const {
    approve,
    isError: approveError,
    isSuccess: approveSuccess,
    isPending: approvePending,
  } = useApproval(CONFIG.POOL, reserve?.underlyingAsset as Address); // Using the useApproval hook

  const blockExplorerUrl = `${getBlockExplorerUrl(chainId)}${repayHash}`;

  useEffect(() => {
    validateAmount(amount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  useEffect(() => {
    if (approveSuccess) {
      setIsApproved(true); // Mark as approved if the transaction is successful
    }
  }, [approveSuccess]);

  useEffect(() => {
    if (repayError) {
      setIsError(true);
      setErrorMessage(error?.message || "An unknown error occurred.");
    }
    if (repayHash) {
      setData(repayHash);
    }
  }, [repayError, repayHash, error]);

  /**
   * Validates the entered amount for repayment.
   * @param {string} value - The amount to validate.
   */
  const validateAmount = (value: string) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue) || numValue < 0) {
      setIsValid(false);
      setErrorMessage("Amount must be a positive number.");
    } else if (numValue > parseFloat(balance)) {
      setIsValid(false);
      setErrorMessage("Amount exceeds wallet balance.");
    } else if (numValue === 0) {
      setIsValid(false);
      setErrorMessage("Amount must be greater than zero.");
    } else {
      setIsValid(true);
      setErrorMessage("");
    }
  };

  /**
   * Handles changes to the amount input field.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event.
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  /**
   * Sets the amount to the maximum available balance.
   */
  const handleMaxClick = () => {
    setAmount(balance);
  };

  /**
   * Handles the click event for the approve button.
   * @throws Will throw an error if there is an issue converting the amount to a compatible format.
   */
  const handleApproveClick = () => {
    if (walletAddress) {
      const decimals = Number(reserve?.decimals);
      let adjustedAmount = amount;

      // Adjust the amount if decimals are less than 18
      if (decimals < 18) {
        const factor = Math.pow(10, 18 - decimals);
        adjustedAmount = (parseFloat(amount) / factor).toFixed(18); // Convert to a format compatible with parseEther
      }
      approve(adjustedAmount); // Pass the adjusted value
    }
  };

  /**
   * Handles the click event for the repay button.
   * @throws Will throw an error if there is an issue converting the amount to BigInt.
   */
  const handleRepayClick = () => {
    if (walletAddress && isApproved) {
      try {
        const decimals = Number(reserve?.decimals); // Convert to number if it's `bigint`
        const amountInWei = toWeiConverter(parseFloat(amount), decimals);
        handleRepay(reserve?.underlyingAsset as Address, amountInWei, 2, walletAddress as Address);
      } catch (err) {
        console.error("Error converting amount to BigInt:", err);
      }
    } else {
      console.error("Approval is required before repayment.");
    }
  };

  /**
   * Handles the click event to copy the error message to the clipboard.
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
   * Handles closing the modal and resets the form state.
   */
  const handleClose = () => {
    setAmount("");
    setIsValid(false);
    setErrorMessage("");
    setData(null);
    setIsError(false);
    setIsApproved(false); // Reset approval state on close
    onClose();
  };

  if (!isOpen || !reserve) {
    return null;
  }

  return (
    <div className="modal-blur-background">
      <div className="modal-container general-text-color flex flex-col gap-6">
        <h2>
          {t("LendingRepayModalTitle")} {reserve.symbol}
        </h2>
        <div className="table-border-top">
          {!data && !isError && (
            <div className="flex flex-col gap-6 mt-6">
              <div className="container-gray-borders flex flex-col gap-2">
                <label className="font-bold">{t("LendingRepayModalLabel")}</label>
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
                  {t("LendingRepayModalBalance")}: {balance}{" "}
                  <span className="font-bold hover:underline cursor-pointer" onClick={handleMaxClick}>
                    MAX
                  </span>
                </div>
                {errorMessage && <p className="text-error text-xs">{errorMessage}</p>}
              </div>

              <div className="flex justify-between gap-4">
                <button
                  className={`flex-grow-2 basis-2/3 ${isValid && !isApproved ? "primary-btn" : "disabled-btn"}`}
                  onClick={handleApproveClick}
                  disabled={!isValid || approvePending || isApproved} // Approve button disabled if already approved or pending
                >
                  {t("LendingRepayModalApprove")}
                </button>
                <button
                  className={`flex-grow-2 basis-2/3 ${isApproved && isValid ? "primary-btn" : "disabled-btn"}`}
                  onClick={handleRepayClick}
                  disabled={!isApproved || !isValid} // Repay button enabled only if approved
                >
                  {t("LendingRepayModalButton")}
                </button>
                <button onClick={handleClose} className="secondary-btn flex-grow-1 basis-1/3">
                  {t("LendingRepayModalClose")}
                </button>
              </div>
            </div>
          )}
          {approveError && (
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
                  Oops! Something went wrong. Try again please.{" "}
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
                  Woops, you encountered an error.
                  {showSuccessIcon && <FontAwesomeIcon icon={faClipboardCheck} className="text-lg ml-2" />}
                </p>
                <span onClick={handleCopyError} className="cursor-pointer underline font-bold text-lg">
                  Copy the error
                </span>
              </div>
              <button onClick={handleClose} className="primary-btn text-xs sm:text-sm">
                {t("LendingSupplyModalClose")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepayTransactionModal;
