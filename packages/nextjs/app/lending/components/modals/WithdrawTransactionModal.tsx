import React, { useEffect, useState } from "react";
import Image from "next/image";
import useAccountAddress from "@/hooks/useAccount";
import { useLendingStore } from "@/stores/lending-store";
import { ReserveData } from "@/types/types";
import { toWeiConverter } from "@/utils/toWeiConverter";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Address } from "viem";
import { useChainId, useWaitForTransactionReceipt } from "wagmi";
import { useTranslation } from "~~/app/context/LanguageContext";
import { getBlockExplorerUrl } from "~~/app/utils/utils";
import useWithdraw from "~~/hooks/useWithdraw";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  reserve: ReserveData | null;
  balance: string;
}

/**
 * Modal component for handling withdraw transactions.
 * @param {boolean} isOpen - Whether the modal is open or not.
 * @param {() => void} onClose - Function to call when the modal is closed.
 * @param {ReserveData | null} reserve - The reserve data to withdraw from.
 * @param {string} balance - The available balance as a string.
 * @returns {JSX.Element | null} - The modal component or null if not open.
 */
const WithdrawTransactionModal: React.FC<ModalProps> = ({ isOpen, onClose, reserve, balance }) => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState<any>(null);
  const [isError, setIsError] = useState(false);
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);

  const chainId = useChainId();

  const { handleWithdraw, isError: withdrawError, error, withdrawHash } = useWithdraw();
  const { address: walletAddress } = useAccountAddress();

  // Transaction confirmation tracking for withdraw
  const {
    isLoading: isWithdrawConfirming,
    isSuccess: isWithdrawConfirmed,
    data: transactionReceipt,
  } = useWaitForTransactionReceipt({
    hash: withdrawHash,
  });

  // Store for refreshing user account data
  const { refreshComponents } = useLendingStore();

  const blockExplorerUrl = `${getBlockExplorerUrl(chainId)}${withdrawHash}`;

  useEffect(() => {
    validateAmount(amount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  useEffect(() => {
    if (withdrawError) {
      setIsError(true);
      setErrorMessage(error?.message || "An unknown error occurred.");
    }
    if (withdrawHash) {
      setData(withdrawHash);
    }
  }, [withdrawError, withdrawHash, error]);

  // Handle transaction confirmation and refresh store data
  useEffect(() => {
    if (isWithdrawConfirmed && transactionReceipt) {
      // Transaction confirmed successfully with receipt, wait a bit then refresh all lending data
      const timer = setTimeout(() => {
        refreshComponents();
        console.log("Withdraw transaction confirmed with receipt, refreshing lending store data", transactionReceipt);
      }, 2000); // Wait 2 seconds to ensure blockchain state is updated

      return () => clearTimeout(timer);
    }
  }, [isWithdrawConfirmed, transactionReceipt, refreshComponents]);

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
      // Check against available liquidity
      if (reserve?.availableLiquidity !== undefined) {
        const decimals = reserve.decimals ? Number(reserve.decimals) : 18;
        const availableLiquidity = Number(reserve.availableLiquidity) / 10 ** decimals;
        if (numValue > availableLiquidity) {
          setIsValid(false);
          setErrorMessage("There's not enough liquidity to withdraw your funds, check back soon.");
          return;
        }
      }
      setIsValid(true);
      setErrorMessage("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleMaxClick = () => {
    setAmount(balance);
  };

  const handleWithdrawClick = () => {
    if (walletAddress) {
      try {
        const decimals = Number(reserve?.decimals);
        const amountInWei = toWeiConverter(parseFloat(amount), decimals); // Conversion to wei considering the decimals
        handleWithdraw(reserve?.underlyingAsset as Address, amountInWei, walletAddress as Address);
      } catch (err) {
        console.error("Error converting amount to BigInt:", err);
      }
    } else {
      console.error("User wallet address is not available.");
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

  if (!isOpen || !reserve) {
    return null;
  }

  return (
    <div className="modal-blur-background">
      <div className="modal-container general-text-color flex flex-col gap-6">
        <h2>
          {t("LendingWithdrawModalTitle")} {reserve.symbol}
        </h2>
        <div className="table-border-top">
          {!data && !isError && (
            <div className="flex flex-col gap-6 mt-6">
              <div className="container-gray-borders flex flex-col gap-2">
                <label className="font-bold">{t("LendingWithdrawModalLabel")}</label>
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
                  {t("LendingWithdrawModalBalance")}: {balance}{" "}
                  <span className="font-bold hover:underline cursor-pointer" onClick={handleMaxClick}>
                    MAX
                  </span>
                </div>
                {errorMessage && <p className="text-error text-xs">{errorMessage}</p>}
              </div>

              <div className="container-gray-borders flex flex-col gap-2">
                <label className="font-bold">{t("LendingWithdrawModalTransactionOverview")}</label>
                <div className="flex justify-between items-center text-sm">
                  <span>{t("LendingWithdrawModalTransactionAvailableLiquidity")}</span>
                  <span className="font-bold">
                    {reserve.availableLiquidity
                      ? (() => {
                          const decimals = reserve.decimals ? Number(reserve.decimals) : 18;
                          const supplied = Number(reserve.availableLiquidity) / 10 ** decimals;
                          return supplied.toLocaleString("en-US");
                        })()
                      : "N/A"}
                  </span>
                </div>
              </div>

              <div className="flex justify-between gap-4">
                <button
                  className={`flex-grow-2 basis-2/3 ${isValid ? "primary-btn" : "disabled-btn"}`}
                  onClick={handleWithdrawClick}
                  disabled={!isValid}
                >
                  {t("LendingWithdrawModalButton")}
                </button>
                <button onClick={handleClose} className="secondary-btn flex-grow-1 basis-1/3">
                  {t("LendingWithdrawModalClose")}
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
                {isWithdrawConfirming ? (
                  <>
                    <h2 className="text-base sm:text-lg">Transaction Submitted!</h2>
                    <p className="text-xs sm:text-sm flex items-center justify-center gap-2">
                      <span className="animate-spin">⏳</span>
                      Waiting for confirmation...
                    </p>
                  </>
                ) : isWithdrawConfirmed ? (
                  <>
                    <h2 className="text-base sm:text-lg">{t("LendingWithdrawModalSuccessTitle")}</h2>
                    <p className="text-xs sm:text-sm">{t("LendingWithdrawModalSuccessMessage")}</p>
                  </>
                ) : (
                  <>
                    <h2 className="text-base sm:text-lg">Transaction Submitted!</h2>
                    <p className="text-xs sm:text-sm">Your withdraw transaction has been submitted to the network.</p>
                  </>
                )}
                <div className="pb-3"></div>
                {blockExplorerUrl && (
                  <a href={blockExplorerUrl} target="_blank" rel="noreferrer" className="block link pb-3">
                    Open in Block Explorer
                  </a>
                )}
              </div>
              <button onClick={handleClose} className="primary-btn text-xs sm:text-sm">
                Ok, {t("LendingWithdrawModalClose")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WithdrawTransactionModal;
