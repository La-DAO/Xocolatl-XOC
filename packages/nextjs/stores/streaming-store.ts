import React from "react";
import { type Address } from "viem";
import { useAccount } from "wagmi";
import create from "zustand";
import { useBalanceOf } from "~~/hooks/useBalanceOf";

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
}

export const useStreamingStore = create<StreamingStoreState>(set => ({
  // Initialize balance states
  xocBalance: "0",
  setXocBalance: value => set({ xocBalance: value }),

  superXocBalance: "0",
  setSuperXocBalance: value => set({ superXocBalance: value }),

  // Initialize flow rate states
  currentFlowRate: 0,
  setCurrentFlowRate: value => set({ currentFlowRate: value }),

  // Initialize last updated timestamp
  lastUpdated: Date.now() / 1000,
  setLastUpdated: value => set({ lastUpdated: value }),
}));
// Hook to update superXocBalance in the store
export const useUpdateSuperXocBalance = () => {
  const { address: accountAddress } = useAccount();
  const { setSuperXocBalance } = useStreamingStore();

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
