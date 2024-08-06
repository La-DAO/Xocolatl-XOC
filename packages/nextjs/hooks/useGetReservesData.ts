import { useEffect, useState } from "react";
import CONFIG from "@/config";
import externalContracts from "@/contracts/externalContracts";
import { ContractResult, ReserveData } from "@/types/types";
import { useReadContracts } from "wagmi";

// Define the contract address and ABI for UiPoolDataProviderV3
const uiPoolDataProviderV3 = externalContracts[8453].UiPoolDataProviderV3;

/**
 * Utility function to check if an object has the same structure as a reference object.
 * @param {any} obj - The object to check.
 * @param {any} reference - The reference object for structure comparison.
 * @returns {boolean} - Returns true if the object has the same structure as the reference.
 */
const hasSameStructure = (obj: any, reference: any) => {
  const referenceKeys = Object.keys(reference);
  return referenceKeys.every(key => obj.hasOwnProperty(key));
};

/**
 * Custom hook to fetch reserve data from smart contracts.
 * @returns {Object} - Contains reserve data, loading state, and error state.
 */
const useGetReservesData = () => {
  const [reservesData, setReservesData] = useState<ReserveData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  // Hook to read data from smart contracts
  const { data: result, isError: isFetchingError } = useReadContracts({
    contracts: [
      {
        address: uiPoolDataProviderV3.address,
        abi: uiPoolDataProviderV3.abi,
        functionName: "getReservesData",
        args: [CONFIG.POOL_ADDRESSES_PROVIDER],
        chainId: 8453,
      },
    ],
  });

  // Effect to handle the fetched data
  useEffect(() => {
    if (result) {
      // Extract reserve data from the result
      const reserves = (result[0] as unknown as ContractResult).result;

      if (Array.isArray(reserves) && reserves.length > 0) {
        // Use the first reserve as reference to filter other reserves
        const reference = reserves[0];
        const filteredReserves = reserves.filter(reserve => hasSameStructure(reserve, reference));

        if (Array.isArray(filteredReserves[0])) {
          // Extract required fields from each reserve
          const extractedReserves = filteredReserves[0].map(reserve => ({
            ...reserve, // Spread operator to include all properties
          }));

          // Update state with filtered reserves and reset loading/error state
          setReservesData(extractedReserves);
          setIsLoading(false);
          setIsError(false);

          // Log fetched data for debugging
          console.log("Fetched reserve data:", filteredReserves);
        } else {
          console.error("Filtered reserves is not an array");
        }
      }
    } else if (isFetchingError) {
      // Handle and log error if data fetching fails
      console.error("Error fetching data:", isFetchingError);
      setIsError(true);
      setIsLoading(false);
    }
  }, [result, isFetchingError]);

  return { reservesData, isLoading, isError };
};

export default useGetReservesData;
