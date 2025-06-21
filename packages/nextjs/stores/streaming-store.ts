import React from "react";
import { type Address } from "viem";
import { useAccount, useReadContract } from "wagmi";
import create from "zustand";
import { forwarderABI } from "~~/app/components/abis/ForwarderContract";
import { useBalanceOf } from "~~/hooks/useBalanceOf";

interface FlowInfo {
  lastUpdated: bigint;
  flowRate: bigint;
  deposit: bigint;
  owedDeposit: bigint;
}

interface StreamingStoreState {
  // Balance states
  xocBalance: string;
  setXocBalance: (value: string) => void;

  superXocBalance: string;
  setSuperXocBalance: (value: string) => void;

  // Flow rate states
  currentFlowRate: number;
  setCurrentFlowRate: (value: number) => void;

  // Last updated timestamp
  lastUpdated: number;
  setLastUpdated: (value: number) => void;

  // Flow info from contract
  flowInfo: FlowInfo | null;
  setFlowInfo: (flowInfo: FlowInfo) => void;
  clearFlowInfo: () => void;
}

export const useStreamingStore = create<StreamingStoreState>(set => ({
  // Initialize balance states
  xocBalance: "0",
  setXocBalance: (value: string) => set({ xocBalance: value }),

  superXocBalance: "0",
  setSuperXocBalance: (value: string) => set({ superXocBalance: value }),

  // Initialize flow rate states
  currentFlowRate: 0,
  setCurrentFlowRate: (value: number) => set({ currentFlowRate: value }),

  // Initialize last updated timestamp
  lastUpdated: Date.now() / 1000,
  setLastUpdated: (value: number) => set({ lastUpdated: value }),

  // Initialize flow info
  flowInfo: null,
  setFlowInfo: (flowInfo: FlowInfo) => set({ flowInfo }),
  clearFlowInfo: () => set({ flowInfo: null }),
}));

// Hook to update superXocBalance in the store
export const useUpdateSuperXocBalance = () => {
  const { address: accountAddress } = useAccount();
  const { setSuperXocBalance } = useStreamingStore();
  const { setXocBalance } = useStreamingStore();

  const xocBalance = useBalanceOf({
    tokenAddress: "0xa411c9aa00e020e4f88bc19996d29c5b7adb4acf",
    walletAddress: accountAddress as Address,
  });

  React.useEffect(() => {
    if (xocBalance) {
      setXocBalance(xocBalance);
    }
  }, [xocBalance, setXocBalance]);

  const superXocBalance = useBalanceOf({
    tokenAddress: "0xedF89f2612a5B07FEF051e1a0444342B5410C405",
    walletAddress: accountAddress as Address,
  });

  // Update store whenever balance changes
  React.useEffect(() => {
    if (superXocBalance) {
      setSuperXocBalance(superXocBalance);
    }
  }, [superXocBalance, setSuperXocBalance]);
};

// Hook to read and update flow info from contract
export const useUpdateFlowInfo = () => {
  const { address: accountAddress } = useAccount();
  const { setFlowInfo } = useStreamingStore();

  const { data: flowInfoData, refetch: refetchFlowInfo } = useReadContract({
    address: "0xcfA132E353cB4E398080B9700609bb008eceB125" as Address,
    abi: forwarderABI,
    functionName: "getAccountFlowInfo",
    args: [
      "0xedF89f2612a5B07FEF051e1a0444342B5410C405" as Address, // Super XOC token
      accountAddress as Address,
    ],
    query: {
      enabled: !!accountAddress,
      refetchInterval: 10000, // Refetch every 10 seconds
    },
  });

  // Update store whenever flow info changes
  React.useEffect(() => {
    if (flowInfoData && Array.isArray(flowInfoData) && flowInfoData.length === 4) {
      const [lastUpdated, flowRate, deposit, owedDeposit] = flowInfoData as [bigint, bigint, bigint, bigint];
      setFlowInfo({
        lastUpdated,
        flowRate,
        deposit,
        owedDeposit,
      });
    }
  }, [flowInfoData, setFlowInfo]);

  return { refetchFlowInfo };
};
