import React, { useEffect, useState } from "react";
import useAccountAddress from "@/hooks/useAccount";
import useSupply from "@/hooks/useSupply";
import { ReserveData } from "@/types/types";
import { Address } from "viem";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  reserve: ReserveData | null;
  balance: string;
}

/**
 * Converts an amount to its equivalent value in wei.
 * @param {number} amount - The amount to convert.
 * @param {number} [decimals=18] - The number of decimals used for conversion.
 * @returns {BigInt} - The equivalent value in wei.
 */
function toWei(amount: number, decimals: number = 18): BigInt {
  return BigInt(Math.round(amount * Math.pow(10, decimals)));
}

const SupplyTransactionModal: React.FC<ModalProps> = ({ isOpen, onClose, reserve, balance }) => {
  // State management for the amount to be supplied, validity check, and error messages
  const [amount, setAmount] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Hook for handling supply transactions
  const { handleSupply, isError, error, data } = useSupply();

  // Fetch the user's wallet address
  const { address: walletAddress } = useAccountAddress();

  useEffect(() => {
    validateAmount(amount);
  }, [amount]);

  /**
   * Validates the input amount for supply.
   * @param {string} value - The amount input value.
   */
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
    setAmount(balance);
  };

  /**
   * Handles the supply button click event.
   */
  const handleSupplyClick = () => {
    if (walletAddress) {
      try {
        const amountInWei = toWei(parseFloat(amount)); // Assuming 18 decimals, adjust if different
        handleSupply(reserve!.underlyingAsset as Address, amountInWei, walletAddress as Address);
      } catch (err) {
        console.error("Error converting amount to BigInt:", err);
      }
    } else {
      console.error("User wallet address is not available.");
    }
  };

  // Return null if the modal is not open or if the reserve data is not available
  if (!isOpen || !reserve) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-md w-96 relative">
        <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Supply {reserve.symbol}</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <div className="flex items-center mt-1">
            <input
              type="number"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="0.00"
              value={amount}
              onChange={handleChange}
            />
            <span className="ml-2 text-gray-500">{reserve.symbol}</span>
          </div>
          <div className="text-sm text-gray-500 mt-1">
            Wallet balance: {balance}{" "}
            <button className="text-indigo-600 hover:underline" onClick={handleMaxClick}>
              MAX
            </button>
          </div>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>
        <div className="mb-4 border-2 border-gray-100 rounded-lg p-4">
          <h3 className="text-lg font-medium text-gray-900">Transaction overview</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500">Supply APY</span>
            <span className="text-sm font-medium text-gray-900">
              {(Number(reserve.liquidityRate) / 1e25).toFixed(2)}%
            </span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500">Collateralization</span>
            <span
              className={`text-sm font-medium ${reserve.usageAsCollateralEnabled ? "text-green-600" : "text-red-600"}`}
            >
              {reserve.usageAsCollateralEnabled ? "Enabled" : "Disabled"}
            </span>
          </div>
        </div>
        <button
          className={`w-full px-3 py-1 rounded-md ${
            isValid ? "bg-accent text-white" : "bg-gray-100 text-gray-300 cursor-not-allowed"
          }`}
          onClick={handleSupplyClick}
          disabled={!isValid}
        >
          Supply
        </button>
        {isError && <p className="text-red-500 mt-2">Error: {error?.message}</p>}
      </div>
    </div>
  );
};

export default SupplyTransactionModal;
