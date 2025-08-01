import React, { useEffect, useState } from "react";
import Image from "next/image";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Address } from "viem";
import { useChainId } from "wagmi";
import { useTranslation } from "~~/app/context/LanguageContext";
import { getBlockExplorerUrl } from "~~/app/utils/utils";
import useRepayCPD from "~~/hooks/useRepayCDP";

interface RepayModalProps {
  isOpen: boolean;
  onClose: () => void;
  backedTokenID: string;
  houseOfCoinContract: Address;
  mintedAmount: number; // Add this new prop
}

const RepayModal: React.FC<RepayModalProps> = ({
  isOpen,
  onClose,
  backedTokenID,
  houseOfCoinContract,
  mintedAmount,
}) => {
  const { t } = useTranslation();
  const chainId = useChainId();
  const [amount, setAmount] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState<any>(null);
  const [isError, setIsError] = useState(false);
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);

  const { handleRepay, isError: repayError, error, repayHash } = useRepayCPD();

  useEffect(() => {
    validateAmount(amount);
  }, [amount]);

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
    if (isNaN(numValue) || numValue <= 0) {
      setIsValid(false);
      setErrorMessage("Amount must be a positive number.");
    } else {
      setIsValid(true);
      setErrorMessage("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleRepayClick = () => {
    if (amount && backedTokenID) {
      try {
        handleRepay(houseOfCoinContract, backedTokenID, amount);
      } catch (err) {
        console.error("Error during handleRepay execution:", err);
      }
    } else {
      console.error("Amount or backedTokenID is not valid.");
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
    onClose();
  };

  const blockExplorerUrl = `${getBlockExplorerUrl(chainId)}${repayHash}`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 dark:text-primary w-full max-w-md sm:max-w-lg md:max-w-2xl mx-4">
        <h2 className="text-lg sm:text-xl font-bold mb-4">{t("RepayModalTitle")} $XOC</h2>
        <p className="mb-4 text-sm sm:text-base">{t("RepayModalSubtitle")}</p>

        <div role="alert" className="alert mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info h-5 w-5 sm:h-6 sm:w-6 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span className="text-xs sm:text-sm">
            {t("RepayModalPleaseEnsureThatYouHaveSufficientFundsToCoverTheRepaymentAmount")}
          </span>
        </div>

        {!data && !isError && (
          <div className="flex flex-col gap-6 mt-6">
            <div className="container-gray-borders flex flex-col gap-2">
              <label className="font-bold text-sm sm:text-base">{t("RepayModalAmount")}</label>
              <div className="flex items-center">
                <input
                  type="number"
                  className="without-borders w-full text-sm sm:text-base"
                  placeholder="0.00"
                  value={amount}
                  onChange={handleChange}
                  max={mintedAmount}
                />
                <span className="font-bold ml-2">$XOC</span>
              </div>
              {errorMessage && <p className="text-error text-xs">{errorMessage}</p>}
            </div>

            <div className="container-gray-borders flex flex-col gap-2">
              <label className="font-bold text-sm sm:text-base">{t("RepayModalTransactionOverview")}</label>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span>{t("RepayModalTotalMintedAmount")}</span>
                <span className="font-bold">{mintedAmount.toFixed(6)} $XOC</span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span>{t("RepayModalRepayAmount")}</span>
                <span className="font-bold">{amount ? amount : 0} $XOC</span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span>{t("RepayModalHouseOfCoinAddress")}:</span>
                <span className="break-all">{houseOfCoinContract}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <button
                className={`flex-grow sm:basis-2/3 ${isValid ? "primary-btn" : "disabled-btn"}`}
                onClick={handleRepayClick}
                disabled={!isValid}
              >
                {t("RepayModalRepay")}
              </button>
              <button onClick={handleClose} className="secondary-btn flex-grow sm:basis-1/3">
                {t("RepayModalCancel")}
              </button>
            </div>
          </div>
        )}

        {isError && (
          <div className="flex flex-col gap-6 mt-6">
            <div className="error-container text-center">
              <Image
                src="/Open Doodles - Messy.svg"
                alt="Meditating"
                className="max-w-60 mx-auto mb-4"
                width={250}
                height={250}
              />
              <p className="text-xs sm:text-sm">
                Oops! Something went wrong.{" "}
                {showSuccessIcon && <FontAwesomeIcon icon={faClipboardCheck} className="text-lg ml-2" />}
              </p>
              <span onClick={handleCopyError} className="cursor-pointer underline font-bold text-lg">
                {t("RepayModalCopyTheError")}
              </span>
            </div>
            <button onClick={handleClose} className="primary-btn text-xs sm:text-sm">
              {t("RepayModalClose")}
            </button>
          </div>
        )}

        {data && (
          <div className="flex flex-col gap-6 mt-6">
            <div className="success-container text-center">
              <Image
                src="/Open Doodles - Doggie.svg"
                alt="Meditating"
                className="max-w-60 mx-auto mb-4"
                width={250}
                height={250}
              />
              <h2 className="text-base sm:text-lg">{t("RepayModalSuccessTitle")}!</h2>
              <p className="text-xs sm:text-sm">{t("RepayModalSuccessMessage")}</p>
              <div className="pb-3"></div>
              {blockExplorerUrl && (
                <a href={blockExplorerUrl} target="_blank" rel="noreferrer" className="block link pb-3">
                  {t("RepayModalOpenInBlockExplorer")}
                </a>
              )}
            </div>
            <button onClick={handleClose} className="primary-btn text-xs sm:text-sm">
              {t("RepayModalOkClose")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RepayModal;
