import React from "react";

const ProfileStats: React.FC = () => {
  // Simulated data
  const data = {
    netWorth: "106.04K",
    netAPY: "-3.73%",
    healthFactor: 1.42,
  };

  return (
    <header className="bg-slate-800 text-white px-12 py-8 rounded-2xl flex flex-col space-y-2 w-3/5 m-auto">
      <div className="flex items-center space-x-2">
        <div className="text-2xl">🔷</div>
        <div>
          <div className="text-2xl font-semibold">Ethereum Market</div>
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
          <button className="bg-warning text-slate-800 px-2 py-1 rounded uppercase">risk details</button>
        </div>
      </div>
    </header>
  );
};

export default ProfileStats;
