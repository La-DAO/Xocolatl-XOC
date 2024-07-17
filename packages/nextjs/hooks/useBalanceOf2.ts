// hooks/useTokenBalance.ts
import { useEffect, useState } from "react";
import { useReadContract } from "wagmi";

// Definir el ABI de ERC20 directamente
const ERC20ABI = [
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

interface TokenBalanceProps {
  tokenAddress: `0x${string}`;
  walletAddress: `0x${string}`;
}

export function useTokenBalance({ tokenAddress, walletAddress }: TokenBalanceProps) {
  const [balance, setBalance] = useState<string | null>("loading");

  const { data, isError, isLoading } = useReadContract({
    address: tokenAddress,
    abi: ERC20ABI,
    functionName: "balanceOf",
    args: [walletAddress],
  });

  useEffect(() => {
    if (isError) {
      console.error("Error fetching balance");
      setBalance(null);
    } else if (isLoading) {
      setBalance("loading");
    } else if (data) {
      // Convertir de wei a ether manualmente
      const balanceInEther = (Number(data) / 1e18).toFixed(7);
      setBalance(balanceInEther);
    }
  }, [data, isError, isLoading]);

  return balance;
}
