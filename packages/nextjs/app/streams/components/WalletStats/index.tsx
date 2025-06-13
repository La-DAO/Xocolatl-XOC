"use client";

import type React from "react";

interface FlowInfo {
  lastUpdated: number;
  flowRate: number;
  deposit: number;
  owedDeposit: number;
}

const WalletStats: React.FC = () => {
  // Mock data
  const mockXocBalance = "1,234.56";
  const mockSuperXocBalance = "567.89";
  const mockFlowInfo: FlowInfo = {
    lastUpdated: Date.now() / 1000,
    flowRate: 0.000001,
    deposit: 100,
    owedDeposit: 0,
  };

  const formatFlowRate = (flowRate: number) => {
    return `${flowRate.toFixed(6)} XOC/s`;
  };

  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow mb-6 bg-white dark:bg-base-100">
      <div className="stat">
        <div className="stat-title">XOC Balance</div>
        <div className="stat-value">{mockXocBalance}</div>
        <div className="stat-desc">Native Token</div>
      </div>

      <div className="stat">
        <div className="stat-title">SuperXOC Balance</div>
        <div className="stat-value">{mockSuperXocBalance}</div>
        <div className="stat-desc">Superfluid Token</div>
      </div>

      <div className="stat">
        <div className="stat-title">Current Flow Rate</div>
        <div className="stat-value">{formatFlowRate(mockFlowInfo.flowRate)}</div>
        <div className="stat-desc">Last Updated: {new Date(mockFlowInfo.lastUpdated * 1000).toLocaleDateString()}</div>
      </div>
    </div>
  );
};

export default WalletStats;
