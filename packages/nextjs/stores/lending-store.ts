import { fillerLoadingReserve } from "@/app/lending/constants";
import create from "zustand";
import { ReserveData } from "~~/types/types";

// extiende tu tipo LendingStore:
type LendingStore = {
  // ya existentes
  refreshKey: number;
  refreshComponents: () => void;

  selectedReserveAsset: ReserveData;
  setSelectedReserveAsset: (r: ReserveData) => void;
};

export const useLendingStore = create<LendingStore>(set => ({
  refreshKey: 0,
  refreshComponents: () => set(state => ({ refreshKey: state.refreshKey + 1 })),

  selectedReserveAsset: fillerLoadingReserve,
  setSelectedReserveAsset: reserve => set({ selectedReserveAsset: reserve }),
}));
