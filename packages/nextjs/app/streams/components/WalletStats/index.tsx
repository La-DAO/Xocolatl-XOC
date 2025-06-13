"use client";

import type React from "react";
import { forwarderABI } from "../../../components/abis/ForwarderContract";
import { type Address } from "viem";
import { useAccount, useReadContract } from "wagmi";
import { useBalanceOf } from "~~/hooks/useBalanceOf";

interface FlowInfo {
  lastUpdated: number;
  flowRate: number;
  deposit: number;
  owedDeposit: number;
}

const WalletStats: React.FC = () => {
  const { address: accountAddress } = useAccount();

  // Mock data
  const mockXocBalance = "1,234.56";
  const SUPER_XOC_ADDRESS = "0xedF89f2612a5B07FEF051e1a0444342B5410C405";

  const superXocBalance = useBalanceOf({
    tokenAddress: "0xedF89f2612a5B07FEF051e1a0444342B5410C405",
    walletAddress: accountAddress as Address,
  });

  const mockFlowInfo: FlowInfo = {
    lastUpdated: Date.now() / 1000,
    flowRate: 0.000001,
    deposit: 100,
    owedDeposit: 0,
  };

  const { data: flowInfo } = useReadContract({
    address: "0xcfA132E353cB4E398080B9700609bb008eceB125",
    abi: forwarderABI,
    functionName: "getAccountFlowInfo",
    args: [SUPER_XOC_ADDRESS, accountAddress as Address],
  });
  console.log("flowInfo", flowInfo);

  const formatFlowRate = (flowRate: number) => {
    return `${flowRate.toFixed(2)} XOC/s`;
  };

  return (
    <div className="stats stats-vertical md:stats-vertical lg:stats-horizontal shadow mb-6 bg-white dark:bg-base-100">
      <div className="stat">
        <div className="stat-title">XOC Balance</div>
        <div className="stat-value">{mockXocBalance}</div>
        <div className="stat-desc">Native Token</div>
      </div>

      <div className="stat">
        <div className="stat-title">SuperXOC Balance</div>
        <div className="stat-value">{superXocBalance}</div>
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
