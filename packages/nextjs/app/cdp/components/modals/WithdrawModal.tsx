// WithdrawModal.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useAccountAddress from "@/hooks/useAccount";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Address, formatEther } from "viem";
import { useChainId, useReadContract, useWaitForTransactionReceipt } from "wagmi";
import { houseOfReserveABI } from "~~/app/components/abis/houseofreserve";
import { useTranslation } from "~~/app/context/LanguageContext";
import { getBlockExplorerUrl } from "~~/app/utils/utils";
import { useWithdraw } from "~~/hooks/useWithdrawCDP";

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  assetName: string;
  houseOfReserveContract: string;
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({ isOpen, onClose, assetName, houseOfReserveContract }) => {
  const chainId = useChainId();
  const { t } = useTranslation();
  const [amount, setAmount] = useState("");
  const { address: walletAddress } = useAccountAddress();
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState<any>(null);
  const [isError, setIsError] = useState(false);
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);
  const [balanceError, setBalanceError] = useState<string | null>(null);
  const [maxWithdrawalAmount, setMaxWithdrawalAmount] = useState<string | null>(null);

  // Fetch the maximum withdrawal amount using the useReadContract hook
  const { data: checkMaxWithdrawal } = useReadContract({
    address: houseOfReserveContract as Address, // House of Reserve contract address
    abi: houseOfReserveABI,
    functionName: "checkMaxWithdrawal", // Assuming it's a balanceOf-like function for withdrawals
    args: [walletAddress],
  });
  console.log("Check Max Withdrawal", checkMaxWithdrawal);

  useEffect(() => {
    if (checkMaxWithdrawal) {
      try {
        // Ensure that checkMaxWithdrawal is handled as a BigInt
        const formattedAmount = formatEther(checkMaxWithdrawal as bigint);
        setMaxWithdrawalAmount(formattedAmount);
      } catch (error) {
        console.error("Error formatting max withdrawal amount:", error);
        setMaxWithdrawalAmount("0.00");
      }
    }
  }, [checkMaxWithdrawal]);

  // Parse formatted amount to a number if needed
  const formattedCheckMaxWithdrawal = maxWithdrawalAmount ? parseFloat(maxWithdrawalAmount) : null;
  console.log("Formatted Check Max Withdrawal", formattedCheckMaxWithdrawal);

  const {
    withdraw,
    isError: isWithdrawError,
    isPending: isWithdrawPending,
    error,
    withdrawHash,
  } = useWithdraw(houseOfReserveContract as Address);

  const blockExplorerUrl = `${getBlockExplorerUrl(chainId)}${withdrawHash}`;

  const { isLoading: isWithdrawLoading, isSuccess: isWithdrawSuccess } = useWaitForTransactionReceipt({
    hash: withdrawHash,
  });

  useEffect(() => {
    const assetAmount = parseFloat(amount) || 0;

    // Validate if amount is valid and does not exceed max withdrawal amount
    if (formattedCheckMaxWithdrawal !== null && assetAmount > formattedCheckMaxWithdrawal) {
      setBalanceError("You can't withdraw more than the maximum allowed amount.");
      setIsValid(false);
    } else if (assetAmount <= 0 || isNaN(assetAmount)) {
      setBalanceError(null);
      setErrorMessage("Amount must be a positive number.");
      setIsValid(false);
    } else {
      setBalanceError(null);
      setErrorMessage("");
      setIsValid(true);
    }
  }, [amount, formattedCheckMaxWithdrawal]);

  useEffect(() => {
    if (isWithdrawError) {
      setIsError(true);
      setErrorMessage(error?.message || "An unknown error occurred.");
    }
    if (withdrawHash) {
      setData(withdrawHash);
    }
  }, [isWithdrawError, withdrawHash, error]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleMaxClick = () => {
    setAmount(formattedCheckMaxWithdrawal?.toString() || "");
  };

  const onWithdrawClick = () => {
    withdraw(amount);
    setAmount("");
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 dark:text-primary">
        <h2 className="text-xl font-bold mb-4 ml-1">
          {t("WithdrawModalTitle")} {assetName}
        </h2>
        <p className="mb-4 ml-1">
          {t("WithdrawModalSubtitle")} {assetName} {t("from")} House Of Reserve
        </p>

        <div role="alert" className="alert mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info h-6 w-6 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>{t("WithdrawModalYouWillNeedToApproveTheTransactionAndWaitAround510SecondsBeforeItGoesThrough")}</span>
        </div>

        {!data && !isError && (
          <div className="flex flex-col gap-6 mt-6">
            <div className="container-gray-borders flex flex-col gap-2">
              <label className="font-bold">{t("WithdrawModalAmount")}</label>
              <div className="flex items-center">
                <input
                  type="number"
                  className="without-borders"
                  placeholder="0.00"
                  value={amount}
                  onChange={handleChange}
                />
                <span className="font-bold">{assetName}</span>
              </div>
              <span className="font-bold hover:underline cursor-pointer" onClick={handleMaxClick}>
                MAX
              </span>
              {balanceError && <p className="text-xs text-red-600 ml-2">{balanceError}</p>}
              {errorMessage && <p className="text-error text-xs">{errorMessage}</p>}
            </div>

            <div className="container-gray-borders flex flex-col gap-2">
              <label className="font-bold">{t("WithdrawModalTransactionOverview")}</label>
              <div className="flex justify-between items-center text-sm">
                <span>{t("WithdrawModalYouWillWithdraw")}:</span>
                <div className="flex items-center gap-1">
                  <span>{amount ? amount : 0}</span>
                  <span className=" font-bold">{assetName}</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <p className="text-xs text-gray-500">{t("WithdrawModalMaximumWithdrawalAmount")}:</p>
                <div className="flex items-center gap-1">
                  <span>{formattedCheckMaxWithdrawal}</span>
                  <span className=" font-bold">{assetName}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-4">
              {isWithdrawLoading ? (
                <div className="flex-grow-2 basis-2/3 bg-warning text-base-100 text-center rounded-lg py-2 cursor-not-allowed">
                  {t("WithdrawModalWaitingForWithdrawal")}...
                </div>
              ) : isWithdrawSuccess ? (
                <button
                  className={`flex-grow-2 basis-2/3 ${isValid && !balanceError ? "primary-btn" : "disabled-btn"}`}
                  onClick={onWithdrawClick}
                  disabled={isWithdrawPending || !isValid || balanceError !== null}
                >
                  {isWithdrawPending ? t("WithdrawModalProcessing") + "..." : t("WithdrawModalWithdraw")}
                </button>
              ) : (
                <button
                  className={`flex-grow-2 basis-2/3 ${isValid && !balanceError ? "primary-btn" : "disabled-btn"}`}
                  onClick={onWithdrawClick}
                  disabled={isWithdrawPending || !isValid || balanceError !== null}
                >
                  {isWithdrawPending ? t("WithdrawModalProcessing") + "..." : t("WithdrawModalWithdraw")}
                </button>
              )}
              <button onClick={handleClose} className="secondary-btn flex-grow-1 basis-1/3">
                {t("WithdrawModalClose")}
              </button>
            </div>
          </div>
        )}

        {isWithdrawError && (
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
                {t("WithdrawModalCopyError")}.
              </span>
            </div>
            <button onClick={handleClose} className="primary-btn text-xs sm:text-sm">
              {t("WithdrawModalClose")}
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
              <h2 className="text-base sm:text-lg">{t("WithdrawModalSuccessTitle")}!</h2>
              <p className="text-xs sm:text-sm">{t("WithdrawModalSuccessMessage")}</p>
              <div className="pb-3"></div>
              {blockExplorerUrl && (
                <a href={blockExplorerUrl} target="_blank" rel="noreferrer" className="block link pb-3">
                  {t("WithdrawModalOpenInBlockExplorer")}
                </a>
              )}
            </div>
            <button onClick={handleClose} className="primary-btn text-xs sm:text-sm">
              {t("WithdrawModalOkClose")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WithdrawModal;
