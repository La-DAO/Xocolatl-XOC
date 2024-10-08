import LiquidityInfo from "./components/LiquidityInfo";
import LiquidityWidget from "./components/LiquidityWidget";
import OverviewWidget from "./components/OverviewWidget";
import { NextPage } from "next";

const LiquidityPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      {/* VaultInfo at 4/5 width */}
      <LiquidityInfo />

      {/* Container for Widgets */}
      <div className="w-4/5 mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <LiquidityWidget />
        <OverviewWidget />
      </div>
    </div>
  );
};

export default LiquidityPage;
