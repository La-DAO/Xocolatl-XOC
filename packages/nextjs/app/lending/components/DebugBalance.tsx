import React, { useEffect, useState } from "react";
import useAccountAddress from "@/hooks/useAccount";
import { Address } from "viem";
import { useReadContract } from "wagmi";

// ERC-20 ABI for balanceOf and decimals
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
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

interface DebugBalanceProps {
  aTokenAddress: Address;
  underlyingAssetAddress: Address;
  symbol: string;
}

const DebugBalance: React.FC<DebugBalanceProps> = ({ aTokenAddress, underlyingAssetAddress, symbol }) => {
  const { address: walletAddress } = useAccountAddress();
  const [debugInfo, setDebugInfo] = useState<any>({});

  // Read aToken balance
  const { data: aTokenBalanceRaw } = useReadContract({
    address: aTokenAddress,
    abi: ERC20ABI,
    functionName: "balanceOf",
    args: [walletAddress as Address],
  });

  // Read aToken decimals
  const { data: aTokenDecimals } = useReadContract({
    address: aTokenAddress,
    abi: ERC20ABI,
    functionName: "decimals",
  });

  // Read aToken symbol
  const { data: aTokenSymbol } = useReadContract({
    address: aTokenAddress,
    abi: ERC20ABI,
    functionName: "symbol",
  });

  // Read underlying token balance
  const { data: underlyingBalanceRaw } = useReadContract({
    address: underlyingAssetAddress,
    abi: ERC20ABI,
    functionName: "balanceOf",
    args: [walletAddress as Address],
  });

  // Read underlying token decimals
  const { data: underlyingDecimals } = useReadContract({
    address: underlyingAssetAddress,
    abi: ERC20ABI,
    functionName: "decimals",
  });

  useEffect(() => {
    if (aTokenBalanceRaw && aTokenDecimals && underlyingBalanceRaw && underlyingDecimals) {
      const aTokenBalance = Number(aTokenBalanceRaw) / Math.pow(10, Number(aTokenDecimals));
      const underlyingBalance = Number(underlyingBalanceRaw) / Math.pow(10, Number(underlyingDecimals));

      setDebugInfo({
        aTokenAddress,
        underlyingAssetAddress,
        aTokenSymbol: aTokenSymbol || "Unknown",
        aTokenBalanceRaw: aTokenBalanceRaw?.toString(),
        aTokenDecimals: Number(aTokenDecimals),
        aTokenBalance,
        underlyingBalanceRaw: underlyingBalanceRaw?.toString(),
        underlyingDecimals: Number(underlyingDecimals),
        underlyingBalance,
        difference: aTokenBalance - underlyingBalance,
      });
    }
  }, [
    aTokenBalanceRaw,
    aTokenDecimals,
    underlyingBalanceRaw,
    underlyingDecimals,
    aTokenSymbol,
    aTokenAddress,
    underlyingAssetAddress,
  ]);

  if (!debugInfo.aTokenBalance) return null;

  return (
    <div className="mt-4 p-4 bg-base-200 rounded-lg text-xs">
      <h3 className="font-bold mb-2">Debug Info for {symbol}</h3>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <strong>aToken Address:</strong>
          <div className="break-all">{aTokenAddress}</div>
        </div>
        <div>
          <strong>Underlying Address:</strong>
          <div className="break-all">{underlyingAssetAddress}</div>
        </div>
        <div>
          <strong>aToken Symbol:</strong> {debugInfo.aTokenSymbol}
        </div>
        <div>
          <strong>aToken Decimals:</strong> {debugInfo.aTokenDecimals}
        </div>
        <div>
          <strong>aToken Balance (Raw):</strong> {debugInfo.aTokenBalanceRaw}
        </div>
        <div>
          <strong>aToken Balance (Formatted):</strong> {debugInfo.aTokenBalance.toFixed(6)}
        </div>
        <div>
          <strong>Underlying Balance (Raw):</strong> {debugInfo.underlyingBalanceRaw}
        </div>
        <div>
          <strong>Underlying Balance (Formatted):</strong> {debugInfo.underlyingBalance.toFixed(6)}
        </div>
        <div>
          <strong>Difference (aToken - Underlying):</strong> {debugInfo.difference.toFixed(6)}
        </div>
      </div>
    </div>
  );
};

export default DebugBalance;
