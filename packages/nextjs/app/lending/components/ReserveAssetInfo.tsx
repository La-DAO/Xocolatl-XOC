import React from "react";
import APYGraph from "./APYGraph";
import { useTranslation } from "@/app/context/LanguageContext";
import useReserveSize from "@/hooks/useReserveSize";
import { ReserveData } from "@/types/types";
import { faChevronDown, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useChainId } from "wagmi";
import { getAddrBlockExplorerUrl } from "~~/app/utils/utils";

interface Props {
  reserve: ReserveData;
  allReserves?: ReserveData[] | null;
  onReserveChange?: (reserve: ReserveData) => void;
}

const ReserveAssetInfo: React.FC<Props> = ({ reserve, allReserves, onReserveChange }) => {
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

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

    return `${value.toLocaleString("en-US", {
      minimumFractionDigits: isStableOrFiat ? 2 : 2,
      maximumFractionDigits: isStableOrFiat ? 2 : 4,
    })} ${symbol}`;
  };

  const formatOraclePrice = (rawPrice: bigint): string => {
    const formatted = Number(rawPrice) / 1e8;
    return `$${formatted.toFixed(2)} USD`;
  };

  const handleReserveSelect = (selectedReserve: ReserveData) => {
    onReserveChange?.(selectedReserve);
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="p-6 flex flex-col gap-6 table-background rounded-xl">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <h1 className="text-2xl lg:text-3xl font-bold text-center lg:text-left text-primary">
          {t("ReserveInfoPanelTitle")}
        </h1>
      </div>

      {/* Reserve Overview Row */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2 lg:gap-4 pb-2 lg:pb-4">
        {/* Reserve Selector Dropdown */}
        {allReserves && allReserves.length > 0 && (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm lg:text-base"
            >
              <span className="font-semibold text-primary">{reserve.symbol}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 w-40 lg:w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                {allReserves.map((reserveOption, index) => (
                  <button
                    key={index}
                    onClick={() => handleReserveSelect(reserveOption)}
                    className={`w-full text-left px-3 py-2 hover:bg-gray-100 transition-colors text-sm lg:text-base ${
                      reserveOption.symbol === reserve.symbol ? "bg-primary text-white" : ""
                    }`}
                  >
                    {reserveOption.symbol}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Vertical Divider (hidden on small screens) */}
        <div className="hidden lg:block h-6 border-l border-gray-300" />

        {/* Right: Metrics */}
        <div className="grid grid-cols-2 gap-2 lg:flex lg:flex-wrap lg:justify-end lg:gap-x-8 lg:gap-y-4 text-xs lg:text-sm w-full">
          <div>
            <p className="text-gray-500 text-xs lg:text-sm">
              {t("ReserveInfoPanelReserveSize")}
              <span className="tooltip tooltip-info" data-tip={t("ReserveInfoPanelReserveSizeTooltip")}>
                <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
              </span>
            </p>
            <p className="text-primary font-bold text-xs lg:text-sm">
              {reserveSizeLoading ? "Loading..." : `${reserveSize} ${reserve.symbol}`}
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-xs lg:text-sm">
              {t("ReserveInfoPanelSupplyAPY")}
              <span className="tooltip tooltip-info" data-tip={t("ReserveInfoPanelSupplyAPYTooltip")}>
                <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
              </span>
            </p>
            <p className="text-primary font-bold text-xs lg:text-sm">
              {(Number(reserve.liquidityRate) / 1e25).toFixed(2)}%
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-xs lg:text-sm">
              {t("ReserveInfoPanelOraclePrice")}
              <span className="tooltip tooltip-info" data-tip={t("ReserveInfoPanelOraclePriceTooltip")}>
                <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
              </span>
            </p>
            <p className="text-primary font-bold text-xs lg:text-sm">
              {formatOraclePrice(reserve.priceInMarketReferenceCurrency)}
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-xs lg:text-sm">
              {t("ReserveInfoPanelAvailableLiquidity")}
              <span className="tooltip tooltip-info" data-tip={t("ReserveInfoPanelAvailableLiquidityTooltip")}>
                <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
              </span>
            </p>
            <p className="text-primary font-bold text-xs lg:text-sm">
              {formatTokenAmount(reserve.availableLiquidity, reserve.decimals, reserve.symbol)}
            </p>
          </div>
          {/* Add more metrics if needed */}
        </div>
      </div>

      {/* Supply Info */}
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-primary text-lg">Supply Info</p>
        {reserveSize && reserve.supplyCap && Number(reserve.supplyCap) > 0 && (
          <div className="flex flex-col gap-1 mb-4">
            {(() => {
              const supplied = parseFloat(reserveSize.replace(/,/g, ""));
              const supplyCap = Number(reserve.supplyCap);
              const progress = supplyCap > 0 ? Math.min(Math.round((supplied / supplyCap) * 100), 100) : 0;
              return (
                <>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>
                      Supply Cap Progress
                      <span
                        className="tooltip tooltip-info"
                        data-tip="Supply cap represents the maximum amount of assets that can be supplied to this reserve. This progress bar shows how much of the supply cap has been utilized so far."
                      >
                        <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
                      </span>
                    </span>
                    <span>{`${progress}%`}</span>
                  </div>
                  <progress className="progress progress-primary w-full h-4" value={progress} max="100"></progress>
                </>
              );
            })()}
          </div>
        )}
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

      {/* APY Graph*/}
      <div className="mt-6">
        <APYGraph mode="Supply" tokenAddress={reserve.underlyingAsset} />
      </div>

      {/* Borrow Info */}
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-primary text-lg mt-6">Borrow Info</p>
        <div className="flex flex-col gap-1 mb-4">
          <div className="flex justify-between text-sm text-gray-500">
            <span>
              Borrow Cap Progress
              <span
                className="tooltip tooltip-info"
                data-tip="This shows the percentage of the borrow cap that has been utilized. When it reaches 100%, no more borrowing is allowed for this asset."
              >
                <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
              </span>
            </span>
            <span>
              {(() => {
                const decimals = reserve.decimals ? Number(reserve.decimals) : 18;
                const borrowed = Number(reserve.totalScaledVariableDebt) / 10 ** decimals;
                const borrowCap = Number(reserve.borrowCap);
                const progress = borrowCap > 0 ? Math.min(Math.round((borrowed / borrowCap) * 100), 100) : 0;
                return `${progress}%`;
              })()}
            </span>
          </div>
          <progress
            className="progress progress-primary w-full h-4"
            value={(() => {
              const decimals = reserve.decimals ? Number(reserve.decimals) : 18;
              const borrowed = Number(reserve.totalScaledVariableDebt) / 10 ** decimals;
              const borrowCap = Number(reserve.borrowCap);
              return Math.min(Math.round((borrowed / borrowCap) * 100), 100);
            })()}
            max="100"
          ></progress>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-gray-300 rounded-md p-4">
              <p className="text-xs text-gray-500">
                {t("ReserveInfoPanelVariableBorrowAPY")}
                <span className="tooltip tooltip-info" data-tip={t("ReserveInfoPanelVariableBorrowAPYTooltip")}>
                  <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
                </span>
              </p>
              <p className="text-lg font-bold text-primary">
                {reserve.symbol === "CETES" ? "Not Borrowable" : `${variableBorrowAPY}%`}
              </p>
            </div>
            <div className="border border-gray-300 rounded-md p-4">
              <p className="text-xs text-gray-500">
                {t("ReserveInfoPanelBorrowCap")}
                <span className="tooltip tooltip-info" data-tip={t("ReserveInfoPanelBorrowCapTooltip")}>
                  <FontAwesomeIcon icon={faInfoCircle} className="ml-1 text-gray-400 cursor-pointer" />
                </span>
              </p>
              <p className="text-lg font-bold text-primary">
                {reserve.symbol === "CETES"
                  ? "Not Borrowable"
                  : reserve.borrowCap
                  ? `${Math.floor(Number(reserve.borrowCap)).toLocaleString("en-US")}`
                  : "Unlimited"}
              </p>
            </div>
          </div>
        </div>
        <APYGraph mode="Borrow" tokenAddress={reserve.underlyingAsset} />
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
