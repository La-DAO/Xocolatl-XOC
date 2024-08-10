import { useEffect, useState } from "react";
import { ReserveData } from "@/types/types";

/**
 * Custom hook to calculate the total weighted Annual Percentage Yield (APY) across all reserves.
 * @param {Array<ReserveData & { balance: string }>} reservesWithBalances - An array of reserve data objects with user balances.
 * @returns {string} - The total weighted APY, formatted as a string with two decimal places.
 */
export const useTotalAPY = (reservesWithBalances: Array<ReserveData & { balance: string }>) => {
  // State to store the calculated total APY.
  const [totalAPY, setTotalAPY] = useState<string>("0");

  // Effect hook that runs when the reservesWithBalances array changes.
  useEffect(() => {
    // Check if there are any reserves with balances provided.
    if (reservesWithBalances.length > 0) {
      // Step 1: Calculate the total balance to use as the denominator in the weighted APY calculation.
      const totalBalance = reservesWithBalances.reduce((sum, reserve) => {
        const balance = parseFloat(reserve.balance || "0"); // Parse the balance as a float.
        const priceInMarketReferenceCurrency = Number(reserve.priceInMarketReferenceCurrency) || 0; // Get the price in the market reference currency.
        const adjustedBalance = balance * (priceInMarketReferenceCurrency / Math.pow(10, 8)); // Adjust the balance using the market reference price.

        // Add the adjusted balance to the sum.
        return sum + adjustedBalance;
      }, 0);

      // Step 2: Calculate the weighted APY.
      const weightedAPY = reservesWithBalances.reduce((sum, reserve) => {
        const balance = parseFloat(reserve.balance || "0"); // Parse the balance as a float.
        const priceInMarketReferenceCurrency = Number(reserve.priceInMarketReferenceCurrency) || 0; // Get the price in the market reference currency.
        const adjustedBalance = balance * (priceInMarketReferenceCurrency / Math.pow(10, 8)); // Adjust the balance using the market reference price.
        const apy = Number(reserve.liquidityRate) / 1e25; // Convert the liquidity rate to a usable APY value.

        // Calculate the weighted APY contribution for this reserve.
        return sum + apy * adjustedBalance;
      }, 0);

      // Step 3: Calculate and set the total APY if there is a positive total balance.
      if (totalBalance > 0) {
        const calculatedAPY = (weightedAPY / totalBalance).toFixed(2); // Calculate the final weighted APY.
        setTotalAPY(calculatedAPY); // Set the calculated APY in the state.
      } else {
        setTotalAPY("0"); // Set APY to "0" if the total balance is zero or negative.
      }
    }
  }, [reservesWithBalances]);

  return totalAPY;
};
