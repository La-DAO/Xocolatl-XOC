import { useEffect } from "react";
import { chainIds } from "@/app/constants/chains";
import { ContractData, contractData } from "@/app/constants/contracts";
import { Abi, Address } from "viem";
import { useChainId, useReadContract, useReadContracts } from "wagmi";
import { useAccount } from "wagmi";
import create from "zustand";
import { assetsAccountantABI } from "~~/app/components/abis/xocabis";
import { XOCABI } from "~~/app/components/abis/xocabis";

// Types for CDP data
interface Deposit {
  symbol: string;
  amount: number | string;
  minted: number;
  mintingPower: number;
  houseofReserveContract: string;
  assetContract: string;
  houseOfCoinContract: string;
  assetsAccountantContract: string;
  userHealthRatio: number;
  backedTokenID: string;
}

interface CDPStats {
  totalMinted: string;
  totalDeposits: Record<string, number>;
  chainName: string;
  chainId: number;
}

interface SelectedAsset {
  assetName: string;
  houseOfReserveContract: Address;
  assetContract: Address;
  houseOfCoinContract: Address;
  assetsAccountantContract: Address;
  backedTokenID?: bigint | number;
  formattedMintingPower?: number[];
  formattedUserHealthRatio?: number[];
  mintedAmount?: number;
}

// Chain offsets for contract calls
const chainOffsets: Record<number, number> = {
  [chainIds.BNB]: 0,
  [chainIds.POLYGON]: 2,
  [chainIds.BASE]: 5,
  [chainIds.OPTIMISM]: 7,
};

// Helper function to generate deposits from contract data
const generateDeposits = (
  contractData: ContractData,
  balances: number[],
  mints: number[],
  mintingPowers: string[],
  healthRatios: string[],
): Record<number, Deposit[]> => {
  const deposits: Record<number, Deposit[]> = {};

  Object.entries(contractData).forEach(([chainIdStr, data]) => {
    const chainIdNum = parseInt(chainIdStr, 10);
    const offset = chainOffsets[chainIdNum] ?? 0;
    const assetsArray = Object.entries(data.assets);

    deposits[chainIdNum] = assetsArray.map(([symbol, asset], localIndex) => {
      const idx = offset + localIndex;

      return {
        symbol,
        amount: parseFloat(balances[idx]?.toFixed(6) || "0"),
        minted: Number(mints[idx] || 0),
        mintingPower: parseFloat(mintingPowers[idx] || "0"),
        userHealthRatio: parseFloat(healthRatios[idx] || "0"),
        houseofReserveContract: data.houseOfReserves[symbol],
        assetContract: asset.contract,
        houseOfCoinContract: data.houseOfCoin,
        assetsAccountantContract: data.assetsAccountant,
        backedTokenID: asset.backedTokenID || "",
      };
    });
  });

  return deposits;
};

// CDP Store type
type CDPStore = {
  // Refresh mechanism
  refreshKey: number;
  refreshComponents: () => void;

  // CDP Stats data
  cdpStats: CDPStats | null;
  cdpStatsLoading: boolean;
  cdpStatsError: boolean;
  setCdpStats: (stats: CDPStats) => void;
  setCdpStatsLoading: (loading: boolean) => void;
  setCdpStatsError: (error: boolean) => void;

  // User deposits data
  userDeposits: Record<number, Deposit[]>;
  userDepositsLoading: boolean;
  userDepositsError: boolean;
  setUserDeposits: (deposits: Record<number, Deposit[]>) => void;
  setUserDepositsLoading: (loading: boolean) => void;
  setUserDepositsError: (error: boolean) => void;

  // Selected asset for modals
  selectedAsset: SelectedAsset | null;
  setSelectedAsset: (asset: SelectedAsset | null) => void;

  // Modal states
  isDepositModalOpen: boolean;
  isWithdrawModalOpen: boolean;
  isMintModalOpen: boolean;
  isRepayModalOpen: boolean;
  setDepositModalOpen: (open: boolean) => void;
  setWithdrawModalOpen: (open: boolean) => void;
  setMintModalOpen: (open: boolean) => void;
  setRepayModalOpen: (open: boolean) => void;

  // Utility functions
  resetCDPData: () => void;
  refreshCDPData: () => void;
};

export const useCDPStore = create<CDPStore>(set => ({
  // Refresh mechanism
  refreshKey: 0,
  refreshComponents: () => set(state => ({ refreshKey: state.refreshKey + 1 })),

  // CDP Stats state
  cdpStats: null,
  cdpStatsLoading: false,
  cdpStatsError: false,
  setCdpStats: (stats: CDPStats) => set({ cdpStats: stats }),
  setCdpStatsLoading: (loading: boolean) => set({ cdpStatsLoading: loading }),
  setCdpStatsError: (error: boolean) => set({ cdpStatsError: error }),

  // User deposits state
  userDeposits: {},
  userDepositsLoading: false,
  userDepositsError: false,
  setUserDeposits: (deposits: Record<number, Deposit[]>) => set({ userDeposits: deposits }),
  setUserDepositsLoading: (loading: boolean) => set({ userDepositsLoading: loading }),
  setUserDepositsError: (error: boolean) => set({ userDepositsError: error }),

  // Selected asset state
  selectedAsset: null,
  setSelectedAsset: (asset: SelectedAsset | null) => set({ selectedAsset: asset }),

  // Modal states
  isDepositModalOpen: false,
  isWithdrawModalOpen: false,
  isMintModalOpen: false,
  isRepayModalOpen: false,
  setDepositModalOpen: (open: boolean) => set({ isDepositModalOpen: open }),
  setWithdrawModalOpen: (open: boolean) => set({ isWithdrawModalOpen: open }),
  setMintModalOpen: (open: boolean) => set({ isMintModalOpen: open }),
  setRepayModalOpen: (open: boolean) => set({ isRepayModalOpen: open }),

  // Utility functions
  resetCDPData: () =>
    set({
      cdpStats: null,
      cdpStatsLoading: false,
      cdpStatsError: false,
      userDeposits: {},
      userDepositsLoading: false,
      userDepositsError: false,
      selectedAsset: null,
      isDepositModalOpen: false,
      isWithdrawModalOpen: false,
      isMintModalOpen: false,
      isRepayModalOpen: false,
    }),

  refreshCDPData: () => {
    set(state => ({ refreshKey: state.refreshKey + 1 }));
  },
}));

// Chain names mapping
const chainNames: { [key: number]: string } = {
  56: "Binance Smart Chain",
  137: "Polygon",
  8453: "Base",
  10: "Optimism",
};

// Custom hook to sync CDP stats with the store
export const useCDPStatsSync = () => {
  const chainId = useChainId();
  const { setCdpStats, setCdpStatsLoading, setCdpStatsError } = useCDPStore();

  // Read total minted XOC
  const {
    data: totalMintedData,
    isLoading: totalMintedLoading,
    error: totalMintedError,
  } = useReadContract({
    address: "0xa411c9Aa00E020e4f88Bc19996d29c5B7ADB4ACf" as Address,
    abi: XOCABI,
    functionName: "totalSupply",
  });

  // Read total deposits from House of Reserve contracts
  const config = contractData[chainId];
  const houseOfReserveContracts = Object.entries(config?.houseOfReserves || {}).map(([, address]) => ({
    address: address as Address,
    abi: [
      { name: "totalDeposits", type: "function", stateMutability: "view", inputs: [], outputs: [{ type: "uint256" }] },
    ] as Abi,
    functionName: "totalDeposits",
  }));

  const { data: houseOfReserveData, isError: houseOfReserveError } = useReadContracts({
    contracts: houseOfReserveContracts,
  });

  useEffect(() => {
    setCdpStatsLoading(totalMintedLoading);
    setCdpStatsError(!!(totalMintedError || houseOfReserveError));
  }, [totalMintedLoading, totalMintedError, houseOfReserveError, setCdpStatsLoading, setCdpStatsError]);

  useEffect(() => {
    if (totalMintedData && houseOfReserveData && config) {
      const totalMinted = totalMintedData.toString();
      const assetNames = Object.keys(config.houseOfReserves);
      const totalDeposits: Record<string, number> = {};

      houseOfReserveData.forEach((result, index) => {
        if (result.result && assetNames[index]) {
          totalDeposits[assetNames[index]] = Number(result.result) / 10 ** 18;
        }
      });

      const cdpStats: CDPStats = {
        totalMinted,
        totalDeposits,
        chainName: chainNames[chainId] || "Unknown Chain",
        chainId,
      };

      setCdpStats(cdpStats);
    }
  }, [totalMintedData, houseOfReserveData, config, chainId, setCdpStats]);
};

// Custom hook to sync user deposits with the store
export const useUserDepositsSync = () => {
  const { setUserDeposits, setUserDepositsLoading, setUserDepositsError } = useCDPStore();
  const { address } = useAccount();
  const chainId = useChainId();

  // Get contract addresses for current chain
  const assetsAccountantContractAddress = contractData[chainId]?.assetsAccountant as Address;

  // Prepare balanceOfBatch arguments based on chain
  let balanceOfBatchArgs: readonly any[] = [];
  if (chainId === chainIds.BNB) {
    balanceOfBatchArgs = [
      [address, address],
      [
        "109392682290811008908886113795024894114858297692101491428581960053892280371532",
        "85925987621059561469642133971917522532759533358859710307334868485990845307587",
      ],
    ];
  } else if (chainId === chainIds.POLYGON) {
    balanceOfBatchArgs = [
      [address, address],
      [
        "109392682290811008908886113795024894114858297692101491428581960053892280371532",
        "85925987621059561469642133971917522532759533358859710307334868485990845307587",
      ],
    ];
  } else if (chainId === chainIds.BASE) {
    balanceOfBatchArgs = [
      [address, address, address, address, address],
      [
        "109392682290811008908886113795024894114858297692101491428581960053892280371532",
        "85925987621059561469642133971917522532759533358859710307334868485990845307587",
        "109392682290811008908886113795024894114858297692101491428581960053892280371533",
        "109392682290811008908886113795024894114858297692101491428581960053892280371534",
        "109392682290811008908886113795024894114858297692101491428581960053892280371535",
      ],
    ];
  } else if (chainId === chainIds.OPTIMISM) {
    balanceOfBatchArgs = [
      [address, address],
      [
        "109392682290811008908886113795024894114858297692101491428581960053892280371532",
        "85925987621059561469642133971917522532759533358859710307334868485990845307587",
      ],
    ];
  }

  // Read user balances
  const {
    data: balanceData,
    isLoading: balanceLoading,
    error: balanceError,
  } = useReadContract({
    address: assetsAccountantContractAddress,
    abi: assetsAccountantABI,
    functionName: "balanceOfBatch",
    args: balanceOfBatchArgs,
  });

  // Read user mints
  const {
    data: mintData,
    isLoading: mintLoading,
    error: mintError,
  } = useReadContract({
    address: assetsAccountantContractAddress,
    abi: assetsAccountantABI,
    functionName: "balanceOfBatch",
    args: balanceOfBatchArgs,
  });

  // Read minting powers
  const {
    data: mintingPowerData,
    isLoading: mintingPowerLoading,
    error: mintingPowerError,
  } = useReadContract({
    address: assetsAccountantContractAddress,
    abi: assetsAccountantABI,
    functionName: "balanceOfBatch",
    args: balanceOfBatchArgs,
  });

  // Read health ratios
  const {
    data: healthRatioData,
    isLoading: healthRatioLoading,
    error: healthRatioError,
  } = useReadContract({
    address: assetsAccountantContractAddress,
    abi: assetsAccountantABI,
    functionName: "balanceOfBatch",
    args: balanceOfBatchArgs,
  });

  const isLoading = balanceLoading || mintLoading || mintingPowerLoading || healthRatioLoading;
  const hasError = balanceError || mintError || mintingPowerError || healthRatioError;

  useEffect(() => {
    setUserDepositsLoading(isLoading);
    setUserDepositsError(!!hasError);
  }, [isLoading, hasError, setUserDepositsLoading, setUserDepositsError]);

  useEffect(() => {
    if (balanceData && mintData && mintingPowerData && healthRatioData) {
      const balances = Array.isArray(balanceData) ? balanceData.map(b => Number(b) / 10 ** 18) : [];
      const mints = Array.isArray(mintData) ? mintData.map(m => Number(m) / 10 ** 18) : [];
      const mintingPowers = Array.isArray(mintingPowerData) ? mintingPowerData.map(mp => mp.toString()) : [];
      const healthRatios = Array.isArray(healthRatioData) ? healthRatioData.map(hr => hr.toString()) : [];

      const deposits = generateDeposits(contractData, balances, mints, mintingPowers, healthRatios);
      setUserDeposits(deposits);
    }
  }, [balanceData, mintData, mintingPowerData, healthRatioData, setUserDeposits]);
};
