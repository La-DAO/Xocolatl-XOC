import React from "react";

// Defines the porps for amount input component
interface AmountInputProps {
  value: number;
  onChange: (value: number) => void;
  max: number;
  assetSymbol: string;
  walletBalanceConverted?: number; // Make walletBalanceConverted optional
  walletBalance?: number; // Make walletBalance optional
}

/**
 * AmountInput component renders an input field for entering an amount,
 * displaying related information such as asset symbol and wallet balance.
 *
 * @param {AmountInputProps} props - Props containing input properties and handlers.
 * @param {number} props.value - Current value of the input field.
 * @param {Function} props.onChange - Callback function invoked on value change.
 * @param {number} props.max - Maximum value allowed for the input.
 * @param {string} props.assetSymbol - Symbol of the asset being entered (e.g., BTC, ETH).
 * @param {number} [props.walletBalanceConverted=0] - Optional: Converted wallet balance in USD.
 * @param {number} [props.walletBalance=0] - Optional: Wallet balance of the asset.
 */
const AmountInput: React.FC<AmountInputProps> = ({
  value,
  onChange,
  max,
  assetSymbol,
  walletBalanceConverted = 0, // Default to 0 if undefined
  walletBalance = 0, // Default to 0 if undefined
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    onChange(value);
  };

  return (
    <div className="flex flex-col rounded-md gap-1">
      <div className="flex w-full justify-between items-center">
        <input
          type="number"
          value={value}
          onChange={handleChange}
          className="bg-white border rounded-lg p-2 w-2/5"
          min="0"
          max={max}
        />
        <p className="text-xl font-bold">${assetSymbol}</p>
      </div>
      <div className="flex w-full justify-between items-center">
        <span className="text-xs">${walletBalanceConverted} USD</span>
        <p className="text-xs">
          Available Balance {walletBalance} <span className="font-medium">Max</span>
        </p>
      </div>
    </div>
  );
};

export default AmountInput;
