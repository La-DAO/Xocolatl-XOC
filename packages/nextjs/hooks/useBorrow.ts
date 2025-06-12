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
 * Custom hook to handle borrow transactions.
 * @returns {Object} - The borrow handler function and contract interaction states.
 */
const useBorrow = () => {
  const { writeContract, error, data: borrowHash } = useWriteContract();
  const chainId = useChainId();
  const pool = externalContracts[8453].Pool;

  /**
   * Handles the borrow transaction by writing to the smart contract.
   * @param {Address} asset - The address of the asset to borrow.
   * @param {BigInt} amount - The amount to borrow in wei.
   * @param {number} interestRateMode - The interest rate mode (1 for Stable, 2 for Variable).
   * @param {Address} onBehalfOf - The address on behalf of which the borrow is being made.
   * @param {number} [referralCode=0] - The referral code for the transaction.
   */
  const handleBorrow = async (
    asset: Address,
    amount: bigint,
    interestRateMode: number,
    onBehalfOf: Address,
    referralCode = 0,
  ) => {
    if (!pool || !pool.abi || !pool.address) {
      console.error("Pool contract is not properly defined.");
      return;
    }

    try {
      await writeContract({
        abi: pool.abi,
        address: pool.address,
        functionName: "borrow",
        args: [asset, amount, interestRateMode, referralCode, onBehalfOf],
        dataSuffix: dataSuffix as `0x${string}`,
      });
    } catch (err) {
      console.error("Error executing contract function:", err);
    }
  };

  // Submit referral after successful borrow
  useEffect(() => {
    if (borrowHash && chainId !== undefined) {
      submitReferral({
        txHash: borrowHash,
        chainId,
      });
    }
  }, [borrowHash, chainId]);

  return { handleBorrow, isError: !!error, error, borrowHash };
};

export default useBorrow;
