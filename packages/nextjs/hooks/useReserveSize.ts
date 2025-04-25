import { useEffect, useState } from "react";
import { formatUnits } from "viem";
import { useReadContract } from "wagmi";
import { ERC20ABI } from "~~/app/components/abis/erc20";

/**
 * Custom hook to fetch the total supply of an aToken (Reserve Size).
 * Assumes 18 decimals unless otherwise specified.
 *
 * @param aTokenAddress - Address of the aToken contract
 * @param decimals - Optional number of decimals (default: 18)
 * @returns {Object} - Formatted reserve size, loading and error states
 */
const useReserveSize = (aTokenAddress: `0x${string}` | undefined, decimals = 18) => {
  const [reserveSize, setReserveSize] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const { data, isError: wagmiError } = useReadContract({
    address: aTokenAddress,
    abi: ERC20ABI,
    functionName: "totalSupply",
    chainId: 8453, // BASE network — ajusta si necesario
  });

  useEffect(() => {
    if (data) {
      try {
        const formatted = formatUnits(data as bigint, decimals);
        const formattedString = parseFloat(formatted).toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
        console.log("Formatted reserve size:", formattedString);
        setReserveSize(formattedString);
        setIsLoading(false);
        setIsError(false);
      } catch (err) {
        console.error("Error formatting reserve size:", err);
        setIsError(true);
        setIsLoading(false);
      }
    } else if (wagmiError) {
      console.error("Error fetching reserve size:", wagmiError);
      setIsError(true);
      setIsLoading(false);
    }
  }, [data, decimals, wagmiError]);

  return { reserveSize, isLoading, isError };
};

export default useReserveSize;
