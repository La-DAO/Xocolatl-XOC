import { useEffect, useState } from "react";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork"; // TAMBAHKAN INI
import externalContracts from "@/contracts/externalContracts";
import { Abi } from "abitype";
import { useReadContracts } from "wagmi";

/**
 * Custom hook to fetch user account data from smart contracts and log it to the console.
 * @param {string} userAddress - The address of the user whose data is to be fetched.
 * @returns {Object} - Contains loading state, data, and error state.
 */
const useGetUserAccountData = (userAddress: string) => {
  const [userAccountData, setUserAccountData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const { targetNetwork } = useTargetNetwork(); // TAMBAHKAN INI

  // Define the contract address and ABI for Pool based on the current network
  const poolContract = externalContracts[targetNetwork.id]?.Pool; // UBAH BARIS INI

  // Hook to read data from smart contracts
  const {
    data: result,
    isError: isFetchingError,
    refetch,
  } = useReadContracts({
    // Add a query key that depends on the contract and user address to ensure re-fetching
    query: {
      queryKey: [poolContract?.address, userAddress, targetNetwork.id],
    },
    contracts: poolContract
      ? [ // Add a check to ensure poolContract exists
          {
            address: poolContract.address,
            abi: poolContract.abi as Abi,
            functionName: "getUserAccountData",
            args: [userAddress],
            chainId: targetNetwork.id,
          },
        ]
      : [],
  });

  // Effect to handle the fetched data
  useEffect(() => {
    // Reset state when the network or user changes
    setIsLoading(true);
    setIsError(false);
    setUserAccountData(null);

    if (result) {
      try {
        if (Array.isArray(result) && result.length > 0) {
          const userAccountDataResult = result[0];

          if (userAccountDataResult && userAccountDataResult.status === "success" && Array.isArray(userAccountDataResult.result)) {
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
              healthFactor: healthFactor,
            };

            setUserAccountData(formattedData);
          } else if (userAccountDataResult.status === "failure") {
            throw new Error(userAccountDataResult.error?.message || "Contract call failed");
          } else {
             setUserAccountData(null); // Handle case where there's no data
          }
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
    } else if (!poolContract) {
        // Handle case where contract is not found on the network
        console.log(`Pool contract not found on network ${targetNetwork.id}`);
        setIsLoading(false);
    } else {
        // Still waiting for data
        setIsLoading(true);
    }
  }, [result, isFetchingError, userAddress, targetNetwork.id, poolContract]); // TAMBAHKAN DEPENDENSI

  return { userAccountData, isLoading, isError, refetch };
};

export default useGetUserAccountData;
