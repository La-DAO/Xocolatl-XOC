import { useEffect, useState } from "react";
import CONFIG from "@/config";
import externalContracts from "@/contracts/externalContracts";
import { useReadContracts } from "wagmi";

const uiPoolDataProviderV3 = externalContracts[8453].UiPoolDataProviderV3;

// Type definition for reserve data
type ReserveData = {
  underlyingAsset: `0x${string}`;
  name: string;
  symbol: string;
  decimals: bigint;
  baseLTVasCollateral: bigint;
  reserveLiquidationThreshold: bigint;
  reserveLiquidationBonus: bigint;
  reserveFactor: bigint;
  usageAsCollateralEnabled: boolean;
  borrowingEnabled: boolean;
  stableBorrowRateEnabled: boolean;
  isActive: boolean;
  isFrozen: boolean;
  liquidityIndex: bigint;
  variableBorrowIndex: bigint;
  liquidityRate: bigint;
  variableBorrowRate: bigint;
  stableBorrowRate: bigint;
  lastUpdateTimestamp: number;
  aTokenAddress: string;
  stableDebtTokenAddress: string;
  variableDebtTokenAddress: string;
  interestRateStrategyAddress: string;
  availableLiquidity: bigint;
  totalPrincipalStableDebt: bigint;
  averageStableRate: bigint;
  stableDebtLastUpdateTimestamp: bigint;
  totalScaledVariableDebt: bigint;
  priceInMarketReferenceCurrency: bigint;
  variableRateSlope1: bigint;
  variableRateSlope2: bigint;
  stableRateSlope1: bigint;
  stableRateSlope2: bigint;
};

// Define the type for the result of the contract read
type ContractResult = {
  result: [ReserveData[]];
};

/**
 * Custom hook to fetch reserve data from the UiPoolDataProviderV3 contract.
 * Manages loading state, error state, and fetched data.
 */
const useReserveData = () => {
  // State to store fetched reserve data
  const [data, setData] = useState<ReserveData[] | null>(null);
  // State to track loading status
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // State to track error status
  const [isError, setIsError] = useState<boolean>(false);

  // Hook to read contract data using wagmi
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

  // Effect to handle the result of the contract read operation
  useEffect(() => {
    if (result) {
      // Type assertion to specify the expected structure of result
      const reserves = (result as unknown as ContractResult[])[0]?.result[0] || [];
      // Updating state with fetched data
      setData(reserves);
      setIsLoading(false);
      setIsError(false);
      // Log all the elements in console
      console.log("Fetched reserve data:", reserves);
    } else if (isFetchingError) {
      // Handling error state
      console.error("Error fetching data:", isFetchingError);
      setIsError(true);
      setIsLoading(false);
    }
  }, [result, isFetchingError]);

  return { data, isLoading, isError };
};

export default useReserveData;
