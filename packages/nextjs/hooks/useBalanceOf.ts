import { useEffect, useState } from "react";
import { Address } from "viem";
import { useReadContract } from "wagmi";

// Define the ERC-20 ABI (Application Binary Interface) for the balanceOf function
const ERC20ABI = [
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }], // Input parameter: owner address
    name: "balanceOf", // Function name: balanceOf
    outputs: [{ name: "balance", type: "uint256" }], // Output parameter: balance as uint256
    payable: false,
    stateMutability: "view", // Function state mutability: view (read-only)
    type: "function", // Type: function
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

  // Hook to read contract data using wagmi
  const { data, isError, isLoading } = useReadContract({
    address: tokenAddress,
    abi: ERC20ABI,
    functionName: "balanceOf",
    args: [walletAddress],
  });

  // Effect to handle updates to data, error, and loading state
  useEffect(() => {
    if (isError) {
      console.error("Error fetching balance"); // Log error if fetching fails
      setBalance("0"); // Set balance to 0 on error
    } else if (!isLoading && data) {
      const balanceInEther = (Number(data) / 1e18).toFixed(7); // Convert balance to Ether
      setBalance(balanceInEther === "0.0000000" ? "0" : balanceInEther); // Set formatted balance
    }
  }, [data, isError, isLoading]); // Dependencies: data, isError, isLoading

  return balance; // Return the balance
}
