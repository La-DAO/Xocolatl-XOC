import React from "react";
// import APYGraph from "./APYGraph";
import { useTranslation } from "@/app/context/LanguageContext";
import useReserveSize from "@/hooks/useReserveSize";
import { ReserveData } from "@/types/types";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useChainId } from "wagmi";
import { getAddrBlockExplorerUrl } from "~~/app/utils/utils";

interface Props {
  reserve: ReserveData;
}

const ReserveAssetInfo: React.FC<Props> = ({ reserve }) => {
  const { t } = useTranslation();

  const chainId = useChainId();
  const explorer = getAddrBlockExplorerUrl(chainId);

  const aTokenUrl = `${explorer}${reserve.aTokenAddress}`;
  const variableDebtTokenUrl = `${explorer}${reserve.variableDebtTokenAddress}`;
  const underlyingAssetUrl = `${explorer}${reserve.underlyingAsset}`;

  const formatPercent = (raw: bigint, scale = 100) => (Number(raw) / scale).toFixed(2);

  const maxLTV = formatPercent(reserve.baseLTVasCollateral);
  const liquidationThreshold = formatPercent(reserve.reserveLiquidationThreshold);

  const liquidationPenalty = formatPercent(reserve.reserveLiquidationBonus - 10000n);
  const variableBorrowAPY = ((Number(reserve.variableBorrowRate) / 1e27) * 100).toFixed(2);

  const { reserveSize, isLoading: reserveSizeLoading } = useReserveSize(
    reserve.aTokenAddress as `0x${string}`,
    Number(reserve.decimals),
  );

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

  const formatOraclePrice = (rawPrice: bigint): string => {
    const formatted = Number(rawPrice) / 1e8;
    return `$${formatted.toFixed(2)} USD`;
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
          <div>
            <p className="text-gray-500 text-sm">
              {t("ReserveInfoPanelReserveSize")}
              <span className="tooltip tooltip-info" data-tip={t("ReserveInfoPanelReserveSizeTooltip")}>
                <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
              </span>
            </p>
            <p className="text-primary font-bold">
              {reserveSizeLoading ? "Loading..." : `${reserveSize} ${reserve.symbol}`}
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">
              {t("ReserveInfoPanelSupplyAPY")}
              <span className="tooltip tooltip-info" data-tip={t("ReserveInfoPanelSupplyAPYTooltip")}>
                <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
              </span>
            </p>
            <p className="text-primary font-bold">{(Number(reserve.liquidityRate) / 1e25).toFixed(2)}%</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">
              {t("ReserveInfoPanelOraclePrice")}
              <span className="tooltip tooltip-info" data-tip={t("ReserveInfoPanelOraclePriceTooltip")}>
                <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
              </span>
            </p>
            <p className="text-primary font-bold">{formatOraclePrice(reserve.priceInMarketReferenceCurrency)}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">
              {t("ReserveInfoPanelAvailableLiquidity")}
              <span className="tooltip tooltip-info" data-tip={t("ReserveInfoPanelAvailableLiquidityTooltip")}>
                <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
              </span>
            </p>
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
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-gray-300 rounded-md p-4">
            <p className="text-xs text-gray-500">
              {t("ReserveInfoPanelSupplyCap")}
              <span className="tooltip tooltip-info" data-tip={t("ReserveInfoPanelSupplyCapTooltip")}>
                <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
              </span>
            </p>
            <p className="text-lg font-bold text-primary">
              {reserve.supplyCap ? `${Math.floor(Number(reserve.supplyCap)).toLocaleString("en-US")}` : "N/A"}
            </p>
          </div>
          <div className="border border-gray-300 rounded-md p-4">
            <p className="text-xs text-gray-500">
              {t("ReserveInfoPanelMaxLTV")}
              <span className="tooltip tooltip-info" data-tip={t("ReserveInfoPanelMaxLTVTooltip")}>
                <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
              </span>
            </p>
            <p className="text-lg font-bold text-primary">{maxLTV}%</p>
          </div>
          <div className="border border-gray-300 rounded-md p-4">
            <p className="text-xs text-gray-500">
              {t("ReserveInfoPanelLiquidationThreshold")}
              <span className="tooltip tooltip-info" data-tip={t("ReserveInfoPanelLiquidationThresholdTooltip")}>
                <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
              </span>
            </p>
            <p className="text-lg font-bold text-primary">{liquidationThreshold}%</p>
          </div>
          <div className="border border-gray-300 rounded-md p-4">
            <p className="text-xs text-gray-500">
              {t("ReserveInfoPanelLiquidationPenalty")}
              <span className="tooltip tooltip-info" data-tip={t("ReserveInfoPanelLiquidationPenaltyTooltip")}>
                <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
              </span>
            </p>
            <p className="text-lg font-bold text-primary">{liquidationPenalty}%</p>
          </div>
        </div>
      </div>

      {/* APY Graph
      <div className="mt-6">
        <APYGraph />
      </div> */}

      {/* Borrow Info */}
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-primary text-lg mt-6">Borrow Info</p>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-gray-300 rounded-md p-4">
              <p className="text-xs text-gray-500">
                {t("ReserveInfoPanelVariableBorrowAPY")}
                <span className="tooltip tooltip-info" data-tip={t("ReserveInfoPanelVariableBorrowAPYTooltip")}>
                  <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
                </span>
              </p>
              <p className="text-lg font-bold text-primary">{variableBorrowAPY}%</p>
            </div>
            <div className="border border-gray-300 rounded-md p-4">
              <p className="text-xs text-gray-500">
                {t("ReserveInfoPanelBorrowCap")}
                <span className="tooltip tooltip-info" data-tip={t("ReserveInfoPanelBorrowCapTooltip")}>
                  <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
                </span>
              </p>
              <p className="text-lg font-bold text-primary">
                {reserve.borrowCap ? `${Math.floor(Number(reserve.borrowCap)).toLocaleString("en-US")}` : "Unlimited"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-primary text-lg mt-6">Contracts</p>
        <div className="flex flex-col gap-1 text-sm text-blue-600 underline">
          <a
            href={underlyingAssetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline hover:text-primary/80 transition-colors"
          >
            {t("ReserveInfoUnderlyingToken")}
          </a>
          <a
            href={aTokenUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline hover:text-primary/80 transition-colors"
          >
            {t("ReserveInfoAToken")}
          </a>

          <a
            href={variableDebtTokenUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline hover:text-primary/80 transition-colors"
          >
            {t("ReserveInfoVariableDebtToken")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReserveAssetInfo;
