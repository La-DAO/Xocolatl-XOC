import { useEffect } from "react";
import { fillerLoadingReserve } from "@/app/lending/constants";
import useGetUserAccountData from "@/hooks/useGetUserAccountData";
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
