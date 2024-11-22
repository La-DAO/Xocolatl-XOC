import { houseOfCoinABI } from "@/app/components/abis/houseofcoin";
import { Address, parseEther } from "viem";
import { useWriteContract } from "wagmi";

// import { houseOfCoinContract } from "~~/app/constants/contracts";

/**
 * Custom hook to handle repay transactions.
 * @returns {Object} - The repay handler function and contract interaction states.
 */
const useRepayCPD = () => {
  // Hook for writing to a smart contract
  const { writeContract, error, data: repayHash, isPending, isSuccess } = useWriteContract();

  /**
   * Handles the repay transaction by writing to the smart contract.
   * @param {string} backedTokenID - The ID of the backed token.
   * @param {string} amount - The amount to repay in ether.
   */
  const handleRepay = (houseOfCoinContract: Address, backedTokenID: string, amount: string) => {
    if (!houseOfCoinABI || !backedTokenID || !amount) {
      console.error("Required parameters are not properly defined.");
      return;
    }

    try {
      writeContract({
        address: houseOfCoinContract as Address,
        abi: houseOfCoinABI,
        functionName: "paybackCoin",
        args: [backedTokenID, parseEther(amount)],
      });
    } catch (err) {
      console.error("Error executing contract function:", err);
    }
  };

  return { handleRepay, isError: !!error, error, repayHash, isPending, isSuccess };
};

export default useRepayCPD;
