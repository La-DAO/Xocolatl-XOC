import { chainIds } from "@/app/constants/chains";
import { ContractData } from "@/app/constants/contracts";
import { Address } from "viem";

type Asset = {
  name: string;
  maxLTV: string;
  liquidationThreshold: string;
  houseOfReserveContract: Address;
  assetContract: Address;
};

export const getBlockExplorerUrl = (chainId: number): string => {
  switch (chainId) {
    case chainIds.BNB: // BNB Smart Chain Mainnet
      return "https://bscscan.com/tx/";
    case chainIds.POLYGON: // Polygon Mainnet
      return "https://polygonscan.com/tx/";
    case chainIds.BASE: // Base Mainnet
      return "https://basescan.org/tx/";
    case chainIds.OPTIMISM: // Optimism Mainnet
      return "https://optimistic.etherscan.io/tx/";
    default:
      return ""; // Fallback for unsupported networks
  }
};

export const getAddrBlockExplorerUrl = (chainId: number): string => {
  switch (chainId) {
    case chainIds.BNB:
      return "https://bscscan.com/address/";
    case chainIds.POLYGON:
      return "https://polygonscan.com/address/";
    case chainIds.BASE:
      return "https://basescan.org/address/";
    case chainIds.OPTIMISM:
      return "https://optimistic.etherscan.io/address/";
    default:
      return "";
  }
};

export function createContractsArray(
  functionName: string,
  addresses: string[],
  houseOfCoinContract: { address: `0x${string}`; abi: any },
  userAddress: `0x${string}`,
): { address: `0x${string}`; abi: any; functionName: string; args: readonly unknown[] }[] {
  return addresses.map(contractAddress => ({
    address: houseOfCoinContract.address,
    abi: houseOfCoinContract.abi,
    functionName,
    args: [userAddress, contractAddress],
  }));
}

export function getContractAddress(address: string | undefined): `0x${string}` {
  if (!address) {
    throw new Error("Address is undefined. Check contractData.");
  }
  if (!address.startsWith("0x")) {
    throw new Error(`Address ${address} is invalid.`);
  }
  return address as `0x${string}`;
}

export const generateAssets = (contractData: ContractData) => {
  const assets: { [key: number]: Asset[] } = {};

  Object.entries(contractData).forEach(([chainId, data]) => {
    assets[parseInt(chainId)] = Object.entries(data.assets).map(([name, asset]) => ({
      name,
      maxLTV: asset.maxLTV,
      liquidationThreshold: asset.liquidationThreshold,
      houseOfReserveContract: data.houseOfReserves[name],
      assetContract: asset.contract,
    }));
  });

  return assets;
};
