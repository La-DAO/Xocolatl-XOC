import { useEffect, useState } from "react";
import useAccountAddress from "./useAccount";
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
 * Custom hook to fetch and manage reserve data from smart contracts.
 * @returns {Object} - Contains reserve data, user reserve data, loading state, and error state.
 */
const useReserveData = () => {
  const [reservesData, setReservesData] = useState<ReserveData[] | null>(null);
  const [userReservesData, setUserReservesData] = useState<ReserveData[] | null>(null);
  const [combinedReservesData, setCombinedReservesData] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  // Get the wallet address using custom hook
  const { address } = useAccountAddress();

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
      {
        address: uiPoolDataProviderV3.address,
        abi: uiPoolDataProviderV3.abi,
        functionName: "getUserReservesData",
        args: [CONFIG.POOL_ADDRESSES_PROVIDER, address],
        chainId: 8453,
      },
    ],
  });

  // Effect to handle the fetched data
  useEffect(() => {
    if (result) {
      // Extract reserve data and user reserve data from the result
      const reserves = (result[0] as unknown as ContractResult).result;
      const userReserves = (result[1] as unknown as ContractResult).result;

      if (Array.isArray(reserves) && reserves.length > 0) {
        // Use the first reserve as reference to filter other reserves
        const reference = reserves[0];
        const filteredReserves = reserves.filter(reserve => hasSameStructure(reserve, reference));

        if (Array.isArray(filteredReserves[0])) {
          // Extract required fields from each reserve
          const extractedReserves = filteredReserves[0].map(reserve => ({
            underlyingAsset: reserve.underlyingAsset,
            symbol: reserve.symbol,
            liquidityRate: reserve.liquidityRate,
          }));

          // Extract required fields from each user reserve
          const extractedUserReserves = userReserves.map(reserve => ({
            underlyingAsset: reserve.underlyingAsset,
            usageAsCollateralEnabledOnUser: reserve.usageAsCollateralEnabledOnUser,
          }));

          // Combine the two arrays based on underlyingAsset
          const combinedReserves = extractedReserves.map(reserve => {
            const userReserve = extractedUserReserves.find(
              userRes => userRes.underlyingAsset === reserve.underlyingAsset,
            );
            return {
              ...reserve,
              ...userReserve,
            };
          });

          // Update state with filtered reserves and reset loading/error state
          setReservesData(filteredReserves);
          setUserReservesData(userReserves);
          setCombinedReservesData(combinedReserves);
          setIsLoading(false);
          setIsError(false);

          // Log fetched data for debugging
          // console.log("Fetched reserve data:", filteredReserves);
          // console.log("Fetched user reserve data:", userReserves);

          // Log extracted and combined reserves data for debugging
          // console.log("Extracted reserve data:", extractedReserves);
          // console.log("Extracted user reserve data:", extractedUserReserves);
          // console.log("Combined reserves data:", combinedReserves);
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

  return { reservesData, userReservesData, combinedReservesData, isLoading, isError };
};

export default useReserveData;
