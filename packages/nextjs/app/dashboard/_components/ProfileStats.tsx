import React from "react";

const ProfileStats: React.FC = () => {
  // Simulated data
  const data = {
    netWorth: "106.04K",
    netAPY: "-3.73%",
    healthFactor: 1.42,
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <div className="text-2xl">🔷</div>
        <div>
          <div className="text-xl font-semibold">Ethereum Market</div>
          <div className="text-sm text-gray-400">Version 3</div>
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <div className="text">
          <div className="text-sm text-gray-400">Net worth</div>
          <div className="text-lg font-semibold">${data.netWorth}</div>
        </div>
        <div className="text">
          <div className="text-sm text-gray-400">Net APY</div>
          <div className="text-lg font-semibold">{data.netAPY}</div>
        </div>
        <div className="text">
          <div className="text-sm text-gray-400">Health factor</div>
          <div className="text-lg font-semibold">{data.healthFactor}</div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="bg-yellow-500 text-gray-800 px-2 py-1 rounded">RISK DETAILS</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;
