import React, { useState, useEffect } from "react";
import useMint from "@/hooks/useMint";
import { Address } from "viem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";


interface MintModalProps {
  isOpen: boolean;
  onClose: () => void;
  assetName: string;
  houseOfReserveContract: Address;
  assetContract: Address;
  houseOfCoinContract: Address;
  assetsAccountantContract: Address;
}

const MintModal: React.FC<MintModalProps> = ({
  isOpen,
  onClose,
  assetName,
  houseOfReserveContract,
  assetContract,
  houseOfCoinContract,
  assetsAccountantContract,
}) => {
  const [amount, setAmount] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState<any>(null);
  const [isError, setIsError] = useState(false);
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);

  const { handleMint, isError: mintError, error, hash } = useMint();

  useEffect(() => {
    validateAmount(amount);
  }, [amount]);

  useEffect(() => {
    if (mintError) {
      setIsError(true);
      setErrorMessage(error?.message || "An unknown error occurred.");
    }
    if (hash) {
      setData(hash);
    }
  }, [mintError, hash, error]);

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

  const handleMintClick = () => {
    if (amount) {
      try {
        handleMint(houseOfCoinContract, assetContract, houseOfReserveContract, amount);
      } catch (err) {
        console.error("Error during handleMint execution:", err);
      }
    } else {
      console.error("Amount is not valid.");
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Mint $XOC</h2>
        <p className="mb-4">Reserve Asset: {assetName}</p>
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
          <span>Here I can warn you about an important fact about minting $XOC</span>
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
                <span className="font-bold">$XOC</span>
              </div>
              {errorMessage && <p className="text-error text-xs">{errorMessage}</p>}
            </div>
            <div className="container-gray-borders flex flex-col gap-2">
              <label className="font-bold">Transaction Overview</label>
              <div className="flex justify-between items-center text-sm">
                <span>Mint Amount</span>
                <span className="font-bold">{amount ? amount : 0} $XOC</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>House Of Reserve Address:</span>
                <span>{houseOfReserveContract}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>House Of Coin Address:</span>
                <span>{houseOfCoinContract}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Assets Accountant Address:</span>
                <span>{assetsAccountantContract}</span>
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <button
                className={`flex-grow-2 basis-2/3 ${isValid ? "primary-btn" : "disabled-btn"}`}
                onClick={handleMintClick}
                disabled={!isValid}
              >
                Mint
              </button>
              <button onClick={handleClose} className="secondary-btn flex-grow-1 basis-1/3">
                Cancel
              </button>
            </div>
          </div>
        )}
        {isError && (
          <div className="flex flex-col gap-6 mt-6">
            <div className="error-container text-center">
              <p>
                You cancelled the transaction.{" "}
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
              <h2 className="">All done!</h2>
              <p>Minting transaction successful</p>
              {hash && <div>Transaction Hash: {hash}</div>}
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

export default MintModal;