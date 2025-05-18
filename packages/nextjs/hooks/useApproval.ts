import { ERC20ABI } from "@/app/components/abis/erc20";
import { parseEther } from "viem";
import { Address } from "viem";
import { useWriteContract } from "wagmi";

export const useApproval = (houseOfReserveContract: Address, assetContract: Address) => {
  const { writeContract, isError, isSuccess, isPending, data: hash } = useWriteContract();

  const approve = async (amount: string) => {
    try {
      writeContract({
        abi: ERC20ABI,
        address: assetContract,
        functionName: "approve",
        args: [houseOfReserveContract, parseEther(amount)],
      });
    } catch (err) {
      console.error("Approval failed 1", err);
    }
  };

  return {
    approve,
    isError,
    isSuccess,
    isPending,
    hash,
  };
};
