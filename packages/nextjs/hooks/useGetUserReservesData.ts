import { useEffect, useState } from "react";
import useAccountAddress from "./useAccount";
import CONFIG from "@/config";
import externalContracts from "@/contracts/externalContracts";
import { ContractResult } from "@/types/types";
import { useReadContracts } from "wagmi";

// Contract instance for UiPoolDataProviderV3
const uiPoolDataProviderV3 = externalContracts[8453].UiPoolDataProviderV3;

interface UserReserveData {
  underlyingAsset: string;
  usageAsCollateralEnabledOnUser: boolean;
}

/**
 * Custom hook to fetch and manage user reserve data.
 * @returns {Object} - Contains user reserves data, loading state, and error state.
 */
const useGetUserReservesData = () => {
  // State to store user reserves data
  const [userReservesData, setUserReservesData] = useState<UserReserveData[] | null>(null);
  // State to indicate if data is loading
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // State to indicate if an error has occurred
  const [isError, setIsError] = useState<boolean>(false);

  // Hook to get user account address
  const { address } = useAccountAddress();

  // Hook to read data from contracts
  const { data: result, isError: isFetchingError } = useReadContracts({
    contracts: [
      {
        address: uiPoolDataProviderV3.address,
        abi: uiPoolDataProviderV3.abi,
        functionName: "getUserReservesData",
        args: [CONFIG.POOL_ADDRESSES_PROVIDER, address],
        chainId: 8453,
      },
    ],
  });

  // Effect to handle data fetching and state updates
  useEffect(() => {
    if (result) {
      const userReserves = (result[0] as unknown as ContractResult).result;

      if (Array.isArray(userReserves) && userReserves.length > 0) {
        const extractedUserReserves: UserReserveData[] = userReserves.map((reserve: any) => ({
          underlyingAsset: reserve.underlyingAsset,
          usageAsCollateralEnabledOnUser: reserve.usageAsCollateralEnabledOnUser,
        }));

        setUserReservesData(extractedUserReserves);
        setIsLoading(false);
        setIsError(false);
      }
    } else if (isFetchingError) {
      console.error("Error fetching data:", isFetchingError);
      setIsError(true);
      setIsLoading(false);
    }
  }, [result, isFetchingError]);

  return { userReservesData, isLoading, isError };
};

export default useGetUserReservesData;
