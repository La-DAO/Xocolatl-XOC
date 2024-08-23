import externalContracts from "@/contracts/externalContracts";
import { Address } from "viem";
import { useWriteContract } from "wagmi";

/**
 * Custom hook to handle withdraw transactions.
 * @returns {Object} - The withdraw handler function and contract interaction states.
 */
const useWithdraw = () => {
  // Hook for writing to a smart contract
  const { writeContract, error, data } = useWriteContract();
  const pool = externalContracts[8453].Pool;

  /**
   * Handles the withdraw transaction by writing to the smart contract.
   * @param {Address} asset - The address of the asset to withdraw.
   * @param {BigInt} amount - The amount to withdraw in wei.
   * @param {Address} to - The address to receive the underlying asset.
   */
  const handleWithdraw = (asset: Address, amount: bigint, to: Address) => {
    if (!pool || !pool.abi || !pool.address) {
      console.error("Pool contract is not properly defined.");
      return;
    }

    try {
      writeContract({
        abi: pool.abi,
        address: pool.address,
        functionName: "withdraw",
        args: [asset, amount, to],
      });
    } catch (err) {
      console.error("Error executing contract function:", err);
    }
  };

  return { handleWithdraw, isError: !!error, error, data };
};

export default useWithdraw;
