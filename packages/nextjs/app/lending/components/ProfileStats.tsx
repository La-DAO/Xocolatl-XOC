import React from "react";
import Image from "next/image";
import BaseLogo from "@/public/Base-Logo.jpg";

interface ProfileStatsProps {
  balance: number;
  netAPY: number;
  healthFactor: number;
}

const ProfileStats: React.FC<ProfileStatsProps> = ({ balance, netAPY, healthFactor }) => {
  const data = {
    netWorth: balance.toFixed(2),
    netAPY: netAPY.toFixed(2),
    healthFactor: healthFactor.toFixed(2),
  };

  return (
    <header className="bg-neutral text-white flex flex-col space-y-2 w-fit">
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <div className="text-2xl">
            <Image src={BaseLogo} alt="Base Logo" className="h-8 w-8" />
          </div>
          <div>
            <div className="text-2xl text-primary font-semibold">Base Market</div>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <div className="text">
            <div className="text-sm text-gray-400">Net worth</div>
            <div className="text-lg text-accent font-semibold">${data.netWorth}</div>
          </div>
          {/* <div className="text">
            <div className="text-sm text-gray-400">Net APY</div>
            <div className="text-lg text-accent font-semibold">{data.netAPY}%</div>
          </div> */}
          <div className="text">
            <div className="text-sm text-gray-400">Health factor</div>
            <div className="text-lg text-accent font-semibold">{data.healthFactor}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfileStats;
