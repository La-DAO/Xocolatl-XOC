import React, { memo, useEffect, useMemo, useState } from "react";
import { formatEther } from "viem";

// Constants
export const ANIMATION_MINIMUM_STEP_TIME = 40;

// Utility functions
export const absoluteValue = (n: bigint) => {
  return n >= BigInt(0) ? n : -n;
};

export function toFixedUsingString(numStr: string, decimalPlaces: number): string {
  const [wholePart, decimalPart] = numStr.split(".");

  if (!decimalPart || decimalPart.length <= decimalPlaces) {
    return numStr.padEnd(wholePart.length + 1 + decimalPlaces, "0");
  }

  const decimalPartBigInt = BigInt(
    `${decimalPart.slice(0, decimalPlaces)}${decimalPart[decimalPlaces] >= "5" ? "1" : "0"}`,
  );

  return `${wholePart}.${decimalPartBigInt.toString().padStart(decimalPlaces, "0")}`;
}

// Hooks
export const useSignificantFlowingDecimal = (flowRate: bigint, animationStepTimeInMs: number): number | undefined =>
  useMemo(() => {
    if (flowRate === BigInt(0)) {
      return undefined;
    }

    const ticksPerSecond = 1000 / animationStepTimeInMs;
    const flowRatePerTick = flowRate / BigInt(ticksPerSecond);

    const [beforeEtherDecimal, afterEtherDecimal] = formatEther(flowRatePerTick).split(".");

    const isFlowingInWholeNumbers = absoluteValue(BigInt(beforeEtherDecimal)) > BigInt(0);

    if (isFlowingInWholeNumbers) {
      return 0; // Flowing in whole numbers per tick.
    }
    const numberAfterDecimalWithoutLeadingZeroes = BigInt(afterEtherDecimal);

    const lengthToFirstSignificantDecimal = afterEtherDecimal
      .toString()
      .replace(numberAfterDecimalWithoutLeadingZeroes.toString(), "").length; // We're basically counting the zeroes.

    return Math.min(lengthToFirstSignificantDecimal + 2, 18); // Don't go over 18.
  }, [flowRate, animationStepTimeInMs]);

const useFlowingBalance = (startingBalance: bigint, startingBalanceDate: Date, flowRate: bigint) => {
  const [flowingBalance, setFlowingBalance] = useState(startingBalance);

  const startingBalanceTime = startingBalanceDate.getTime();
  useEffect(() => {
    if (flowRate === BigInt(0)) return;

    let lastAnimationTimestamp = 0;

    const animationStep = (currentAnimationTimestamp: number) => {
      const animationFrameId = window.requestAnimationFrame(animationStep);
      if (currentAnimationTimestamp - lastAnimationTimestamp > ANIMATION_MINIMUM_STEP_TIME) {
        const elapsedTimeInMilliseconds = BigInt(Date.now() - startingBalanceTime);
        const flowingBalance_ = startingBalance + (flowRate * elapsedTimeInMilliseconds) / BigInt(1000);

        setFlowingBalance(flowingBalance_);

        lastAnimationTimestamp = currentAnimationTimestamp;
      }

      return () => window.cancelAnimationFrame(animationFrameId);
    };

    const animationFrameId = window.requestAnimationFrame(animationStep);

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [startingBalance, startingBalanceTime, flowRate]);

  return flowingBalance;
};

// FlowingBalance Component
const FlowingBalance: React.FC<{
  startingBalance: bigint;
  startingBalanceDate: Date;
  flowRate: bigint;
}> = memo(({ startingBalance, startingBalanceDate, flowRate }) => {
  const flowingBalance = useFlowingBalance(startingBalance, startingBalanceDate, flowRate);

  const decimalPlaces = useSignificantFlowingDecimal(flowRate, ANIMATION_MINIMUM_STEP_TIME);

  return (
    <div className="flowing-balance">
      {decimalPlaces !== undefined
        ? toFixedUsingString(formatEther(flowingBalance), decimalPlaces)
        : formatEther(flowingBalance)}
    </div>
  );
});

FlowingBalance.displayName = "FlowingBalance";

export default FlowingBalance;
