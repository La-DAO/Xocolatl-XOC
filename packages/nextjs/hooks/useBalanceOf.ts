import { useEffect, useState } from "react";
import { Address } from "viem";
import { useReadContract } from "wagmi";

// Define the ERC-20 ABI for balanceOf and decimals functions
const ERC20ABI = [
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

// Define the interface for TokenBalanceProps
interface TokenBalanceProps {
  tokenAddress: Address;
  walletAddress: Address;
}

/**
 * Custom hook to fetch the balance of a token for a given wallet address.
 * @param tokenAddress - Ethereum address of the token contract
 * @param walletAddress - Ethereum address of the wallet
 * @returns Token balance formatted as a string
 */
export function useBalanceOf({ tokenAddress, walletAddress }: TokenBalanceProps) {
  const [balance, setBalance] = useState<string>("0"); // State to store the balance
  const [decimals, setDecimals] = useState<number>(18); // Default to 18 decimals

  // Hook to read the balance from the contract
  const {
    data: balanceData,
    isError: balanceError,
    isLoading: balanceLoading,
  } = useReadContract({
    address: tokenAddress,
    abi: ERC20ABI,
    functionName: "balanceOf",
    args: [walletAddress],
  });

  // Hook to read the decimals from the contract
  const {
    data: decimalsData,
    isError: decimalsError,
    isLoading: decimalsLoading,
  } = useReadContract({
    address: tokenAddress,
    abi: ERC20ABI,
    functionName: "decimals",
  });

  // Effect to handle updates to data, error, and loading state
  useEffect(() => {
    if (decimalsData) {
      setDecimals(Number(decimalsData)); // Set the decimals from the contract
    }

    if (balanceError || decimalsError) {
      console.error("Error fetching balance or decimals");
      setBalance("0"); // Set balance to 0 on error
    } else if (!balanceLoading && balanceData) {
      const balanceInEther = (Number(balanceData) / 10 ** decimals).toFixed(7); // Convert balance using decimals
      setBalance(balanceInEther === "0.0000000" ? "0" : balanceInEther); // Set formatted balance
    }
  }, [balanceData, balanceError, balanceLoading, decimalsData, decimalsError, decimalsLoading, decimals]);

  return balance;
}
