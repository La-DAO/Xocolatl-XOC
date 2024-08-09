import { houseOfCoinABI } from "@/app/components/abis/houseofcoin";
import { parseEther } from "viem";
import { useWriteContract } from "wagmi";

/**
 * Custom hook to handle repay transactions.
 * @returns {Object} - The repay handler function and contract interaction states.
 */
const useRepay = () => {
  // Hook for writing to a smart contract
  const { writeContract, error, data, isPending, isSuccess } = useWriteContract();

  /**
   * Handles the repay transaction by writing to the smart contract.
   * @param {string} backedTokenID - The ID of the backed token.
   * @param {string} amount - The amount to repay in ether.
   */
  const handleRepay = (backedTokenID: string, amount: string) => {
    if (!houseOfCoinABI || !backedTokenID || !amount) {
      console.error("Required parameters are not properly defined.");
      return;
    }

    try {
      writeContract({
        address: "0x7ed1aCD46dE3a4E63f2D3b0f4fB5532e113a520B",
        abi: houseOfCoinABI,
        functionName: "paybackCoin",
        args: [backedTokenID, parseEther(amount)],
      });
    } catch (err) {
      console.error("Error executing contract function:", err);
    }
  };

  return { handleRepay, isError: !!error, error, data, isPending, isSuccess };
};

export default useRepay;
