import externalContracts from "@/contracts/externalContracts";
import { Address } from "viem";
import { useWriteContract } from "wagmi";

/**
 * Custom hook to handle setting user reserve as collateral.
 * @returns {Object} - The handler function and contract interaction states.
 */
const useSetUserUseReserveAsCollateral = () => {
  // Hook for writing to a smart contract
  const { writeContract, error, data } = useWriteContract();
  const pool = externalContracts[8453].Pool;

  /**
   * Handles the action of setting a user's reserve as collateral.
   * @param {Address} asset - The address of the asset to set as collateral.
   * @param {boolean} useAsCollateral - A flag indicating whether to use the asset as collateral.
   */
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

export default useSetUserUseReserveAsCollateral;
