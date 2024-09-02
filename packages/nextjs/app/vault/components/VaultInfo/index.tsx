"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useReadContract } from "wagmi";
import { vaultABI } from "~~/app/components/abis/vault";

const VaultInfo: React.FC = () => {
  const [, setTotalReserves] = useState<number | null>(null!);
  const { data: totalReserves } = useReadContract({
    address: "0xD6DaB267b7C23EdB2ed5605d9f3f37420e88e291",
    abi: vaultABI,
    functionName: "totalSupply",
  });

  useEffect(() => {
    if (totalReserves) {
      setTotalReserves(totalReserves as number);
    }
  }, [totalReserves]);

  return (
    <div className="w-4/5 mx-auto mt-8 p-6 bg-white shadow-md rounded-lg flex items-center">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image src="/warrior.png" alt="Description of Image" width={200} height={200} className="rounded-full" />
      </div>

      {/* Text and Numbers Section */}
      <div className="ml-6 flex-grow">
        {/* Title and Description */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-primary">Xoktle Vault</h2>
          <p className="text-gray-600">
            Xoktle is the word for jar 🍯 in nahuatl. This vault is designed to use your deposit to expand stablecoin
            liquidity and pair with the DeFi ecosystem.
          </p>
        </div>

        {/* Number Boxes */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-xl font-bold text-primary">Reserves</p>
            <p className="text-gray-600">$46.500M</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-xl font-bold text-primary">$USDC APY%</p>
            <p className="text-gray-600">3.68%</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-xl font-bold text-primary">$XOC APY%</p>
            <p className="text-gray-600">2.33%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaultInfo;
