import { houseOfReserveABI } from "@/app/components/abis/houseofreserve";
import { Address } from "viem";
import { useWriteContract } from "wagmi";

export const useWithdraw = (houseOfReserveContract: Address) => {
  const { writeContract, isPending, isSuccess, isError, data: withdrawHash, error, status } = useWriteContract();

  const withdraw = async (amount: string) => {
    try {
      const amountInBigInt = BigInt(Math.floor(parseFloat(amount) * 10 ** 18)); // Adjust the multiplier based on the token's decimals
      await writeContract({
        address: houseOfReserveContract,
        abi: houseOfReserveABI,
        functionName: "withdraw",
        args: [amountInBigInt],
      });
    } catch (err) {
      console.error("Withdraw failed", err);
    }
  };

  return {
    withdraw,
    isPending,
    isSuccess,
    isError,
    error,
    withdrawHash,
    status,
  };
};
