import React, { useEffect } from "react";
import { useAllowance } from "@/hooks/useAllowance";
import { Address } from "viem";

// Define the Props interface for the Allowance component
interface Props {
  tokenAddress: Address;
  ownerAddress: Address;
  spenderAddress: Address;
  onAllowanceChange: (tokenAddress: Address, allowance: string) => void;
}

/**
 * React component to display the allowance of an ERC20 token.
 *
 * @param {Props} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
const Allowance: React.FC<Props> = ({ tokenAddress, ownerAddress, spenderAddress, onAllowanceChange }) => {
  // Use the custom hook to get the current allowance
  const allowance = useAllowance({ tokenAddress, ownerAddress, spenderAddress });

  // Effect hook to handle changes in allowance
  useEffect(() => {
    if (onAllowanceChange) {
      // Call the callback function with the new allowance value
      onAllowanceChange(tokenAddress, allowance);
    }
  }, [tokenAddress, allowance, onAllowanceChange]);

  return <span>{allowance}</span>;
};

export default Allowance;
