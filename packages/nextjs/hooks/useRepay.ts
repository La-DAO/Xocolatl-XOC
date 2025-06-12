import { useEffect } from "react";
import externalContracts from "@/contracts/externalContracts";
import { getDataSuffix, submitReferral } from "@divvi/referral-sdk";
import { Address } from "viem";
import { useChainId, useWriteContract } from "wagmi";

const dataSuffix = getDataSuffix({
  consumer: "0xC863DFEE737C803c93aF4b6b27029294f6a56eB5",
  providers: ["0xc95876688026be9d6fa7a7c33328bd013effa2bb"],
});

/**
 * Custom hook to handle repay transactions.
 * @returns {Object} - The repay handler function and contract interaction states.
 */
const useRepay = () => {
  // Hook for writing to a smart contract
  const { writeContract, error, data: repayHash, isPending: isRepayPending } = useWriteContract();
  const chainId = useChainId();
  const pool = externalContracts[8453].Pool;

  /**
   * Handles the repay transaction by writing to the smart contract.
   * @param {Address} asset - The address of the asset to repay.
   * @param {BigInt} amount - The amount to repay in wei.
   * @param {number} interestRateMode - The interest rate mode of the debt (1 for stable, 2 for variable).
   * @param {Address} onBehalfOf - The address on behalf of whom the repayment is being made.
   */
  const handleRepay = async (asset: Address, amount: bigint, interestRateMode: number, onBehalfOf: Address) => {
    if (!pool || !pool.abi || !pool.address) {
      console.error("Pool contract is not properly defined.");
      return;
    }

    try {
      await writeContract({
        abi: pool.abi,
        address: pool.address,
        functionName: "repay",
        args: [asset, amount, interestRateMode, onBehalfOf],
        dataSuffix: dataSuffix as `0x${string}`,
      });
    } catch (err) {
      console.error("Error executing contract function:", err);
    }
  };

  // Submit referral after successful repay
  useEffect(() => {
    if (repayHash && chainId !== undefined) {
      submitReferral({
        txHash: repayHash,
        chainId,
      });
    }
  }, [repayHash, chainId]);

  return { handleRepay, isError: !!error, error, repayHash, isRepayPending };
};

export default useRepay;
