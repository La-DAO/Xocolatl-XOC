import React, { useEffect, useState } from "react";
import Image from "next/image";
import { resolveErrorMessage } from "@/app/lending/constants/errors";
import externalContracts from "@/contracts/externalContracts";
import useAccountAddress from "@/hooks/useAccount";
import useBorrow from "@/hooks/useBorrow";
import { useLendingStore } from "@/stores/lending-store";
import { ReserveData } from "@/types/types";
import { toWeiConverter } from "@/utils/toWeiConverter";
import { faClipboardCheck, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Address } from "viem";
import { useChainId, useSimulateContract, useWaitForTransactionReceipt } from "wagmi";
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
  const [simulationError, setSimulationError] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const chainId = useChainId();

  // Hook for handling borrow transactions
  const { handleBorrow, isError: borrowError, error, borrowHash } = useBorrow();

  // Fetch the user's wallet address
  const { address: walletAddress } = useAccountAddress();

  // Transaction simulation
  const {
    data: simulationData,
    error: simulationErrorData,
    refetch: refetchSimulation,
  } = useSimulateContract({
    abi: externalContracts[8453].Pool.abi,
    address: externalContracts[8453].Pool.address,
    functionName: "borrow",
    args: [
      reserve?.underlyingAsset as Address,
      amount && parseFloat(amount) > 0
        ? toWeiConverter(parseFloat(amount), reserve?.decimals ? Number(reserve.decimals) : 18)
        : 0n,
      interestRateMode,
      0, // referralCode
      walletAddress as Address,
    ],
    query: {
      enabled: false, // Don't run automatically
    },
  });

  // Transaction confirmation tracking for borrow
  const {
    isLoading: isBorrowConfirming,
    isSuccess: isBorrowConfirmed,
    data: transactionReceipt,
  } = useWaitForTransactionReceipt({
    hash: borrowHash,
  });

  // Fetch user account data for health factor and LTV
  const { userAccountData, refreshComponents } = useLendingStore();
  console.log("userAccountData", userAccountData);

  // Helper function to calculate how much user can borrow of specific asset
  const calculateUserBorrowableAmount = (reserve: ReserveData) => {
    // CETES is not borrowable, return special indicator
    if (reserve.symbol === "CETES") {
      return "❌";
    }

    if (!userAccountData?.availableBorrowsBase || !reserve.priceInMarketReferenceCurrency) {
      return "0";
    }

    // availableBorrowsBase is in USD (market reference currency)
    const availableBorrowsUSD = Number(userAccountData.availableBorrowsBase) * 1e10; // Convert from base units

    // priceInMarketReferenceCurrency is the price of the asset in USD (with 8 decimals)
    const assetPriceUSD = Number(reserve.priceInMarketReferenceCurrency) / 1e8;

    if (assetPriceUSD === 0) {
      return "0";
    }

    // Calculate how much of this asset the user can borrow
    const borrowableAmount = availableBorrowsUSD / assetPriceUSD;
    const formattedAmount = borrowableAmount.toFixed(6);

    return formattedAmount;
  };

  // Helper function to format user borrowable amount with currency
  const formatUserBorrowableAmount = (reserve: ReserveData) => {
    const borrowableAmount = calculateUserBorrowableAmount(reserve);

    // If it's CETES, return the red cross directly
    if (borrowableAmount === "❌") {
      return "❌";
    }

    // Use the same formatting logic as in the store
    const numBalance = parseFloat(borrowableAmount);
    if (isNaN(numBalance)) return "0";

    switch (reserve.symbol) {
      case "USDC":
      case "USDT":
        return `$${numBalance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      case "WETH":
      case "cbETH":
      case "wstETH":
        return `${numBalance.toLocaleString("en-US", { minimumFractionDigits: 4, maximumFractionDigits: 4 })} ETH`;
      case "XOC":
      case "MXNe":
        return `$${numBalance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN`;
      default:
        return numBalance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 6 });
    }
  };

  const blockExplorerUrl = `${getBlockExplorerUrl(chainId)}${borrowHash}`;

  // Helper function to check if value is max uint256
  const isMaxUint256 = (value: any) => {
    const maxUintStr = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
    return (
      value === maxUintStr ||
      value === "1.157920892373162e+59" ||
      value === Number(maxUintStr) ||
      value === Number("1.157920892373162e+59")
    );
  };

  // Calculate current health factor and LTV
  const currentHealthFactor = userAccountData?.healthFactor
    ? isMaxUint256(userAccountData.healthFactor)
      ? "∞"
      : Number(userAccountData.healthFactor) / 1e18
    : "∞";

  const currentLTV = userAccountData?.ltv ? (Number(userAccountData.ltv) * 1e15).toFixed(2) : "0.00";

  // Helper functions for color coding
  const getHealthFactorColor = (ratio: number | string) => {
    if (ratio === "∞" || isMaxUint256(ratio)) return "text-green-600";
    const numRatio = typeof ratio === "string" ? parseFloat(ratio) : ratio;
    if (numRatio >= 2) return "text-green-600";
    if (numRatio >= 1.5) return "text-yellow-600";
    return "text-red-600";
  };

  const getHealthFactorProgress = (ratio: number | string) => {
    if (ratio === "∞" || isMaxUint256(ratio)) return 100;
    const numRatio = typeof ratio === "string" ? parseFloat(ratio) : ratio;
    return Math.min((numRatio / 3) * 100, 100);
  };

  const getLTVColor = (ltv: number | string) => {
    const numLTV = typeof ltv === "string" ? parseFloat(ltv) : ltv;
    if (numLTV <= 50) return "text-green-600";
    if (numLTV <= 75) return "text-yellow-600";
    return "text-red-600";
  };

  const getProgressBarColor = (value: number | string, type: "health" | "ltv") => {
    if (type === "health") {
      if (value === "∞" || isMaxUint256(value)) return "bg-green-500";
      const numValue = typeof value === "string" ? parseFloat(value) : value;
      if (numValue >= 2) return "bg-green-500";
      if (numValue >= 1.5) return "bg-yellow-500";
      return "bg-red-500";
    } else {
      const numValue = typeof value === "string" ? parseFloat(value) : value;
      if (numValue <= 50) return "bg-green-500";
      if (numValue <= 75) return "bg-yellow-500";
      return "bg-red-500";
    }
  };

  // Helper function to format health factor display
  const formatHealthFactorDisplay = (healthFactor: number | string) => {
    if (healthFactor === "∞" || isMaxUint256(healthFactor)) {
      return (
        <span className="flex items-center gap-1">
          <span>∞</span>
          <span className="text-green-600">✓</span>
        </span>
      );
    }
    return typeof healthFactor === "number" ? healthFactor.toFixed(2) : healthFactor;
  };

  // Effect to handle simulation results
  useEffect(() => {
    if (simulationData) {
      setSimulationError(null);
      setIsSimulating(false);
    } else if (simulationErrorData) {
      // Use the new error resolver
      setSimulationError(resolveErrorMessage(simulationErrorData.message || "Transaction simulation failed"));
      setIsSimulating(false);
    }
  }, [simulationData, simulationErrorData]);

  // Auto-trigger simulation when amount changes
  useEffect(() => {
    if (amount && parseFloat(amount) > 0 && isValid && walletAddress && reserve) {
      setIsSimulating(true);
      setSimulationError(null);
      // Trigger simulation
      refetchSimulation();
    } else {
      setIsSimulating(false);
      setSimulationError(null);
    }
  }, [amount, isValid, walletAddress, reserve, refetchSimulation]);

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

  // Handle transaction confirmation and refresh store data
  useEffect(() => {
    if (isBorrowConfirmed && transactionReceipt) {
      // Transaction confirmed successfully with receipt, wait a bit then refresh all lending data
      const timer = setTimeout(() => {
        refreshComponents();
        console.log("Borrow transaction confirmed with receipt, refreshing lending store data", transactionReceipt);
      }, 2000); // Wait 2 seconds to ensure blockchain state is updated

      return () => clearTimeout(timer);
    }
  }, [isBorrowConfirmed, transactionReceipt, refreshComponents]);

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

    // Parse balance and handle edge cases
    const balanceValue = Math.floor(parseFloat(balance));
    console.log("handleMaxClick - balance:", balance, "balanceValue:", balanceValue);

    if (isNaN(balanceValue) || balanceValue <= 0) {
      console.log("handleMaxClick - Invalid balance, setting to 0");
      setAmount("0");
      return;
    }

    let maxAmount = balanceValue;

    if (borrowCap !== null && borrowCap > 0) {
      maxAmount = Math.min(maxAmount, borrowCap - alreadyBorrowed);
    }

    console.log("handleMaxClick - maxAmount:", maxAmount, "borrowCap:", borrowCap, "alreadyBorrowed:", alreadyBorrowed);

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
    setSimulationError(null);
    setIsSimulating(false);
    onClose(); // Call the original onClose handler
  };

  // Check if borrow button should be disabled
  const isBorrowDisabled = !isValid || isSimulating || !!simulationError;

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
                  {t("LendingBorrowModalBalance")}:{" "}
                  {Number(balance).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 6 })}{" "}
                  <span className="font-bold hover:underline cursor-pointer" onClick={handleMaxClick}>
                    MAX
                  </span>
                </div>
                <div className="text-xs">
                  <span>You Can Borrow: </span>
                  <span className={` ${formatUserBorrowableAmount(reserve) === "❌" ? "text-red-500" : ""}`}>
                    {formatUserBorrowableAmount(reserve)}
                  </span>
                </div>
                {errorMessage && <p className="text-error text-xs">{errorMessage}</p>}
                {simulationError && <p className="text-error text-xs">{simulationError}</p>}
                {isSimulating && <p className="text-blue-600 text-xs">Simulating transaction...</p>}
              </div>

              {/* Health Factor & LTV Visualization */}
              <div className="grid grid-cols-2 gap-3">
                <div className="container-gray-borders flex flex-col gap-2">
                  <div className="flex items-center gap-1">
                    <label className="font-bold text-sm">Health Factor</label>
                    <div className="group relative">
                      <FontAwesomeIcon icon={faInfoCircle} className="text-xs text-gray-400" />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        Higher is safer. Below 1.0 risks liquidation
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">Current</span>
                      <span className={`font-bold ${getHealthFactorColor(currentHealthFactor)}`}>
                        {formatHealthFactorDisplay(currentHealthFactor)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getProgressBarColor(currentHealthFactor, "health")}`}
                        style={{ width: `${getHealthFactorProgress(currentHealthFactor)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="container-gray-borders flex flex-col gap-2">
                  <div className="flex items-center gap-1">
                    <label className="font-bold text-sm">LTV</label>
                    <div className="group relative">
                      <FontAwesomeIcon icon={faInfoCircle} className="text-xs text-gray-400" />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        Loan-to-Value ratio. Lower is safer
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">Current</span>
                      <span className={`font-bold ${getLTVColor(currentLTV)}`}>{currentLTV}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getProgressBarColor(currentLTV, "ltv")}`}
                        style={{ width: `${Math.min(parseFloat(currentLTV), 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
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
                  className={`flex-grow-2 basis-2/3 ${!isBorrowDisabled ? "primary-btn" : "disabled-btn"}`}
                  onClick={handleBorrowClick}
                  disabled={isBorrowDisabled}
                >
                  {isSimulating ? "Simulating..." : t("LendingBorrowModalButton")}
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
                {isBorrowConfirming ? (
                  <>
                    <h2 className="text-base sm:text-lg">Transaction Submitted!</h2>
                    <p className="text-xs sm:text-sm flex items-center justify-center gap-2">
                      <span className="animate-spin">⏳</span>
                      Waiting for confirmation...
                    </p>
                  </>
                ) : isBorrowConfirmed ? (
                  <>
                    <h2 className="text-base sm:text-lg">Borrow Successful!</h2>
                    <p className="text-xs sm:text-sm">Your borrow transaction has been confirmed on the blockchain.</p>
                  </>
                ) : (
                  <>
                    <h2 className="text-base sm:text-lg">Transaction Submitted!</h2>
                    <p className="text-xs sm:text-sm">Your borrow transaction has been submitted to the network.</p>
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
