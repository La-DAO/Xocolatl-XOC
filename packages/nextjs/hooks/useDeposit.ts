import { houseOfReserveABI } from "@/app/components/abis/houseofreserve";
import { Address } from "viem";
import { useWriteContract } from "wagmi";

export const useDeposit = (houseOfReserveContract: Address) => {
  const { writeContract, isPending, isSuccess, isError, status, error, data: hash } = useWriteContract();

  const deposit = async (amount: string) => {
    try {
      const amountInBigInt = BigInt(Math.floor(parseFloat(amount) * 10 ** 18)); // Adjust the multiplier based on the token's decimals
      await writeContract({
        address: houseOfReserveContract,
        abi: houseOfReserveABI,
        functionName: "deposit",
        args: [amountInBigInt],
      });
    } catch (err) {
      console.error("Deposit failed", err);
    }
  };

  return {
    deposit,
    isPending,
    isSuccess,
    isError,
    status,
    error,
    hash,
  };
};
