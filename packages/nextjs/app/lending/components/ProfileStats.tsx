import React from "react";
import Image from "next/image";
import BaseLogo from "../../../public/Base-Logo.jpg";

const ProfileStats: React.FC = () => {
  // Simulated data
  const data = {
    netWorth: "106.04K",
    netAPY: "-3.73%",
    healthFactor: 1.42,
  };

  return (
    <header className=" bg-neutral text-white px-12 py-8 flex flex-col space-y-2 w-full  m-auto">
      <div className=" pl-32">
        <div className="flex items-center space-x-2 pb-5">
          <div className="text-2xl">
            <Image src={BaseLogo} alt="Base Logo" className="h-12 w-12" />
          </div>
          <div>
            <div className="text-5xl text-neutral-content font-semibold">Base Market</div>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <div className="text">
            <div className="text-sm text-gray-400">Net worth</div>
            <div className="text-lg text-neutral-content font-semibold">${data.netWorth}</div>
          </div>
          <div className="text">
            <div className="text-sm text-gray-400">Net APY</div>
            <div className="text-lg text-neutral-content font-semibold">{data.netAPY}</div>
          </div>
          <div className="text">
            <div className="text-sm text-gray-400">Health factor</div>
            <div className="text-lg text-neutral-content font-semibold">{data.healthFactor}</div>
          </div>
          <div className="flex items-center space-x-2 pl-12">
            <button className="bg-warning text-slate-800 px-2 py-1 rounded uppercase">risk details</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfileStats;
