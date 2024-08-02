import { houseOfCoinABI } from "@/app/components/abis/houseofcoin";
import { Address, parseEther } from "viem";
import { useWriteContract } from "wagmi";

const useMint = (assetContract: Address, houseOfReserveContract: Address, amount: string) => {
  const { writeContract, isError, isPending, isSuccess } = useWriteContract();

  writeContract({
    address: "0x7ed1aCD46dE3a4E63f2D3b0f4fB5532e113a520B",
    abi: houseOfCoinABI,
    functionName: "mintCoin",
    args: [assetContract, houseOfReserveContract, parseEther(amount)],
  });

  return { writeContract, isError, isPending, isSuccess };
};

export default useMint;
