import Pool from "@/abis/Pool";
import UiPoolDataProviderV3ABI from "@/abis/UiPoolDataProviderV3";
import CONFIG from "@/config";
import { Abi } from "abitype";
import { GenericContract, GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * External contracts declaration mapped by chain ID and contract name.
 */
const externalContracts: { [chainId: number]: { [contractName: string]: GenericContract } } = {
  8453: {
    UiPoolDataProviderV3: {
      address: CONFIG.UI_POOL_DATA_PROVIDER_V3_ADDR, // Address of UiPoolDataProviderV3 contract
      abi: UiPoolDataProviderV3ABI as Abi, // ABI of UiPoolDataProviderV3 contract
      inheritedFunctions: {}, // Inherited functions of UiPoolDataProviderV3 contract (if any)
    },
    Pool: {
      address: CONFIG.POOL, // Address of Pool contract
      abi: Pool as Abi, // ABI of Pool contract
      inheritedFunctions: {}, // Inherited functions of Pool contract (if any)
    },
  },
};

export default externalContracts satisfies GenericContractsDeclaration;
