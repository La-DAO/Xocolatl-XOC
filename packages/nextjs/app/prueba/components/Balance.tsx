// components/TokenBalanceComponent.tsx
import React from "react";
import { useTokenBalance } from "@/hooks/useBalanceOf2";

interface Props {
  tokenAddress: `0x${string}`;
  walletAddress: `0x${string}`;
}

const TokenBalanceComponent: React.FC<Props> = ({ tokenAddress, walletAddress }) => {
  const balance = useTokenBalance({ tokenAddress, walletAddress });

  return (
    <div>
      <h2 className="text-black">
        Balance: {balance === "loading" ? "Loading..." : balance === "0.0000000" ? "0" : balance}
      </h2>
    </div>
  );
};

export default TokenBalanceComponent;
