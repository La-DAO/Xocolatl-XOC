import { useEffect, useState } from "react";
import { Asset } from "@/types/assets/assets";

/**
 * Calculates the total collateral balance across the provided assets.
 * @param assets The array of assets to calculate the total collateral balance.
 * @returns The total collateral balance across all assets.
 */
const useCollateralBalance = (assets: Asset[]) => {
  const [collateralBalance, setCollateralBalance] = useState(0);

  useEffect(() => {
    // Calculate the total collateral balance by summing up the 'balance' property of assets marked as collateral
    const total = assets.reduce((sum, asset) => {
      if (asset.collateral) {
        return sum + (asset.balance || 0);
      }
      return sum;
    }, 0);
    setCollateralBalance(total);
  }, [assets]);

  return collateralBalance;
};

export default useCollateralBalance;
