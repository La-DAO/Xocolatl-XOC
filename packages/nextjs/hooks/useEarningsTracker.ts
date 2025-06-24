import { useEffect, useState } from "react";
import { ReserveData } from "@/types/types";
import { Address } from "viem";

interface EarningsData {
  reserveAddress: Address;
  symbol: string;
  currentBalance: string;
  estimatedEarnings: string;
  earningsUSD: string;
  apy: string;
  lastUpdated: number;
}

interface UseEarningsTrackerProps {
  reservesWithBalances: Array<ReserveData & { balance: string }>;
}

/**
 * Custom hook to track estimated earnings for each supplied asset
 * Calculates earnings based on current aToken balance and APY rate
 * This provides an estimate of earnings since the assets were supplied
 */
export const useEarningsTracker = ({ reservesWithBalances }: UseEarningsTrackerProps) => {
  const [earningsData, setEarningsData] = useState<EarningsData[]>([]);
  const [totalEarningsUSD, setTotalEarningsUSD] = useState<string>("0");
  const [isLoading, setIsLoading] = useState(true);

  // Calculate earnings for each reserve with balance
  useEffect(() => {
    if (!reservesWithBalances || reservesWithBalances.length === 0) {
      setIsLoading(false);
      return;
    }

    const calculateEarnings = () => {
      const earnings: EarningsData[] = [];

      for (const reserve of reservesWithBalances) {
        const balance = parseFloat(reserve.balance || "0");

        if (balance > 0) {
          // Calculate APY from liquidity rate
          const apy = Number(reserve.liquidityRate) / 1e25;

          // Get price in USD
          const priceInUSD = Number(reserve.priceInMarketReferenceCurrency) / 1e8;

          // Calculate estimated earnings
          // For a more accurate calculation, we would need to track:
          // 1. Original supply amount
          // 2. Time since supply
          // 3. Interest rate changes over time

          // For now, we'll estimate earnings as a percentage of current balance
          // This assumes the current balance includes accumulated interest
          // A more sophisticated approach would track the original principal
          const estimatedEarnings = (balance * apy) / 100;
          const earningsUSD = estimatedEarnings * priceInUSD;

          earnings.push({
            reserveAddress: reserve.underlyingAsset as Address,
            symbol: reserve.symbol,
            currentBalance: balance.toFixed(6),
            estimatedEarnings: estimatedEarnings.toFixed(6),
            earningsUSD: earningsUSD.toFixed(2),
            apy: apy.toFixed(2),
            lastUpdated: Date.now(),
          });
        }
      }

      setEarningsData(earnings);

      // Calculate total earnings in USD
      const total = earnings.reduce((sum, earning) => {
        return sum + parseFloat(earning.earningsUSD);
      }, 0);

      setTotalEarningsUSD(total.toFixed(2));
      setIsLoading(false);
    };

    calculateEarnings();
  }, [reservesWithBalances]);

  return {
    earningsData,
    totalEarningsUSD,
    isLoading,
  };
};
