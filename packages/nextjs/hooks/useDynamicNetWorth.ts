import { useEffect, useMemo, useState } from "react";
import { useLendingStore } from "@/stores/lending-store";

// Constants
const ANIMATION_MINIMUM_STEP_TIME = 40;

/**
 * Custom hook to calculate dynamic net worth that updates in real-time
 * based on supply APY rates, similar to FlowingBalance
 */
export const useDynamicNetWorth = (baseNetWorth: number) => {
  const [dynamicNetWorth, setDynamicNetWorth] = useState(baseNetWorth);
  const { earningsData } = useLendingStore();

  // Calculate weighted average APY from all supplied assets
  const weightedAPY = useMemo(() => {
    if (!earningsData || earningsData.length === 0) return 0;

    let totalValue = 0;
    let weightedSum = 0;

    earningsData.forEach(earning => {
      const value = parseFloat(earning.earningsUSD);
      const apy = parseFloat(earning.apy);

      if (value > 0 && apy > 0) {
        totalValue += value;
        weightedSum += value * apy;
      }
    });

    return totalValue > 0 ? weightedSum / totalValue : 0;
  }, [earningsData]);

  useEffect(() => {
    if (weightedAPY === 0 || baseNetWorth <= 0) {
      setDynamicNetWorth(baseNetWorth);
      return;
    }

    let lastAnimationTimestamp = 0;
    const startTime = Date.now();
    const startNetWorth = baseNetWorth;

    const animationStep = (currentAnimationTimestamp: number) => {
      const animationFrameId = window.requestAnimationFrame(animationStep);

      if (currentAnimationTimestamp - lastAnimationTimestamp > ANIMATION_MINIMUM_STEP_TIME) {
        const elapsedTimeInSeconds = (Date.now() - startTime) / 1000;

        // Calculate dynamic net worth: base + (base * APY * time)
        // Convert APY from percentage to decimal and apply to elapsed time
        const apyDecimal = weightedAPY / 100;
        const timeInYears = elapsedTimeInSeconds / (365 * 24 * 60 * 60); // Convert seconds to years
        const growthFactor = 1 + apyDecimal * timeInYears;

        const newNetWorth = startNetWorth * growthFactor;
        setDynamicNetWorth(newNetWorth);

        lastAnimationTimestamp = currentAnimationTimestamp;
      }

      return () => window.cancelAnimationFrame(animationFrameId);
    };

    const animationFrameId = window.requestAnimationFrame(animationStep);

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [baseNetWorth, weightedAPY]);

  return dynamicNetWorth;
};
