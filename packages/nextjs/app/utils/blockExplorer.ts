import { chainIds } from "@/app/constants/contracts";

export const getBlockExplorerUrl = (chainId: number): string => {
  switch (chainId) {
    case chainIds.BNB: // BNB Smart Chain Mainnet
      return "https://bscscan.com/tx/";
    case chainIds.POLYGON: // Polygon Mainnet
      return "https://polygonscan.com/tx/";
    case chainIds.BASE: // Base Mainnet
      return "https://basescan.org/tx/";
    default:
      return ""; // Fallback for unsupported networks
  }
};
