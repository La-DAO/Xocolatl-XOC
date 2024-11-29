export const getBlockExplorerUrl = (chainId: number): string => {
  switch (chainId) {
    case 56: // BNB Smart Chain Mainnet
      return "https://bscscan.com/tx/";
    case 137: // Polygon Mainnet
      return "https://polygonscan.com/tx/";
    case 8453: // Base Mainnet
      return "https://basescan.org/tx/";
    default:
      return ""; // Fallback for unsupported networks
  }
};
