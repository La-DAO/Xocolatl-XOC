import useAccountAddress from "@/hooks/useAccount";
import { useReadContract } from "wagmi";
import { assetsAccountantABI } from "~~/app/components/abis/xocabis";

const useReadDeposit = () => {
  const { address: walletAddress } = useAccountAddress();
  const AssetsAccountant = useReadContract({
    address: "0xB90996A70C957a1496e349434CF0E030A9f693A4",
    abi: assetsAccountantABI,
    functionName: "balanceOf",
    args: [walletAddress, "7249884297576192763949224262904801338033525667336087702159801204853428754755"],
  });
  return { AssetsAccountant };
};

export default useReadDeposit;
