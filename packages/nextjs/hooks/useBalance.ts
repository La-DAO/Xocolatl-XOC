import { useEffect, useState } from "react";
import { Asset } from "@/types/assets/assets";

/**
 * Calculates the total balance across the provided assets.
 * @param assets The array of assets to calculate the total balance.
 * @returns The total balance across all assets.
 */
const useBalance = (assets: Asset[]) => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // Calculate the total balance by summing up the 'balance' property of each asset
    const total = assets.reduce((sum, asset) => sum + (asset.balance || asset.amount || 0), 0);
    setBalance(total);
  }, [assets]);

  return balance;
};

export default useBalance;
