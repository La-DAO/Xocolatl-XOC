import React from "react";
import { ReserveData } from "@/types/types";

interface Props {
  reserve: ReserveData;
}

const ReserveAssetInfo: React.FC<Props> = ({ reserve }) => {
  return (
    <div className="p-6 flex flex-col gap-6 table-background rounded-xl">
      <h3 className="text-xl font-semibold text-primary">Reserve status & configuration</h3>

      {/* Reserve Overview Row */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-4 lg:w-[70%]">
        {/* Left: Reserve Symbol */}
        <div className="flex items-center gap-2 text-primary font-semibold text-xl">{reserve.symbol}</div>

        {/* Vertical Divider (hidden on small screens) */}
        <div className="hidden lg:block h-6 border-l border-gray-300" />

        {/* Right: Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm w-full lg:w-[75%]">
          <div>
            <p className="text-gray-500 text-xs">Reserve Size</p>
            <p className="text-primary font-bold">${(Number(reserve.availableLiquidity) / 1e6).toFixed(2)}M</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs">Available liquidity</p>
            <p className="text-primary font-bold">${(Number(reserve.availableLiquidity) / 1e6).toFixed(2)}M</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs">Utilization Rate</p>
            <p className="text-primary font-bold">{reserve.availableLiquidity}%</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs">Oracle price</p>
            <p className="text-primary font-bold">${reserve.availableLiquidity}</p>
          </div>
        </div>
      </div>

      {/* Supply Info */}
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-primary text-lg">Supply Info</p>
        <div className="w-full lg:w-[70%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-gray-300 rounded-md p-4">
              <p className="text-xs text-gray-500">Max LTV</p>
              <p className="text-lg font-bold text-primary">75.00%</p>
            </div>
            <div className="border border-gray-300 rounded-md p-4">
              <p className="text-xs text-gray-500">Liquidation threshold</p>
              <p className="text-lg font-bold text-primary">78.00%</p>
            </div>
            <div className="border border-gray-300 rounded-md p-4">
              <p className="text-xs text-gray-500">Liquidation penalty</p>
              <p className="text-lg font-bold text-primary">5.00%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Borrow Info */}
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-primary text-lg mt-6">Borrow Info</p>
        <div className="w-full lg:w-[70%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-gray-300 rounded-md p-4">
              <p className="text-xs text-gray-500">Variable Borrow APY</p>
              <p className="text-lg font-bold text-primary">4.23%</p>
            </div>
            <div className="border border-gray-300 rounded-md p-4">
              <p className="text-xs text-gray-500">Stable Borrow APY</p>
              <p className="text-lg font-bold text-primary">7.91%</p>
            </div>
            <div className="border border-gray-300 rounded-md p-4">
              <p className="text-xs text-gray-500">Available to borrow</p>
              <p className="text-lg font-bold text-primary">123,456 USDC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveAssetInfo;
