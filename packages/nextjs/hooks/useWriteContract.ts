import externalContracts from "@/contracts/externalContracts";
import { Address } from "viem";
import { useWriteContract } from "wagmi";

const pool = externalContracts[8453].pool;

/**
 * Custom hook to write data to the UiPoolDataProviderV3 contract.
 * Handles the correct function for setting collateral.
 */
const useWriteContracts = () => {
  const { writeContract, error, data } = useWriteContract();
  const pool = externalContracts[8453].Pool;

  const handleSetUserUseReserveAsCollateral = (asset: Address, useAsCollateral: boolean) => {
    if (!pool || !pool.abi || !pool.address) {
      console.error("Pool contract is not properly defined.");
      return;
    }

    try {
      writeContract({
        abi: pool.abi,
        address: pool.address,
        functionName: "setUserUseReserveAsCollateral",
        args: [asset, useAsCollateral],
      });
    } catch (err) {
      console.error("Error executing contract function:", err);
    }
  };

  return { handleSetUserUseReserveAsCollateral, isError: !!error, error, data };
};

export default useWriteContracts;
