import { useEffect } from "react";
import { useEarningsTracker } from "./useEarningsTracker";
import { useLendingStore } from "@/stores/lending-store";
import { ReserveData } from "@/types/types";

interface UseEarningsSyncProps {
  reservesWithBalances: Array<ReserveData & { balance: string }>;
}

/**
 * Custom hook to sync earnings data with the lending store
 * This hook calculates earnings and updates the store automatically
 */
export const useEarningsSync = ({ reservesWithBalances }: UseEarningsSyncProps) => {
  const { earningsData, totalEarningsUSD, isLoading } = useEarningsTracker({ reservesWithBalances });
  const { setEarningsData, setTotalEarningsUSD } = useLendingStore();

  // Sync earnings data with the store
  useEffect(() => {
    if (!isLoading) {
      // Convert Address to string for store compatibility
      const storeEarningsData = earningsData.map(earning => ({
        ...earning,
        reserveAddress: earning.reserveAddress as string,
      }));

      setEarningsData(storeEarningsData);
      setTotalEarningsUSD(totalEarningsUSD);
    }
  }, [earningsData, totalEarningsUSD, isLoading, setEarningsData, setTotalEarningsUSD]);

  return {
    earningsData,
    totalEarningsUSD,
    isLoading,
  };
};
