import React from "react";

interface OverviewWidgetProps {
  tokenA: number;
  tokenB: number;
}

const OverviewWidget: React.FC<OverviewWidgetProps> = ({ tokenA, tokenB }) => {
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md mt-6">
      {/* Title */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Overview</h2>
        <hr className="border-t-2 border-gray-300 rounded-t-full" />
      </div>

      {/* Token Information */}
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-700">Token A Deposited:</span>
          <span className="text-gray-900 font-semibold">{tokenA}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-700">Token B Deposited:</span>
          <span className="text-gray-900 font-semibold">{tokenB}</span>
        </div>

        <div className="flex justify-between border-t pt-4 mt-4">
          <span className="text-gray-700">Total Deposited:</span>
          <span className="text-gray-900 font-bold">{tokenA + tokenB}</span>
        </div>
      </div>
    </div>
  );
};

export default OverviewWidget;
