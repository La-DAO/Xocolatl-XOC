import { useEffect, useState } from "react";
import CONFIG from "@/config";
import externalContracts from "@/contracts/externalContracts";
import { Abi } from "abitype";
import { useReadContracts } from "wagmi";

// Define the contract address and ABI for Pool
const poolContract = externalContracts[8453].Pool;

/**
 * Custom hook to fetch user account data from smart contracts and log it to the console.
 * @param {string} userAddress - The address of the user whose data is to be fetched.
 * @returns {Object} - Contains loading state, data, and error state.
 */
const useGetUserAccountData = (userAddress: string) => {
  const [userAccountData, setUserAccountData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  // Hook to read data from smart contracts
  const { data: result, isError: isFetchingError } = useReadContracts({
    contracts: [
      {
        address: poolContract.address,
        abi: poolContract.abi as Abi,
        functionName: "getUserAccountData",
        args: [userAddress],
        chainId: 8453,
      },
    ],
  });

  // Effect to handle the fetched data
  useEffect(() => {
    if (result) {
      try {
        if (Array.isArray(result) && result.length > 0) {
          const userAccountDataResult = result[0];

          if (userAccountDataResult && Array.isArray(userAccountDataResult.result)) {
            // Extract user account data from the result
            const [
              totalCollateralBase,
              totalDebtBase,
              availableBorrowsBase,
              currentLiquidationThreshold,
              ltv,
              healthFactor,
            ] = userAccountDataResult.result;

            // Format the data for readability
            const formattedData = {
              totalCollateralBase: Number(totalCollateralBase) / 1e18,
              totalDebtBase: Number(totalDebtBase) / 1e18,
              availableBorrowsBase: Number(availableBorrowsBase) / 1e18,
              currentLiquidationThreshold: Number(currentLiquidationThreshold) / 1e18,
              ltv: Number(ltv) / 1e18,
              healthFactor: Number(healthFactor) / 1e18,
            };

            setUserAccountData(formattedData);
            // console.log("Fetched user account data:", formattedData);
          } else {
            throw new Error("Invalid result format");
          }
        } else {
          throw new Error("No result or invalid result");
        }
      } catch (error) {
        console.error("Error processing data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    } else if (isFetchingError) {
      // Handle and log error if data fetching fails
      console.error("Error fetching data:", isFetchingError);
      setIsError(true);
      setIsLoading(false);
    }
  }, [result, isFetchingError]);

  return { userAccountData, isLoading, isError };
};

export default useGetUserAccountData;
