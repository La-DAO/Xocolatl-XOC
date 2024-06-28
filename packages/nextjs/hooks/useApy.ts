import { useEffect, useState } from "react";
import { Asset } from "@/types/assets/assets";

/**
 * Calculates the average APY of supplied assets.
 * @param assets The array of assets to calculate the average APY.
 * @returns The average APY of the supplied assets.
 */
const useApy = (assets: Asset[]) => {
  const [averageApy, setAverageApy] = useState(0);

  useEffect(() => {
    const totalApy = assets.reduce((sum, asset) => sum + asset.apy, 0);
    const average = assets.length > 0 ? totalApy / assets.length : 0;
    setAverageApy(average);
  }, [assets]);

  return averageApy;
};

export default useApy;
