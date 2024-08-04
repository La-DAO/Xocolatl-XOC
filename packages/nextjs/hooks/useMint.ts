import { houseOfCoinABI } from "@/app/components/abis/houseofcoin";
import { Address, parseEther } from "viem";
import { useWriteContract } from "wagmi";

/**
 * Custom hook to handle mint transactions.
 * @returns {Object} - The mint handler function and contract interaction states.
 */
const useMint = () => {
  // Hook for writing to a smart contract
  const { writeContract, error, data, isPending, isSuccess } = useWriteContract();

  /**
   * Handles the mint transaction by writing to the smart contract.
   * @param {Address} assetContract - The address of the asset contract.
   * @param {Address} houseOfReserveContract - The address of the house of reserve contract.
   * @param {string} amount - The amount to mint in ether.
   */
  const handleMint = (assetContract: Address, houseOfReserveContract: Address, amount: string) => {
    if (!houseOfCoinABI || !assetContract || !houseOfReserveContract || !amount) {
      console.error("Required parameters are not properly defined.");
      return;
    }

    try {
      writeContract({
        address: "0x7ed1aCD46dE3a4E63f2D3b0f4fB5532e113a520B",
        abi: houseOfCoinABI,
        functionName: "mintCoin",
        args: [assetContract, houseOfReserveContract, parseEther(amount)],
      });
    } catch (err) {
      console.error("Error executing contract function:", err);
    }
  };

  return { handleMint, isError: !!error, error, data, isPending, isSuccess };
};

export default useMint;
