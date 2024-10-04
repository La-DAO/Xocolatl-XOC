// WithdrawModal.tsx
import React, { useEffect, useState } from "react";
import useAccountAddress from "@/hooks/useAccount";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Address, formatEther } from "viem";
import { useReadContract, useWaitForTransactionReceipt } from "wagmi";
import { houseOfReserveABI } from "~~/app/components/abis/houseofreserve";
import { useWithdraw } from "~~/hooks/useWithdrawCDP";

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  assetName: string;
  houseOfReserveContract: string;
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({ isOpen, onClose, assetName, houseOfReserveContract }) => {
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
    status: withdrawStatus,
    error,
    hash,
  } = useWithdraw(houseOfReserveContract as Address);

  const { isLoading: isWithdrawLoading, isSuccess: isWithdrawSuccess } = useWaitForTransactionReceipt({ hash });

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
    if (hash) {
      setData(hash);
    }
  }, [isWithdrawError, hash, error]);

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
        <h2 className="text-xl font-bold mb-4 ml-1">Withdraw {assetName}</h2>
        <p className="mb-4 ml-1">Withdraw {assetName} from House Of Reserve</p>

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
          <span>
            You will need to approve the transaction AND <br /> wait around 5-10 seconds before it goes through
          </span>
        </div>

        {!data && !isError && (
          <div className="flex flex-col gap-6 mt-6">
            <div className="container-gray-borders flex flex-col gap-2">
              <label className="font-bold">Amount</label>
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
              <label className="font-bold">Transaction Overview</label>
              <div className="flex justify-between items-center text-sm">
                <span>You will withdraw:</span>
                <div className="flex items-center gap-1">
                  <span>{amount ? amount : 0}</span>
                  <span className=" font-bold">{assetName}</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <p className="text-xs text-gray-500">Maximum Withdrawal Amount:</p>
                <div className="flex items-center gap-1">
                  <span>{formattedCheckMaxWithdrawal}</span>
                  <span className=" font-bold">{assetName}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-4">
              {isWithdrawLoading ? (
                <div className="flex-grow-2 basis-2/3 bg-warning text-base-100 text-center rounded-lg py-2 cursor-not-allowed">
                  Waiting for withdrawal...
                </div>
              ) : isWithdrawSuccess ? (
                <button
                  className={`flex-grow-2 basis-2/3 ${isValid && !balanceError ? "primary-btn" : "disabled-btn"}`}
                  onClick={onWithdrawClick}
                  disabled={isWithdrawPending || !isValid || balanceError !== null}
                >
                  {isWithdrawPending ? "Processing..." : "Withdraw"}
                </button>
              ) : (
                <button
                  className={`flex-grow-2 basis-2/3 ${isValid && !balanceError ? "primary-btn" : "disabled-btn"}`}
                  onClick={onWithdrawClick}
                  disabled={isWithdrawPending || !isValid || balanceError !== null}
                >
                  {isWithdrawPending ? "Processing..." : "Withdraw"}
                </button>
              )}
              <button onClick={handleClose} className="secondary-btn flex-grow-1 basis-1/3">
                Close
              </button>
            </div>
          </div>
        )}

        {isWithdrawError && (
          <div className="flex flex-col gap-6 mt-6">
            <div className="error-container text-center">
              <p>
                Something went wrong.{" "}
                <span onClick={handleCopyError} className="cursor-pointer underline">
                  Copy the error.
                </span>
                {showSuccessIcon && <FontAwesomeIcon icon={faClipboardCheck} className="text-lg ml-2" />}
              </p>
            </div>
            <button onClick={handleClose} className="primary-btn">
              Close
            </button>
          </div>
        )}

        {data && (
          <div className="flex flex-col gap-6 mt-6">
            <div className="success-container text-center">
              <h2>All done!</h2>
              <p>Withdrawal transaction successful</p>
              {hash && <div>Transaction Hash: {hash}</div>}
              {withdrawStatus && <div>Withdrawal Status: {withdrawStatus}</div>}
            </div>
            <button onClick={handleClose} className="primary-btn">
              Ok, close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WithdrawModal;
