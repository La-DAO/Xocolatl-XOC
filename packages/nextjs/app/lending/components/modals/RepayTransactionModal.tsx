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
import { getBlockExplorerUrl } from "~~/app/utils/utils";
import useRepay from "~~/hooks/useRepay";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  reserve: ReserveData | null;
  balance: string;
}

const RepayTransactionModal: React.FC<ModalProps> = ({ isOpen, onClose, reserve, balance }) => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState<any>(null);
  const [isError, setIsError] = useState(false);
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  const chainId = useChainId();
  const { handleRepay, isError: repayError, error, repayHash } = useRepay();
  const { address: walletAddress } = useAccountAddress();

  const {
    approve,
    isError: approveError,
    isSuccess: approveSuccess,
    isPending: approvePending,
  } = useApproval(CONFIG.POOL, reserve?.underlyingAsset as Address);

  const blockExplorerUrl = `${getBlockExplorerUrl(chainId)}${repayHash}`;

  useEffect(() => {
    validateAmount(amount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  useEffect(() => {
    if (approveSuccess) {
      setIsApproved(true);
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  /*   const handleMaxClick = () => {
    setAmount(balance);
  }; */

  const handleApproveClick = () => {
    if (walletAddress) {
      const decimals = Number(reserve?.decimals);
      let adjustedAmount = amount;

      if (decimals < 18) {
        const factor = Math.pow(10, 18 - decimals);
        adjustedAmount = (parseFloat(amount) / factor).toFixed(18);
      }
      approve(adjustedAmount);
    }
  };

  const handleRepayClick = () => {
    if (walletAddress && isApproved) {
      try {
        const decimals = Number(reserve?.decimals);
        const amountInWei = toWeiConverter(parseFloat(amount), decimals);
        handleRepay(reserve?.underlyingAsset as Address, amountInWei, 2, walletAddress as Address);
      } catch (err) {
        console.error("Error converting amount to BigInt:", err);
      }
    } else {
      console.error("Approval is required before repayment.");
    }
  };

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

  const handleClose = () => {
    setAmount("");
    setIsValid(false);
    setErrorMessage("");
    setData(null);
    setIsError(false);
    setIsApproved(false);
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
                  {/* <span className="font-bold hover:underline cursor-pointer" onClick={handleMaxClick}>
                    MAX
                  </span> */}
                </div>
                {errorMessage && <p className="text-error text-xs">{errorMessage}</p>}
              </div>

              <div className="flex justify-between gap-4">
                {isApproved ? (
                  <button
                    className={`flex-grow-2 basis-2/3 ${isValid ? "primary-btn" : "disabled-btn"}`}
                    onClick={handleRepayClick}
                    disabled={!isValid}
                  >
                    {t("LendingRepayModalButton")}
                  </button>
                ) : (
                  <button
                    className={`flex-grow-2 basis-2/3 ${isValid ? "primary-btn" : "disabled-btn"}`}
                    onClick={handleApproveClick}
                    disabled={!isValid || approvePending}
                  >
                    {approvePending ? "Processing..." : t("LendingRepayModalApprove")}
                  </button>
                )}
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
                <p className="text-xs sm:text-sm">Repayment transaction successful</p>
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
          {isError && !approveError && (
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
                {t("LendingRepayModalClose")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepayTransactionModal;
