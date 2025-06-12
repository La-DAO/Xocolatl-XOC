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
 * Custom hook to handle supply transactions.
 * @returns {Object} - The supply handler function and contract interaction states.
 */
const useSupply = () => {
  // Hook for writing to a smart contract
  const { writeContract, isSuccess, error, data: supplyHash } = useWriteContract();
  const chainId = useChainId();
  const pool = externalContracts[8453].Pool;

  /**
   * Handles the supply transaction by writing to the smart contract.
   * @param {Address} asset - The address of the asset to supply.
   * @param {BigInt} amount - The amount to supply in wei.
   * @param {Address} onBehalfOf - The address on behalf of which the supply is being made.
   * @param {number} [referralCode=0] - The referral code for the transaction.
   */
  const handleSupply = (asset: Address, amount: bigint, onBehalfOf: Address, referralCode = 0) => {
    if (!pool || !pool.abi || !pool.address) {
      console.error("Pool contract is not properly defined.");
      return;
    }

    try {
      writeContract({
        abi: pool.abi,
        address: pool.address,
        functionName: "supply",
        args: [asset, amount, onBehalfOf, referralCode],
        dataSuffix: dataSuffix as `0x${string}`,
      });
    } catch (err) {
      console.error("Error executing contract function:", err);
    }
  };

  // Submit referral after successful supply
  useEffect(() => {
    if (isSuccess && supplyHash) {
      submitReferral({
        txHash: supplyHash,
        chainId,
      });
    }
  }, [isSuccess, supplyHash, chainId]);

  return { handleSupply, isError: !!error, error, supplyHash, isSuccess };
};

export default useSupply;
