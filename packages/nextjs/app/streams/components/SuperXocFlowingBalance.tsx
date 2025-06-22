import React, { memo, useEffect, useMemo, useState } from "react";
import { formatEther } from "viem";

// Constants
const ANIMATION_MINIMUM_STEP_TIME = 40;

// Utility functions
const absoluteValue = (n: bigint) => {
  return n >= BigInt(0) ? n : -n;
};

function toFixedUsingString(numStr: string, decimalPlaces: number): string {
  const [wholePart, decimalPart] = numStr.split(".");

  if (!decimalPart || decimalPart.length <= decimalPlaces) {
    return numStr.padEnd(wholePart.length + 1 + decimalPlaces, "0");
  }

  const decimalPartBigInt = BigInt(
    `${decimalPart.slice(0, decimalPlaces)}${decimalPart[decimalPlaces] >= "5" ? "1" : "0"}`,
  );

  return `${wholePart}.${decimalPartBigInt.toString().padStart(decimalPlaces, "0")}`;
}

// Hook to calculate significant decimal places
const useSignificantFlowingDecimal = (flowRate: bigint, animationStepTimeInMs: number): number | undefined =>
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

// Hook for flowing balance calculation
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
        // For SuperXOC balance, we subtract the flow (since it's outgoing)
        const flowingBalance_ = startingBalance - (flowRate * elapsedTimeInMilliseconds) / BigInt(1000);

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

interface SuperXocFlowingBalanceProps {
  balance: string;
  flowRate: bigint;
  lastUpdated: bigint;
}

const SuperXocFlowingBalance: React.FC<SuperXocFlowingBalanceProps> = memo(({ balance, flowRate, lastUpdated }) => {
  // Convert balance string to bigint (wei)
  const balanceNumber = parseFloat(balance);
  const startingBalance = isNaN(balanceNumber) ? BigInt(0) : BigInt(Math.floor(balanceNumber * 10 ** 18));

  // Create starting date from lastUpdated timestamp
  const startingDate = new Date(Number(lastUpdated) * 1000);

  // Use the flowing balance hook
  const flowingBalance = useFlowingBalance(startingBalance, startingDate, flowRate);

  // Calculate significant decimal places for formatting
  const decimalPlaces = useSignificantFlowingDecimal(flowRate, ANIMATION_MINIMUM_STEP_TIME);

  return (
    <div className="text-2xl font-bold">
      {decimalPlaces !== undefined
        ? toFixedUsingString(formatEther(flowingBalance), decimalPlaces)
        : formatEther(flowingBalance)}
    </div>
  );
});

SuperXocFlowingBalance.displayName = "SuperXocFlowingBalance";

export default SuperXocFlowingBalance;
