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
 * Custom hook to handle withdraw transactions.
 * @returns {Object} - The withdraw handler function and contract interaction states.
 */
const useWithdraw = () => {
  // Hook for writing to a smart contract
  const { writeContract, error, data: withdrawHash } = useWriteContract();
  const chainId = useChainId();
  const pool = externalContracts[8453].Pool;

  /**
   * Handles the withdraw transaction by writing to the smart contract.
   * @param {Address} asset - The address of the asset to withdraw.
   * @param {BigInt} amount - The amount to withdraw in wei.
   * @param {Address} to - The address to receive the underlying asset.
   */
  const handleWithdraw = async (asset: Address, amount: bigint, to: Address) => {
    if (!pool || !pool.abi || !pool.address) {
      console.error("Pool contract is not properly defined.");
      return;
    }

    try {
      await writeContract({
        abi: pool.abi,
        address: pool.address,
        functionName: "withdraw",
        args: [asset, amount, to],
        dataSuffix: dataSuffix as `0x${string}`,
      });
    } catch (err) {
      console.error("Error executing contract function:", err);
    }
  };

  // Submit referral after successful withdraw
  useEffect(() => {
    if (withdrawHash && chainId !== undefined) {
      submitReferral({
        txHash: withdrawHash,
        chainId,
      });
    }
  }, [withdrawHash, chainId]);

  return { handleWithdraw, isError: !!error, error, withdrawHash };
};

export default useWithdraw;
