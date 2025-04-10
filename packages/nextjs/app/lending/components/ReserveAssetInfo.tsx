import React from "react";
import { useTranslation } from "@/app/context/LanguageContext";
import { ReserveData } from "@/types/types";

interface Props {
  reserve: ReserveData;
}

const ReserveAssetInfo: React.FC<Props> = ({ reserve }) => {
  const { t } = useTranslation();

  const formatPercent = (raw: bigint, scale = 100) => (Number(raw) / scale).toFixed(2);

  const maxLTV = formatPercent(reserve.baseLTVasCollateral);
  const liquidationThreshold = formatPercent(reserve.reserveLiquidationThreshold);

  const liquidationPenalty = formatPercent(reserve.reserveLiquidationBonus - 10000n);
  const variableBorrowAPY = ((Number(reserve.variableBorrowRate) / 1e27) * 100).toFixed(2);

  const formatTokenAmount = (amount: bigint, decimals: bigint, symbol: string): string => {
    const value = Number(amount) / Math.pow(10, Number(decimals));

    // Use 2 decimals for stablecoins or "fixed" value tokens
    const fixedSymbols = ["USDC", "XOC", "MXNe"];
    const isStableOrFiat = fixedSymbols.includes(symbol);

    return `${value.toLocaleString(undefined, {
      minimumFractionDigits: isStableOrFiat ? 2 : 2,
      maximumFractionDigits: isStableOrFiat ? 2 : 4,
    })} ${symbol}`;
  };

  return (
    <div className="p-6 flex flex-col gap-6 table-background rounded-xl">
      <h1 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-center lg:text-left text-primary">
        {t("ReserveInfoPanelTitle")}
      </h1>

      {/* Reserve Overview Row */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-4">
        {/* Left: Reserve Symbol */}
        <div className="flex items-center gap-2">
          <h2 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4 text-primary">{reserve.symbol}</h2>
        </div>

        {/* Vertical Divider (hidden on small screens) */}
        <div className="hidden lg:block h-6 border-l border-gray-300" />

        {/* Right: Metrics */}
        <div className="flex flex-wrap justify-end gap-x-8 gap-y-4 text-sm w-full">
          {/* <div>
            <p className="text-gray-500 text-sm">Reserve Size</p>
            <p className="text-primary font-bold">
              {formatTokenAmount(reserve.availableLiquidity, reserve.decimals, reserve.symbol)}
            </p>
          </div> */}
          <div>
            <p className="text-gray-500 text-sm">{t("ReserveInfoPanelAvailableLiquidity")}</p>
            <p className="text-primary font-bold">
              {formatTokenAmount(reserve.availableLiquidity, reserve.decimals, reserve.symbol)}
            </p>
          </div>
          {/* Add more metrics if needed */}
        </div>
      </div>

      {/* Supply Info */}
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-primary text-lg">Supply Info</p>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-gray-300 rounded-md p-4">
              <p className="text-xs text-gray-500">{t("ReserveInfoPanelMaxLTV")}</p>
              <p className="text-lg font-bold text-primary">{maxLTV}%</p>
            </div>
            <div className="border border-gray-300 rounded-md p-4">
              <p className="text-xs text-gray-500">{t("ReserveInfoPanelLiquidationThreshold")}</p>
              <p className="text-lg font-bold text-primary">{liquidationThreshold}%</p>
            </div>
            <div className="border border-gray-300 rounded-md p-4">
              <p className="text-xs text-gray-500">{t("ReserveInfoPanelLiquidationPenalty")}</p>
              <p className="text-lg font-bold text-primary">{liquidationPenalty}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Borrow Info */}
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-primary text-lg mt-6">Borrow Info</p>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-gray-300 rounded-md p-4">
              <p className="text-xs text-gray-500">{t("ReserveInfoPanelVariableBorrowAPY")}</p>
              <p className="text-lg font-bold text-primary">{variableBorrowAPY}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveAssetInfo;
