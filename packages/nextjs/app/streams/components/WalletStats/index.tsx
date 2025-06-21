"use client";

import type React from "react";
import FlowingBalance from "../FlowingBalance";
import { useStreamingStore, useUpdateFlowInfo, useUpdateSuperXocBalance } from "~~/stores/streaming-store";

const WalletStats: React.FC = () => {
  // Store integration
  useUpdateSuperXocBalance();
  useUpdateFlowInfo();

  const { xocBalance, superXocBalance, flowInfo } = useStreamingStore();

  const formatBalance = (balance: string | undefined) => {
    if (!balance) return "0.00";
    return Number(balance).toFixed(2);
  };

  const formatFlowRate = () => {
    if (!flowInfo || flowInfo.flowRate === 0n) return "0.00 XOC/s";

    // Convert flowRate from wei per second to XOC per second
    const flowRateXOC = Number(flowInfo.flowRate) / Math.pow(10, 18);
    return `${Math.abs(flowRateXOC).toFixed(6)} XOC/s`;
  };

  const formatLastUpdated = () => {
    if (!flowInfo) return "Never";
    return new Date(Number(flowInfo.lastUpdated) * 1000).toLocaleDateString();
  };

  // Calculate monthly flow rate for FlowingBalance
  const calculateMonthlyFlowRate = () => {
    if (!flowInfo || flowInfo.flowRate === 0n) return 0n;

    // Take the absolute value of the flow rate (since negative means outgoing)
    const absoluteFlowRate = flowInfo.flowRate < 0n ? -flowInfo.flowRate : flowInfo.flowRate;

    // Convert from per-second to per-month rate
    const secondsInMonth = 30 * 24 * 60 * 60; // 30 days
    const monthlyFlowWei = absoluteFlowRate * BigInt(secondsInMonth);

    return monthlyFlowWei;
  };

  // Get starting date from flowInfo or use current date
  const getStartingDate = () => {
    if (!flowInfo || flowInfo.lastUpdated === 0n) return new Date();
    return new Date(Number(flowInfo.lastUpdated) * 1000);
  };

  return (
    <div className="stats stats-vertical md:stats-vertical lg:stats-horizontal shadow mb-6 bg-white dark:bg-base-100">
      <div className="stat">
        <div className="stat-title">XOC Balance</div>
        <div className="stat-value">{formatBalance(xocBalance)}</div>
        <div className="stat-desc">Native Token</div>
      </div>

      <div className="stat">
        <div className="stat-title">SuperXOC Balance</div>
        <div className="stat-value">{formatBalance(superXocBalance)}</div>
        <div className="stat-desc">Superfluid Token</div>
      </div>

      <div className="stat">
        <div className="stat-title">Current Flow Rate</div>
        <div className="stat-value">{formatFlowRate()}</div>
        <div className="stat-desc">Last Updated: {formatLastUpdated()}</div>
      </div>

      <div className="stat">
        <div className="stat-title">Monthly Flow</div>
        <div className="stat-value">
          {flowInfo && flowInfo.flowRate !== 0n ? (
            <FlowingBalance
              startingBalance={0n}
              startingBalanceDate={getStartingDate()}
              flowRate={calculateMonthlyFlowRate()}
            />
          ) : (
            "0.00"
          )}
        </div>
        <div className="stat-desc">XOC per Month</div>
      </div>
    </div>
  );
};

export default WalletStats;
