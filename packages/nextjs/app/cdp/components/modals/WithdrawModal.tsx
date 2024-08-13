// WithdrawModal.tsx
import React, { useCallback, useEffect, useState } from "react";
import BalanceOf from "@/app/lending/components/BalanceOf";
import useAccountAddress from "@/hooks/useAccount";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Address } from "viem";
import { useWithdraw } from "~~/hooks/useWithdrawCDP";

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  assetName: string;
  houseOfReserveContract: string;
  assetContract: string;
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({
  isOpen,
  onClose,
  assetName,
  houseOfReserveContract,
  assetContract,
}) => {
  const [amount, setAmount] = useState("");
  const { address: walletAddress } = useAccountAddress();
  const [, setBalances] = useState<Record<string, string>>({});
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState<any>(null);
  const [isError, setIsError] = useState(false);
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);

  const {
    withdraw,
    isError: isWithdrawError,
    isPending: isWithdrawPending,
    status: withdrawStatus,
    error,
    hash,
  } = useWithdraw(houseOfReserveContract as Address);

  useEffect(() => {
    validateAmount(amount);
  }, [amount]);

  useEffect(() => {
    if (isWithdrawError) {
      setIsError(true);
      setErrorMessage(error?.message || "An unknown error occurred.");
    }
    if (hash) {
      setData(hash);
    }
  }, [isWithdrawError, hash, error]);

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

  /**
   * Callback function to handle balance change.
   * Updates the state with new balances.
   */
  const handleBalanceChange = useCallback((tokenAddress: Address, balance: string) => {
    setBalances(prevBalances => ({ ...prevBalances, [tokenAddress]: balance }));
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
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
                <p className="text-xs text-gray-500">Wallet Balance:</p>
                <div className="flex items-center gap-1">
                  <BalanceOf
                    tokenAddress={assetContract as Address}
                    walletAddress={walletAddress as Address}
                    onBalanceChange={handleBalanceChange}
                  />
                  <span className=" font-bold">{assetName}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-4">
              <button
                className={`flex-grow-2 basis-2/3 ${isValid ? "primary-btn" : "disabled-btn"}`}
                onClick={onWithdrawClick}
                disabled={isWithdrawPending}
              >
                {isWithdrawPending ? "Processing..." : "Withdraw"}
              </button>
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
