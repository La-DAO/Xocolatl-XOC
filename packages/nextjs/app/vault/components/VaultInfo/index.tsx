import React from "react";
import Image from "next/image";

const VaultInfo: React.FC = () => {
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
          <h2 className="text-2xl font-semibold text-gray-800">Xoktle Vault</h2>
          <p className="text-gray-600">
            Xoktle is the word for jar 🍯 in nahuatl. This vault is designed to use your deposit to expand stablecoin
            liquidity and pair with the DeFi ecosystem.
          </p>
        </div>

        {/* Number Boxes */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-xl font-bold text-gray-800">Reserves</p>
            <p className="text-gray-600">$46.500M</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-xl font-bold text-gray-800">USDC APY</p>
            <p className="text-gray-600">3.68%</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-xl font-bold text-gray-800">ETH APY</p>
            <p className="text-gray-600">2.33%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaultInfo;
