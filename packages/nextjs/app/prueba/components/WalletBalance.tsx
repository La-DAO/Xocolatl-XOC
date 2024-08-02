import React, { useEffect } from "react";
import { useBalanceOf } from "@/hooks/useBalanceOf";
import { Address } from "viem";

// Define interface for component props
interface Props {
  tokenAddress: Address;
  walletAddress: Address;
  onBalanceChange: (tokenAddress: Address, balance: string) => void;
}

/**
 * React component to display wallet balance for a given token.
 * @param tokenAddress - Ethereum address of the token contract
 * @param walletAddress - Ethereum address of the wallet
 * @param onBalanceChange - Callback function to handle balance change
 */
const WalletBalance: React.FC<Props> = ({ tokenAddress, walletAddress, onBalanceChange }) => {
  const balance = useBalanceOf({ tokenAddress, walletAddress }); // Fetch the token balance using custom hook

  // Effect to handle balance change and trigger the callback
  useEffect(() => {
    onBalanceChange(tokenAddress, balance);
  }, [tokenAddress, balance, onBalanceChange]);

  return <span>{balance}</span>;
};

export default WalletBalance;
