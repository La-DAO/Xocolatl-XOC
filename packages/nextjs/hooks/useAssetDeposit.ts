import { houseOfReserveABI } from "../app/components/abis/houseofreserve";
import { parseEther } from "viem";
import { useWriteContract } from "wagmi";

interface HOFContracts {
  [key: string]: string;
}

export const useAssetDeposit = (assetName: string) => {
  const houseOfReserveContracts: HOFContracts = {
    // Define your contract addresses here
    // Example:
    // "assetName": "0xContractAddress"
  };

  const contractAddress = houseOfReserveContracts[assetName];

  const { writeContract } = useWriteContract();

  const deposit = (amount: string) => {
    writeContract({
      abi: houseOfReserveABI,
      address: `0x${contractAddress}`,
      functionName: "deposit",
      args: [parseEther(amount)],
    });
  };

  return { deposit };
};
