import { houseOfReserveContracts } from "../app/cdp/components/houseOfReserveContracts";
import { houseOfReserveABI } from "../app/components/abis/houseofreserve";
import { parseEther } from "viem";
import { useWriteContract } from "wagmi";

interface HOFContracts {
  [key: string]: string;
}

export const useAssetDeposit = (assetName: string) => {
  const contractAddress = (houseOfReserveContracts as HOFContracts)[assetName];

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
