import { useEffect, useState } from "react";
import { Asset } from "@/types/assets/assets";

/**
 * Calculates the average Borrow Power of borrowed assets.
 * @param assets The array of assets to calculate the average Borrow Power.
 * @returns The average Borrow Power of the borrowed assets.
 */
const useBorrowPower = (assets: Asset[]) => {
  const [averageBorrowPower, setAverageBorrowPower] = useState(0);

  useEffect(() => {
    const totalBorrowPower = assets.reduce((sum, asset) => sum + asset.borrowRate, 0);
    const average = assets.length > 0 ? totalBorrowPower / assets.length : 0;
    setAverageBorrowPower(average);
  }, [assets]);

  return averageBorrowPower;
};

export default useBorrowPower;
