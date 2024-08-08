import externalContracts from "@/contracts/externalContracts";
import { Address } from "viem";
import { useWriteContract } from "wagmi";

/**
 * Custom hook to handle repay transactions.
 * @returns {Object} - The repay handler function and contract interaction states.
 */
const useRepay = () => {
  // Hook for writing to a smart contract
  const { writeContract, error, data } = useWriteContract();
  const pool = externalContracts[8453].Pool;

  /**
   * Handles the repay transaction by writing to the smart contract.
   * @param {Address} asset - The address of the asset to repay.
   * @param {BigInt} amount - The amount to repay in wei.
   * @param {number} interestRateMode - The interest rate mode of the debt (1 for stable, 2 for variable).
   * @param {Address} onBehalfOf - The address on behalf of whom the repayment is being made.
   */
  const handleRepay = (asset: Address, amount: BigInt, interestRateMode: number, onBehalfOf: Address) => {
    if (!pool || !pool.abi || !pool.address) {
      console.error("Pool contract is not properly defined.");
      return;
    }

    try {
      writeContract({
        abi: pool.abi,
        address: pool.address,
        functionName: "repay",
        args: [asset, amount, interestRateMode, onBehalfOf],
      });
    } catch (err) {
      console.error("Error executing contract function:", err);
    }
  };

  return { handleRepay, isError: !!error, error, data };
};

export default useRepay;
