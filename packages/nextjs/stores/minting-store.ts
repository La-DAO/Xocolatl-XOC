import create from "zustand";

interface MintingStoreState {
  // Example state values
  totalMinted: number;
  setTotalMinted: (value: number) => void;

  // Add more state as needed
  userHealthRatio: number;
  setUserHealthRatio: (value: number) => void;

  // You can add more fields as your app grows
}

export const useMintingStore = create<MintingStoreState>(set => ({
  totalMinted: 0,
  setTotalMinted: value => set({ totalMinted: value }),

  userHealthRatio: 0,
  setUserHealthRatio: value => set({ userHealthRatio: value }),
}));
