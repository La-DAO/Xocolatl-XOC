import { houseOfCoinABI } from "@/app/components/abis/houseofcoin";
import { Address, parseEther } from "viem";
import { useWriteContract } from "wagmi";

/**
 * Custom hook to handle mint transactions.
 * @returns {Object} - The mint handler function and contract interaction states.
 */
const useMint = () => {
  // Hook for writing to a smart contract
  const { writeContract, error, data: hash, isPending, isSuccess } = useWriteContract();

  /**
   * Handles the mint transaction by writing to the smart contract.
   * @param {Address} assetContract - The address of the asset contract.
   * @param {Address} houseOfReserveContract - The address of the house of reserve contract.
   * @param {string} amount - The amount to mint in ether.
   */
  const handleMint = (
    houseOfCoinContract: Address,
    assetContract: Address,
    houseOfReserveContract: Address,
    amount: string,
  ) => {
    if (!houseOfCoinABI || !assetContract || !houseOfReserveContract || !amount) {
      console.error("Required parameters are not properly defined.");
      return;
    }

    try {
      writeContract({
        address: houseOfCoinContract,
        abi: houseOfCoinABI,
        functionName: "mintCoin",
        args: [assetContract, houseOfReserveContract, parseEther(amount)],
      });
    } catch (err) {
      console.error("Error executing contract function:", err);
    }
  };

  return { handleMint, isError: !!error, error, hash, isPending, isSuccess };
};

export default useMint;
