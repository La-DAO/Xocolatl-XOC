import { useEffect, useState } from "react";
import { ReserveData } from "@/types/types";

/**
 * Custom hook to calculate the total balance of all reserves.
 * @param {Array<ReserveData & { balance: string }>} reservesWithBalances - An array of reserve data objects with user balances.
 * @returns {string} - The total balance of all reserves, formatted as a string with two decimal places.
 */
export const useTotalBalance = (reservesWithBalances: Array<ReserveData & { balance: string }>) => {
  // State to store the calculated total balance.
  const [totalBalance, setTotalBalance] = useState<string>("0");

  // Effect hook that runs when the reservesWithBalances array changes.
  useEffect(() => {
    // Check if there are any reserves with balances provided.
    if (reservesWithBalances.length > 0) {
      // Reduce the array of reserves to calculate the total balance.
      const total = reservesWithBalances.reduce((sum, reserve) => {
        const balance = parseFloat(reserve.balance || "0"); // Parse the balance as a float.
        const priceInMarketReferenceCurrency = Number(reserve.priceInMarketReferenceCurrency) || 0; // Get the price in the market reference currency.
        const adjustedBalance = balance * (priceInMarketReferenceCurrency / Math.pow(10, 8)); // Adjust the balance using the market reference price.

        // Add the adjusted balance to the sum.
        return sum + adjustedBalance;
      }, 0);

      // Set the calculated total balance, formatted to two decimal places.
      setTotalBalance(total.toFixed(2));
    }
  }, [reservesWithBalances]);

  return totalBalance;
};
