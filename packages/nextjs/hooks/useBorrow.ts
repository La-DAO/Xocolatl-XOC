import externalContracts from "@/contracts/externalContracts";
import { Address } from "viem";
import { useWriteContract } from "wagmi";

/**
 * Custom hook to handle borrow transactions.
 * @returns {Object} - The borrow handler function and contract interaction states.
 */
const useBorrow = () => {
  const { writeContract, error, data } = useWriteContract();
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
    amount: BigInt,
    interestRateMode: number,
    onBehalfOf: Address,
    referralCode: number = 0,
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
      });
    } catch (err) {
      console.error("Error executing contract function:", err);
    }
  };

  return { handleBorrow, isError: !!error, error, data };
};

export default useBorrow;
