import UiPoolDataProviderV3ABI from "@/abis/UiPoolDataProviderV3";
import CONFIG from "@/config";
import { Abi } from "abitype";
import { GenericContract, GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * Helper function to format Ethereum address.
 * @param address - Ethereum address to format.
 * @returns Formatted Ethereum address.
 * @throws Error if the address is invalid.
 */
const formatAddress = (address: string): `0x${string}` => {
  if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
    throw new Error(`Invalid Ethereum address: ${address}`);
  }
  return address as `0x${string}`;
};

/**
 * External contracts declaration mapped by chain ID and contract name.
 */
const externalContracts: { [chainId: number]: { [contractName: string]: GenericContract } } = {
  8453: {
    UiPoolDataProviderV3: {
      address: formatAddress(CONFIG.UI_POOL_DATA_PROVIDER_V3_ADDR), // Address of UiPoolDataProviderV3 contract
      abi: UiPoolDataProviderV3ABI as Abi, // ABI of UiPoolDataProviderV3 contract
      inheritedFunctions: {}, // Inherited functions of UiPoolDataProviderV3 contract (if any)
    },
  },
};

export default externalContracts satisfies GenericContractsDeclaration;
