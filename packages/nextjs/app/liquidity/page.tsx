import { ContractLinks } from "./components/ContractLinks";
import { LiquidityCards } from "./components/LiquidityCards";
import LiquidityInfo from "./components/LiquidityInfo";
import LiquidityWidget from "./components/LiquidityWidget";
import { PriceChart } from "./components/PriceChart";
import { PriceMetrics } from "./components/PriceMetrics";
import { NextPage } from "next";

const LiquidityPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      {/* VaultInfo at 4/5 width */}
      <LiquidityInfo />

      {/* Top row: LiquidityWidget and ContractLinks */}
      <div className="w-4/5 mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <LiquidityWidget />
        <ContractLinks />
      </div>
      {/* Second row: PriceMetrics and LiquidityCards */}
      <div className="w-4/5 mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <PriceMetrics />
        <LiquidityCards />
      </div>
      {/* Bottom: PriceChart full width */}
      <div className="w-4/5 mt-6">
        <PriceChart />
      </div>
    </div>
  );
};

export default LiquidityPage;
