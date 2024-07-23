import { useEffect, useState } from "react";
import { useReadContract } from "wagmi";

// Define the ABI for the ERC20 allowance function
const ERC20ABI = [
  {
    constant: true,
    inputs: [
      { name: "_owner", type: "address" }, // Owner address input
      { name: "_spender", type: "address" }, // Spender address input
    ],
    name: "allowance",
    outputs: [{ name: "remaining", type: "uint256" }], // Allowance output
    payable: false,
    stateMutability: "view", // View state mutability
    type: "function",
  },
];

// Define the interface for the AllowanceProps
interface AllowanceProps {
  tokenAddress: `0x${string}`; // Token address in string format
  ownerAddress: `0x${string}`; // Owner address in string format
  spenderAddress: `0x${string}`; // Spender address in string format
}

/**
 * Custom hook to fetch and manage the allowance of an ERC20 token.
 *
 * @param {AllowanceProps} props - The token, owner, and spender addresses.
 * @returns {string} - The allowance amount in ether.
 */
export function useAllowance({ tokenAddress, ownerAddress, spenderAddress }: AllowanceProps) {
  const [allowance, setAllowance] = useState<string>("0"); // State to store the allowance amount

  // Use the useReadContract hook to read the allowance from the contract
  const { data, isError, isLoading } = useReadContract({
    address: tokenAddress,
    abi: ERC20ABI,
    functionName: "allowance",
    args: [ownerAddress, spenderAddress],
  });

  // Effect hook to handle data, error, and loading states
  useEffect(() => {
    if (isError) {
      console.error("Error fetching allowance"); // Log error if there's an issue fetching allowance
      setAllowance("0"); // Set allowance to 0 in case of error
    } else if (!isLoading && data) {
      const allowanceInEther = (Number(data) / 1e18).toFixed(7); // Convert allowance to ether and format
      setAllowance(allowanceInEther === "0.000000000000000000" ? "0" : allowanceInEther); // Update state with allowance
    }
  }, [data, isError, isLoading]); // Dependency array for the effect

  return allowance; // Return the allowance value
}
