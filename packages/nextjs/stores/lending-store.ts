import { useEffect } from "react";
import { fillerLoadingReserve } from "@/app/lending/constants";
import useGetUserAccountData from "@/hooks/useGetUserAccountData";
import { useIncomingStreams } from "@/hooks/useIncomingStreams";
import { useOutgoingStreams } from "@/hooks/useOutgoingStreams";
import create from "zustand";
import { ReserveData } from "~~/types/types";

// Helper function to check if value is max uint256
const isMaxUint256 = (value: any) => {
  const maxUintStr = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
  return (
    value === maxUintStr ||
    value === "1.157920892373162e+59" ||
    value === Number(maxUintStr) ||
    value === Number("1.157920892373162e+59")
  );
};

// Earnings data interface
interface EarningsData {
  reserveAddress: string;
  symbol: string;
  currentBalance: string;
  estimatedEarnings: string;
  earningsUSD: string;
  apy: string;
  lastUpdated: number;
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

// extiende tu tipo LendingStore:
type LendingStore = {
  // ya existentes
  refreshKey: number;
  refreshComponents: () => void;

  selectedReserveAsset: ReserveData;
  setSelectedReserveAsset: (r: ReserveData) => void;

  // User account data
  userAccountData: any;
  userAccountLoading: boolean;
  userAccountError: boolean;
  setUserAccountData: (data: any) => void;
  setUserAccountLoading: (loading: boolean) => void;
  setUserAccountError: (error: boolean) => void;
  refreshUserAccountData: () => void;

  // Formatted user account data
  formattedHealthFactor: number | string;
  formattedLTV: string;
  formattedTotalCollateralBase: string;
  formattedTotalDebtBase: string;
  formattedAvailableBorrowsBase: string;
  updateFormattedData: () => void;

  // Earnings tracking
  earningsData: EarningsData[];
  totalEarningsUSD: string;
  setEarningsData: (data: EarningsData[]) => void;
  setTotalEarningsUSD: (total: string) => void;
  refreshEarnings: () => void;

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

  // Currency formatting utility
  formatBalanceWithCurrency: (balance: string, symbol: string) => string;

  // Helper function to calculate how much user can borrow of specific asset
  calculateUserBorrowableAmount: (reserve: any) => string;

  // Helper function to format user borrowable amount with currency
  formatUserBorrowableAmount: (reserve: any) => string;
};

export const useLendingStore = create<LendingStore>((set, get) => ({
  refreshKey: 0,
  refreshComponents: () => set(state => ({ refreshKey: state.refreshKey + 1 })),

  selectedReserveAsset: fillerLoadingReserve,
  setSelectedReserveAsset: reserve => set({ selectedReserveAsset: reserve }),

  // User account data state
  userAccountData: null,
  userAccountLoading: false,
  userAccountError: false,
  setUserAccountData: data => set({ userAccountData: data }),
  setUserAccountLoading: loading => set({ userAccountLoading: loading }),
  setUserAccountError: error => set({ userAccountError: error }),
  refreshUserAccountData: () => {
    // This will be called from the sync hook to trigger a refresh
    // The actual refresh is handled by the useUserAccountDataSync hook
    set(state => ({ refreshKey: state.refreshKey + 1 }));
  },

  // Formatted user account data
  formattedHealthFactor: "∞",
  formattedLTV: "0.0000",
  formattedTotalCollateralBase: "0.0000",
  formattedTotalDebtBase: "0.0000",
  formattedAvailableBorrowsBase: "0.0000",
  updateFormattedData: () => {
    const { userAccountData } = get();

    if (!userAccountData) {
      set({
        formattedHealthFactor: "∞",
        formattedLTV: "0.0000",
        formattedTotalCollateralBase: "0.0000",
        formattedTotalDebtBase: "0.0000",
        formattedAvailableBorrowsBase: "0.0000",
      });
      return;
    }

    const formattedHealthFactor = userAccountData?.healthFactor
      ? isMaxUint256(userAccountData.healthFactor)
        ? "∞"
        : Number(userAccountData.healthFactor) / 1e18
      : "∞";

    const formattedLTV = userAccountData?.ltv ? (Number(userAccountData.ltv) * 1e15).toFixed(2) : "0.0000";

    const formattedTotalCollateralBase = userAccountData?.totalCollateralBase
      ? (Number(userAccountData.totalCollateralBase) * 1e10).toFixed(3)
      : "0.0000";

    const formattedTotalDebtBase = userAccountData?.totalDebtBase
      ? (Number(userAccountData.totalDebtBase) * 1e10).toFixed(3)
      : "0.0000";

    const formattedAvailableBorrowsBase = userAccountData?.availableBorrowsBase
      ? (Number(userAccountData.availableBorrowsBase) * 1e10).toFixed(3)
      : "0.0000";

    set({
      formattedHealthFactor,
      formattedLTV,
      formattedTotalCollateralBase,
      formattedTotalDebtBase,
      formattedAvailableBorrowsBase,
    });
  },

  // Earnings tracking state
  earningsData: [],
  totalEarningsUSD: "0",
  setEarningsData: (data: EarningsData[]) => set({ earningsData: data }),
  setTotalEarningsUSD: (total: string) => set({ totalEarningsUSD: total }),
  refreshEarnings: () => {
    // This will trigger a refresh of earnings data
    set(state => ({ refreshKey: state.refreshKey + 1 }));
  },

  // Streams data state
  streamsData: null,
  streamsLoading: false,
  streamsError: null,
  setStreamsData: (data: any) => set({ streamsData: data }),
  setStreamsLoading: (loading: boolean) => set({ streamsLoading: loading }),
  setStreamsError: (error: Error | null) => set({ streamsError: error }),
  refreshStreams: () => {
    // This will trigger a refresh of streams data
    set(state => ({ refreshKey: state.refreshKey + 1 }));
  },

  // Incoming streams data state
  incomingStreamsData: null,
  incomingStreamsLoading: false,
  incomingStreamsError: null,
  setIncomingStreamsData: (data: any) => set({ incomingStreamsData: data }),
  setIncomingStreamsLoading: (loading: boolean) => set({ incomingStreamsLoading: loading }),
  setIncomingStreamsError: (error: Error | null) => set({ incomingStreamsError: error }),
  refreshIncomingStreams: () => {
    // This will trigger a refresh of incoming streams data
    set(state => ({ refreshKey: state.refreshKey + 1 }));
  },

  // Transformed streams for display
  transformedStreams: [],
  transformedIncomingStreams: [],
  updateTransformedStreams: () => {
    const { streamsData } = get();
    if (!streamsData?.streams) {
      set({ transformedStreams: [] });
      return;
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
    set({ transformedStreams: transformed });
  },

  // Transformed incoming streams for display
  updateTransformedIncomingStreams: () => {
    const { incomingStreamsData } = get();
    if (!incomingStreamsData?.streams) {
      set({ transformedIncomingStreams: [] });
      return;
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
    set({ transformedIncomingStreams: transformed });
  },

  // Currency formatting utility
  formatBalanceWithCurrency: (balance: string, symbol: string) => {
    const numBalance = parseFloat(balance);
    if (isNaN(numBalance)) return "0";

    switch (symbol) {
      case "USDC":
      case "USDT":
        return `$${numBalance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      case "WETH":
      case "cbETH":
      case "wstETH":
        return `${numBalance.toLocaleString("en-US", { minimumFractionDigits: 4, maximumFractionDigits: 4 })} ETH`;
      case "XOC":
      case "MXNe":
        return `$${numBalance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN`;
      default:
        return numBalance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 6 });
    }
  },

  // Helper function to calculate how much user can borrow of specific asset
  calculateUserBorrowableAmount: (reserve: any) => {
    // CETES is not borrowable, return special indicator
    if (reserve.symbol === "CETES") {
      return "❌";
    }

    if (!get().userAccountData?.availableBorrowsBase || !reserve.priceInMarketReferenceCurrency) {
      return "0";
    }

    // availableBorrowsBase is in USD (market reference currency)
    const availableBorrowsUSD = Number(get().userAccountData.availableBorrowsBase) * 1e10; // Convert from base units

    // priceInMarketReferenceCurrency is the price of the asset in USD (with 8 decimals)
    const assetPriceUSD = Number(reserve.priceInMarketReferenceCurrency) / 1e8;

    if (assetPriceUSD === 0) {
      return "0";
    }

    // Calculate how much of this asset the user can borrow
    const borrowableAmount = availableBorrowsUSD / assetPriceUSD;
    const formattedAmount = borrowableAmount.toFixed(6);

    return formattedAmount;
  },

  // Helper function to format user borrowable amount with currency
  formatUserBorrowableAmount: (reserve: any) => {
    const borrowableAmount = get().calculateUserBorrowableAmount(reserve);

    // If it's CETES, return the red cross directly
    if (borrowableAmount === "❌") {
      return "❌";
    }

    return get().formatBalanceWithCurrency(borrowableAmount, reserve.symbol);
  },
}));

// Custom hook to sync user account data with the store
export const useUserAccountDataSync = (userAddress: string) => {
  const { userAccountData, isLoading, isError, refetch } = useGetUserAccountData(userAddress);
  const { setUserAccountData, setUserAccountLoading, setUserAccountError, updateFormattedData } = useLendingStore();

  useEffect(() => {
    setUserAccountLoading(isLoading);
    setUserAccountError(isError);
  }, [isLoading, isError, setUserAccountLoading, setUserAccountError]);

  useEffect(() => {
    setUserAccountData(userAccountData);
  }, [userAccountData, setUserAccountData]);

  useEffect(() => {
    updateFormattedData();
  }, [userAccountData, updateFormattedData]);

  // Listen for refresh requests and trigger refetch
  useEffect(() => {
    const unsubscribe = useLendingStore.subscribe(() => {
      if (refetch) {
        refetch();
      }
    });
    return unsubscribe;
  }, [refetch]);
};

// Custom hook to sync streams data with the store
export const useStreamsDataSync = (userAddress: string) => {
  const { data: streamsData, loading: streamsLoading, error: streamsError } = useOutgoingStreams(userAddress);
  const { setStreamsData, setStreamsLoading, setStreamsError, updateTransformedStreams } = useLendingStore();

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
  } = useLendingStore();

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
