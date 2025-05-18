import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ERC20ABI } from "@/app/components/abis/erc20";
import CONFIG from "@/config";
import useAccountAddress from "@/hooks/useAccount";
import useSupply from "@/hooks/useSupply";
import { ReserveData } from "@/types/types";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Address, parseEther } from "viem";
import { useChainId, useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useTranslation } from "~~/app/context/LanguageContext";
import { getBlockExplorerUrl } from "~~/app/utils/utils";
import { useBalanceOf } from "~~/hooks/useBalanceOf";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  reserve: ReserveData | null;
  balance: string;
}

/**
 * Modal component for handling supply transactions.
 * @param {boolean} isOpen - Whether the modal is open or not.
 * @param {() => void} onClose - Function to call when the modal is closed.
 * @param {ReserveData | null} reserve - The reserve data to supply to.
 * @param {string} balance - The wallet balance as a string.
 * @returns {JSX.Element | null} - The modal component or null if not open.
 */
const SupplyTransactionModal: React.FC<ModalProps> = ({ isOpen, onClose, reserve, balance }) => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [balanceError, setBalanceError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);
  const [isError, setIsError] = useState(false);
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);
  const chainId = useChainId();
  const [requiresApproval, setRequiresApproval] = useState(false);
  const [assetAllowanceState, setAssetAllowanceState] = useState("0");
  const {
    writeContract: approveERC20,
    isError: isApprovalError,
    isPending: isApprovalPending,
    data: hash,
  } = useWriteContract();
  /*  const {
    approve,
    isError: approveError,
    isSuccess: approveSuccess,
    isPending: approvePending,
    hash,
  } = useApproval(CONFIG.POOL, reserve?.underlyingAsset as Address); */
  const { isLoading: isApprovalLoading, isSuccess: isApprovalSuccess } = useWaitForTransactionReceipt({ hash });

  const { handleSupply, isError: supplyError, error, supplyHash } = useSupply();
  const { address: walletAddress } = useAccountAddress();

  const assetBalance = useBalanceOf({
    tokenAddress: reserve?.underlyingAsset as Address,
    walletAddress: walletAddress as Address,
  });

  const {
    data: assetAllowance,
    isError: isAssetAllowanceError,
    isLoading: isAssetAllowanceLoading,
    refetch: refetchAllowance,
  } = useReadContract({
    address: reserve?.underlyingAsset as Address,
    abi: ERC20ABI,
    functionName: "allowance",
    args: [walletAddress, CONFIG.POOL], // Only pass the address
  });

  useEffect(() => {
    if (isAssetAllowanceError) {
      console.error("Error fetching allowance");
      setAssetAllowanceState("0");
    } else if (!isAssetAllowanceLoading && assetAllowance) {
      const allowanceInEther = (Number(assetAllowance) / 1e18).toFixed(7);
      setAssetAllowanceState(allowanceInEther);

      // Log the allowance value
      console.log("User's allowance:", allowanceInEther);
    }
  }, [assetAllowance, isAssetAllowanceError, isAssetAllowanceLoading]);

  useEffect(() => {
    const assetAmount = parseFloat(amount) || 0;
    if (assetBalance && assetAmount > parseFloat(assetBalance)) {
      setBalanceError("You don't have enough tokens in your wallet");
    } else {
      setBalanceError(null); // Clear error if valid
    }
  }, [amount, assetBalance]);

  useEffect(() => {
    const checkIfApprovalNeeded = () => {
      const assetAmount = parseFloat(amount) || 0;
      const needsApproval = assetAmount > parseFloat(assetAllowanceState);
      setRequiresApproval(needsApproval);
    };

    checkIfApprovalNeeded();
  }, [amount, assetAllowanceState]);

  useEffect(() => {
    if (supplyError) {
      setIsError(true);
      setErrorMessage(error?.message || "An unknown error occurred during the supply transaction.");
    } else if (supplyHash) {
      setData(supplyHash);
      setShowSuccessIcon(true);
    }
  }, [supplyError, supplyHash, error]);

  useEffect(() => {
    const assetAmount = parseFloat(amount) || 0;

    if (assetAmount <= 0 || isNaN(assetAmount)) {
      setBalanceError(null); // Clear balance-related errors if amount is invalid
      setErrorMessage("Amount must be a positive number.");
      setIsValid(false);
    } else if (assetBalance && assetAmount > parseFloat(assetBalance)) {
      setBalanceError("You don't have enough tokens in your wallet");
      setErrorMessage(""); // Clear the positive number error if balance error exists
      setIsValid(false);
    } else {
      setBalanceError(null); // Clear any balance-related errors
      setErrorMessage(""); // Clear other error messages
      setIsValid(true);
    }
  }, [amount, assetBalance]);

  useEffect(() => {
    if (isApprovalSuccess) {
      refetchAllowance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isApprovalSuccess]);

  const handleApproval = async () => {
    const assetAmount = parseFloat(amount) || 0;

    try {
      if (assetAmount > parseFloat(assetAllowanceState) && walletAddress) {
        const decimals = Number(reserve?.decimals);
        let adjustedAmount = assetAmount;

        // Adjust the amount if decimals are less than 18
        if (decimals < 18) {
          const factor = Math.pow(10, 18 - decimals);
          adjustedAmount = assetAmount / factor; // Keep as a number for compatibility with toWeiConverter
        }

        // Convert the adjusted amount to the appropriate format for the contract
        const amountInWei = parseEther(adjustedAmount.toString());

        console.log("Attempting to approveERC20:", {
          address: reserve?.underlyingAsset,
          abi: ERC20ABI,
          functionName: "approve",
          args: [CONFIG.POOL, BigInt(amountInWei)],
        });

        // Call the approveERC20 function
        await approveERC20({
          address: reserve?.underlyingAsset as Address,
          abi: ERC20ABI,
          functionName: "approve",
          args: [CONFIG.POOL as Address, BigInt(amountInWei)],
        });

        console.log("Approval successful");
      }
    } catch (error) {
      console.error("Error approving", error);
      setErrorMessage("Failed to approve tokens. Please try again.");
    }
  };

  const handleSupplyClick = async () => {
    if (requiresApproval) {
      await handleApproval();
    } else {
      handleSupply(reserve?.underlyingAsset as Address, parseEther(amount), walletAddress as Address);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
    refetchAllowance();
  };

  const handleCopyError = () => {
    if (error?.message) {
      navigator.clipboard
        .writeText(error.message)
        .then(() => {
          // Handle success if needed
        })
        .catch(err => {
          console.error("Failed to copy error message: ", err);
        });
    }
  };

  const handleMaxClick = () => {
    setAmount(assetBalance || "");
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
    refetchAllowance();
    onClose();
  };

  const blockExplorerUrl = `${getBlockExplorerUrl(chainId)}${supplyHash}`;

  if (!isOpen || !reserve) {
    return null;
  }

  return (
    <div className="modal-blur-background">
      <div className="modal-container general-text-color flex flex-col gap-6">
        <h2>
          {t("LendingSupplyModalTitle")} {reserve.symbol}
        </h2>
        <div className="table-border-top">
          {!data && !isError && (
            <div className="flex flex-col gap-6 mt-6">
              <div className="container-gray-borders flex flex-col gap-2">
                <label className="font-bold">{t("LendingSupplyModalLabel")}</label>
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
                <div className="flex justify-between items-center text-sm">
                  <span>Wallet allowance</span>
                  <span className="font-bold">
                    {assetAllowanceState} {reserve.symbol}
                  </span>
                </div>
                <div className="text-xs">
                  {t("LendingSupplyModalBalance")}: {balance}{" "}
                  <span className="font-bold hover:underline cursor-pointer" onClick={handleMaxClick}>
                    MAX
                  </span>
                </div>
                {balanceError && <p className="text-error text-xs">{balanceError}</p>}
                {errorMessage && <p className="text-error text-xs">{errorMessage}</p>}
              </div>
              <div className="container-gray-borders flex flex-col gap-2">
                <label className="font-bold">{t("LendingSupplyModalTransactionOverview")}</label>
                <div className="flex justify-between items-center text-sm">
                  <span>{t("LendingSupplyModalTransactionSupplyAPY")}</span>
                  <span className="font-bold">{(Number(reserve.liquidityRate) / 1e25).toFixed(2)}%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>{t("LendingSupplyModalTransactionCollateral")}</span>
                  <span
                    className={`text-sm font-medium ${
                      reserve.usageAsCollateralEnabled ? "text-success" : "text-error"
                    }`}
                  >
                    {reserve.usageAsCollateralEnabled ? "Enabled" : "Disabled"}
                  </span>
                </div>
              </div>
              <div className="flex justify-between gap-4">
                {requiresApproval ? (
                  isApprovalLoading ? (
                    <div className="flex-grow-2 basis-2/3 bg-warning text-base-100 text-center rounded-lg py-2 cursor-not-allowed">
                      Waiting for approval...
                    </div>
                  ) : isApprovalSuccess ? (
                    <button
                      className={`flex-grow-2 basis-2/3 ${isValid ? "primary-btn" : "disabled-btn"}`}
                      onClick={handleSupplyClick}
                      disabled={!isValid || isApprovalPending}
                    >
                      {isApprovalPending ? "Processing..." : t("LendingSupplyModalApprove")}
                    </button>
                  ) : (
                    <button
                      className={`flex-grow-2 basis-2/3 ${isValid ? "primary-btn" : "disabled-btn"}`}
                      onClick={handleApproval}
                      disabled={!isValid || isApprovalPending}
                    >
                      {isApprovalPending ? "Processing..." : t("LendingSupplyModalApprove")}
                    </button>
                  )
                ) : (
                  <button
                    className={`flex-grow-2 basis-2/3 ${isValid ? "primary-btn" : "disabled-btn"}`}
                    onClick={handleSupplyClick}
                    disabled={!isValid}
                  >
                    {t("LendingSupplyModalButton")}
                  </button>
                )}
                <button onClick={handleClose} className="secondary-btn flex-grow-1 basis-1/3">
                  {t("LendingSupplyModalClose")}
                </button>
              </div>
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
                <h2 className="text-base sm:text-lg">{t("LendingWithdrawModalSuccessTitle")}</h2>
                <p className="text-xs sm:text-sm">{t("LendingSupplyModalSuccessMessage")}</p>
                <div className="pb-3"></div>
                {blockExplorerUrl && (
                  <a href={blockExplorerUrl} target="_blank" rel="noreferrer" className="block link pb-3">
                    Open in Block Explorer
                  </a>
                )}
              </div>
              <button onClick={handleClose} className="primary-btn">
                Ok, {t("LendingSupplyModalClose")}
              </button>
            </div>
          )}
          {isApprovalError && (
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
          {isError && !isApprovalError && (
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

export default SupplyTransactionModal;
