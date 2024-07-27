import { houseOfCoinABI } from "@/app/components/abis/houseofcoin";
import { Address } from "viem";
import { useWriteContract } from "wagmi";

const useMint = (assetContract: Address, houseOfReserveContract: Address) => {
  const { writeContract, isError, isPending, isSuccess } = useWriteContract();

  const mint = async (amount: string) => {
    const amountInBigInt = Math.floor(parseFloat(amount) * 10 ** 18);
    try {
      writeContract({
        abi: houseOfCoinABI,
        functionName: "mintCoin",
        args: [assetContract, houseOfReserveContract, amountInBigInt],
        address: "0x7ed1aCD46dE3a4E63f2D3b0f4fB5532e113a520B",
      });
    } catch (error) {
      console.error("Error minting $XOC tokens:", error);
    }
  };
  return { mint, isError, isPending, isSuccess };
};

export default useMint;
