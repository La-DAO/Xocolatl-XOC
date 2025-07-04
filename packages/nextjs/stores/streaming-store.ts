import React, { useEffect } from "react";
import { type Address } from "viem";
import { useAccount, useReadContract } from "wagmi";
import create from "zustand";
import { forwarderABI } from "~~/app/components/abis/ForwarderContract";
import { useBalanceOf } from "~~/hooks/useBalanceOf";
import { useIncomingStreams } from "~~/hooks/useIncomingStreams";
import { useOutgoingStreams } from "~~/hooks/useOutgoingStreams";

interface FlowInfo {
  lastUpdated: bigint;
  flowRate: bigint;
  deposit: bigint;
  owedDeposit: bigint;
}

// Stream data interface
interface StreamData {
  id: string;
  name: string;
  to: string;
  flowRate: number;
  startDate: string;
  status: string;
  rawData: any;
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

  // Streams data
  streamsData: any;
  streamsLoading: boolean;
  streamsError: Error | null;
  setStreamsData: (data: any) => void;
  setStreamsLoading: (loading: boolean) => void;
  setStreamsError: (error: Error | null) => void;
  refreshStreams: () => void;

  // Incoming streams data
  incomingStreamsData: any;
  incomingStreamsLoading: boolean;
  incomingStreamsError: Error | null;
  setIncomingStreamsData: (data: any) => void;
  setIncomingStreamsLoading: (loading: boolean) => void;
  setIncomingStreamsError: (error: Error | null) => void;
  refreshIncomingStreams: () => void;

  // Transformed streams for display
  transformedStreams: StreamData[];
  transformedIncomingStreams: StreamData[];
  updateTransformedStreams: () => void;
  updateTransformedIncomingStreams: () => void;

  // Refresh key for triggering re-fetches
  refreshKey: number;
  refreshComponents: () => void;
  refreshBalances: () => void;
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

  // Initialize streams data
  streamsData: null,
  streamsLoading: true,
  streamsError: null,
  setStreamsData: (data: any) => set({ streamsData: data }),
  setStreamsLoading: (loading: boolean) => set({ streamsLoading: loading }),
  setStreamsError: (error: Error | null) => set({ streamsError: error }),
  refreshStreams: () => set(prev => ({ refreshKey: prev.refreshKey + 1 })),

  // Initialize incoming streams data
  incomingStreamsData: null,
  incomingStreamsLoading: true,
  incomingStreamsError: null,
  setIncomingStreamsData: (data: any) => set({ incomingStreamsData: data }),
  setIncomingStreamsLoading: (loading: boolean) => set({ incomingStreamsLoading: loading }),
  setIncomingStreamsError: (error: Error | null) => set({ incomingStreamsError: error }),
  refreshIncomingStreams: () => set(prev => ({ refreshKey: prev.refreshKey + 1 })),

  // Initialize transformed streams
  transformedStreams: [],
  transformedIncomingStreams: [],
  updateTransformedStreams: () =>
    set(state => {
      const { streamsData } = state;
      if (!streamsData?.streams) {
        return { transformedStreams: [] };
      }

      const transformed: StreamData[] = streamsData.streams
        .filter((stream: any) => parseFloat(stream.currentFlowRate) > 0) // Only show active streams
        .map((stream: any) => ({
          id: stream.id,
          name: `Stream ${stream.id.slice(-6)}`,
          to: stream.receiver.id,
          flowRate: (parseFloat(stream.currentFlowRate) / 1e18) * 2592000, // Convert from wei to ether and scale to monthly rate
          startDate: new Date(parseInt(stream.createdAtTimestamp) * 1000).toLocaleDateString(),
          status: parseFloat(stream.currentFlowRate) > 0 ? "Active" : "Inactive",
          rawData: stream,
        }));
      return { transformedStreams: transformed };
    }),
  updateTransformedIncomingStreams: () =>
    set(state => {
      const { incomingStreamsData } = state;
      if (!incomingStreamsData?.streams) {
        return { transformedIncomingStreams: [] };
      }

      const transformed: StreamData[] = incomingStreamsData.streams
        .filter((stream: any) => parseFloat(stream.currentFlowRate) > 0) // Only show active streams
        .map((stream: any) => ({
          id: stream.id,
          name: `Stream ${stream.id.slice(-6)}`,
          to: stream.sender.id, // For incoming streams, we show the sender
          flowRate: (parseFloat(stream.currentFlowRate) / 1e18) * 2592000, // Convert from wei to ether and scale to monthly rate
          startDate: new Date(parseInt(stream.createdAtTimestamp) * 1000).toLocaleDateString(),
          status: parseFloat(stream.currentFlowRate) > 0 ? "Active" : "Inactive",
          rawData: stream,
        }));
      return { transformedIncomingStreams: transformed };
    }),

  // Initialize refresh key and components
  refreshKey: 0,
  refreshComponents: () => set(prev => ({ refreshKey: prev.refreshKey + 1 })),
  refreshBalances: () => set(prev => ({ refreshKey: prev.refreshKey + 1 })),
}));

// Hook to update superXocBalance in the store
export const useUpdateSuperXocBalance = () => {
  const { address: accountAddress } = useAccount();
  const { setSuperXocBalance, refreshBalances } = useStreamingStore();
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

  // Function to manually refresh balances by forcing a re-render
  const refreshBalancesManually = React.useCallback(() => {
    console.log("Manually refreshing balances...");
    // Force a re-render by updating the refresh key multiple times
    refreshBalances();
    setTimeout(() => refreshBalances(), 500);
    setTimeout(() => refreshBalances(), 1000);
    setTimeout(() => refreshBalances(), 2000);
  }, [refreshBalances]);

  return { refreshBalancesManually };
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

// Custom hook to sync streams data with the store
export const useStreamsDataSync = (userAddress: string) => {
  const { data: streamsData, loading: streamsLoading, error: streamsError } = useOutgoingStreams(userAddress);
  const { setStreamsData, setStreamsLoading, setStreamsError, updateTransformedStreams } = useStreamingStore();

  useEffect(() => {
    setStreamsLoading(streamsLoading);
    setStreamsError(streamsError);
  }, [streamsLoading, streamsError, setStreamsLoading, setStreamsError]);

  useEffect(() => {
    setStreamsData(streamsData);
  }, [streamsData, setStreamsData]);

  useEffect(() => {
    updateTransformedStreams();
  }, [streamsData, updateTransformedStreams]);
};

// Custom hook to sync incoming streams data with the store
export const useIncomingStreamsDataSync = (userAddress: string) => {
  const {
    data: incomingStreamsData,
    loading: incomingStreamsLoading,
    error: incomingStreamsError,
  } = useIncomingStreams(userAddress);
  const {
    setIncomingStreamsData,
    setIncomingStreamsLoading,
    setIncomingStreamsError,
    updateTransformedIncomingStreams,
  } = useStreamingStore();

  useEffect(() => {
    setIncomingStreamsLoading(incomingStreamsLoading);
    setIncomingStreamsError(incomingStreamsError);
  }, [incomingStreamsLoading, incomingStreamsError, setIncomingStreamsLoading, setIncomingStreamsError]);

  useEffect(() => {
    setIncomingStreamsData(incomingStreamsData);
  }, [incomingStreamsData, setIncomingStreamsData]);

  useEffect(() => {
    updateTransformedIncomingStreams();
  }, [incomingStreamsData, updateTransformedIncomingStreams]);
};
