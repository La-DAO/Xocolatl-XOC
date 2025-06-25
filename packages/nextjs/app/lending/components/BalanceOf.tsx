import React, { useEffect } from "react";
import { useBalanceOf } from "@/hooks/useBalanceOf";
import { Address } from "viem";

// Define interface for component props
interface Props {
  tokenAddress: Address;
  walletAddress: Address;
  onBalanceChange: (tokenAddress: Address, balance: string) => void;
  formatDisplay?: (balance: string) => string;
}

/**
 * React component to display wallet balance for a given token.
 * @param tokenAddress - Ethereum address of the token contract
 * @param walletAddress - Ethereum address of the wallet
 * @param onBalanceChange - Callback function to handle balance change
 * @param formatDisplay - Optional function to format the display of the balance
 */
const BalanceOf: React.FC<Props> = ({ tokenAddress, walletAddress, onBalanceChange, formatDisplay }) => {
  const balance = useBalanceOf({ tokenAddress, walletAddress }); // Fetch the token balance using custom hook

  // Effect to handle balance change and trigger the callback
  useEffect(() => {
    onBalanceChange(tokenAddress, balance);
  }, [tokenAddress, balance, onBalanceChange]);

  // Format the display if a formatDisplay function is provided
  const displayBalance = formatDisplay ? formatDisplay(balance) : balance;

  return <span>{displayBalance}</span>;
};

export default BalanceOf;
