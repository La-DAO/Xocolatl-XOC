// DepositModal.tsx
import React, { useCallback, useEffect, useState } from "react";
import BalanceOf from "@/app/lending/components/BalanceOf";
import useAccountAddress from "@/hooks/useAccount";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Address } from "viem";
import { useReadContract, useWriteContract } from "wagmi";
import { ERC20ABI } from "~~/app/components/abis/erc20";
import { useBalanceOf } from "~~/hooks/useBalanceOf";
import { useDeposit } from "~~/hooks/useDeposit";

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
  assetName: string;
  houseOfReserveContract: string;
  assetContract: string | null;
  deposit: (amount: string) => void;
}

const DepositModal: React.FC<DepositModalProps> = ({
  isOpen,
  onClose,
  assetName,
  houseOfReserveContract,
  assetContract,
}) => {
  const [amount, setAmount] = useState("");
  const { address: walletAddress } = useAccountAddress();
  const [balances, setBalances] = useState<Record<string, string>>({});
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState<any>(null);
  const [isError, setIsError] = useState(false);
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);
  const [balanceError, setBalanceError] = useState<string | null>(null);
  const [assetAllowanceState, setAssetAllowanceState] = useState<string>("0");
  // State to track if approval is needed
  const [requiresApproval, setRequiresApproval] = useState(false);

  const { writeContract: approveERC20, isError: isApprovalError, isPending: isApprovalPending } = useWriteContract();

  const assetBalance = useBalanceOf({
    tokenAddress: assetContract as Address,
    walletAddress: walletAddress as Address,
  });

  // Hook to read the asset contract allowance
  const {
    data: assetAllowance,
    isError: isAssetAllowanceError,
    isLoading: isAssetAllowanceLoading,
  } = useReadContract({
    address: assetContract as Address,
    abi: ERC20ABI,
    functionName: "allowance",
    args: [walletAddress, houseOfReserveContract], // Only pass the address
  });

  useEffect(() => {
    if (isAssetAllowanceError) {
      console.error("Error fetching allowance");
      setAssetAllowanceState("0");
    } else if (!isAssetAllowanceLoading && assetAllowance) {
      const allowanceInEther = (Number(assetAllowance) / 1e18).toFixed(7);
      setAssetAllowanceState(allowanceInEther);
    }
  }, [assetAllowance, isAssetAllowanceError, isAssetAllowanceLoading]);

  const {
    deposit: handleDeposit,
    isPending: isDepositPending,
    isError: isDepositError,
    status: depositStatus,
    error,
    depositHash,
  } = useDeposit(houseOfReserveContract as Address);

  useEffect(() => {
    const assetAmount = parseFloat(amount) || 0;
    if (assetBalance && assetAmount > parseFloat(assetBalance)) {
      setBalanceError("You don't have enough tokens in your wallet");
    } else {
      setBalanceError(null); // Clear error if valid
    }
  }, [amount, assetBalance]);

  useEffect(() => {
    // Function to check if approval is required
    const checkIfApprovalNeeded = () => {
      const assetAmount = parseFloat(amount) || 0;

      // Compare the input value against the allowance state
      const needsApproval = assetAmount > parseFloat(assetAllowanceState);
      setRequiresApproval(needsApproval);
    };

    checkIfApprovalNeeded();
  }, [amount, assetAllowanceState]);

  useEffect(() => {
    if (isDepositError) {
      setIsError(true);
      setErrorMessage(error?.message || "An unknown error occurred.");
    }
    if (depositHash) {
      setData(depositHash);
    }
  }, [isDepositError, depositHash, error]);

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

  const handleApproval = async () => {
    const assetAmount = parseFloat(amount) || 0;

    try {
      if (assetAmount > parseFloat(assetAllowanceState)) {
        await approveERC20({
          abi: ERC20ABI,
          address: assetContract as Address,
          functionName: "approve",
          args: [houseOfReserveContract, assetAmount * 1e18],
        });
      }
    } catch (error) {
      console.error("Error approving", error);
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

  console.log(balances);
  console.log(walletAddress);

  /*   const onApproveClick = () => {
    approve(amount);
  }; */

  const onDepositClick = () => {
    handleDeposit(amount);
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

  const handleMaxClick = () => {
    setAmount(assetBalance || "");
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
  console.log("assetContract", assetContract as Address);
  console.log({ isApprovalError });
  console.log("Allowance in Ethers:", assetAllowanceState);
  console.log({ assetAllowanceState, requiresApproval });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 dark:text-primary w-full max-w-md sm:max-w-lg md:max-w-2xl mx-4">
        <h2 className="text-lg sm:text-xl font-bold mb-4 ml-1">Deposit {assetName}</h2>
        <p className="mb-4 ml-1 text-sm sm:text-base">Deposit {assetName} to House Of Reserve</p>

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
            You will need to approve the transaction AND <br /> wait around 5-10 seconds before it goes through
          </span>
        </div>

        {!data && !isError && (
          <div className="flex flex-col gap-6 mt-6">
            <div className="container-gray-borders flex flex-col gap-2">
              <label className="font-bold text-sm sm:text-base">Amount</label>
              <div className="flex items-center">
                <input
                  type="number"
                  className="without-borders w-full text-sm sm:text-base"
                  placeholder="0.00"
                  value={amount}
                  onChange={handleChange}
                />
                <span className="font-bold ml-2">{assetName}</span>
              </div>
              <span
                className="font-bold hover:underline cursor-pointer text-sm sm:text-base mt-2"
                onClick={handleMaxClick}
              >
                MAX
              </span>
              {balanceError && <p className="text-xs text-red-600 ml-2">{balanceError}</p>}
              {errorMessage && <p className="text-error text-xs">{errorMessage}</p>}
            </div>

            <div className="container-gray-borders flex flex-col gap-2">
              <label className="font-bold text-sm sm:text-base">Transaction Overview</label>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span>You will deposit:</span>
                <div className="flex items-center gap-1">
                  <span>{amount ? amount : 0}</span>
                  <span className="font-bold">{assetName}</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <p className="text-xs text-gray-500">Wallet Balance:</p>
                <div className="flex items-center gap-1">
                  <BalanceOf
                    tokenAddress={assetContract as Address}
                    walletAddress={walletAddress as Address}
                    onBalanceChange={handleBalanceChange}
                  />
                  <span className="font-bold">{assetName}</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <p className="text-xs text-gray-500">Allowance:</p>
                <div className="flex items-center gap-1">
                  <span>{assetAllowanceState}</span>
                  <span className="font-bold">{assetName}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {requiresApproval ? (
                <button
                  className={`flex-grow sm:basis-2/3 ${!isApprovalPending ? "primary-btn" : "disabled-btn"}`}
                  onClick={handleApproval}
                  disabled={isApprovalPending || !requiresApproval}
                >
                  {isApprovalPending ? "Processing..." : "Approve"}
                </button>
              ) : (
                // Show Deposit button if no approval is needed or approval is already done
                <button
                  className={`flex-grow sm:basis-2/3 ${isValid && !balanceError ? "primary-btn" : "disabled-btn"}`}
                  onClick={onDepositClick}
                  disabled={isDepositPending || !isValid || balanceError !== null}
                >
                  {isDepositPending ? "Processing..." : "Deposit"}
                </button>
              )}
              <button onClick={handleClose} className="secondary-btn flex-grow sm:basis-1/3">
                Close
              </button>
            </div>
          </div>
        )}

        {isDepositError && (
          <div className="flex flex-col gap-6 mt-6">
            <div className="error-container text-center">
              <p className="text-xs sm:text-sm">
                Something went wrong.{" "}
                <span onClick={handleCopyError} className="cursor-pointer underline">
                  Copy the error.
                </span>
                {showSuccessIcon && <FontAwesomeIcon icon={faClipboardCheck} className="text-lg ml-2" />}
              </p>
            </div>
            <button onClick={handleClose} className="primary-btn text-xs sm:text-sm">
              Close
            </button>
          </div>
        )}

        {data && (
          <div className="flex flex-col gap-6 mt-6">
            <div className="success-container text-center">
              <h2 className="text-base sm:text-lg">All done!</h2>
              <p className="text-xs sm:text-sm">Deposit transaction successful</p>
              {depositHash && <div className="text-xs sm:text-sm">Transaction depositHash: {depositHash}</div>}
              {depositStatus && <div className="text-xs sm:text-sm">Deposit Status: {depositStatus}</div>}
            </div>
            <button onClick={handleClose} className="primary-btn text-xs sm:text-sm">
              Ok, close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepositModal;
