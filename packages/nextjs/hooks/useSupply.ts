import externalContracts from "@/contracts/externalContracts";
import { Address } from "viem";
import { useWriteContract } from "wagmi";

/**
 * Custom hook to handle supply transactions.
 * @returns {Object} - The supply handler function and contract interaction states.
 */
const useSupply = () => {
  // Hook for writing to a smart contract
  const { writeContract, error, data } = useWriteContract();
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
      });
    } catch (err) {
      console.error("Error executing contract function:", err);
    }
  };

  return { handleSupply, isError: !!error, error, data };
};

export default useSupply;
