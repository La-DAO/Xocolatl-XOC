import React, { useCallback, useEffect, useState } from "react";
import WalletBalance from "./BalanceOf";
import WithdrawModal from "./modals/WithdrawTransactionModal";
import useAccountAddress from "@/hooks/useAccount";
import { useCollateralTotalBalance } from "@/hooks/useCollateralTotalBalance";
import { useEarningsSync } from "@/hooks/useEarningsSync";
import useGetReservesData from "@/hooks/useGetReservesData";
import useGetUserReservesData from "@/hooks/useGetUserReservesData";
import { useTotalBalance } from "@/hooks/useTotalBalance";
import { useLendingStore } from "@/stores/lending-store";
import { Address } from "viem";
import { useTranslation } from "~~/app/context/LanguageContext";
import { useTotalAPY } from "~~/hooks/useTotalAPY";

interface YourSuppliesProps {
  setAllBalancesZero: React.Dispatch<React.SetStateAction<boolean>>;
  setSuppliesTotalBalance: React.Dispatch<React.SetStateAction<number>>;
}

const YourSupplies: React.FC<YourSuppliesProps> = ({ setAllBalancesZero, setSuppliesTotalBalance }) => {
  const { t } = useTranslation();
  const { reservesData, isLoading: isLoadingReserves, isError: isErrorReserves } = useGetReservesData();
  const { userReservesData, isLoading: isLoadingUserReserves, isError: isErrorUserReserves } = useGetUserReservesData();
  const { address: walletAddress } = useAccountAddress();
  const { earningsData } = useLendingStore();

  const [balances, setBalances] = useState<Record<string, string>>({});
  const [reservesWithBalances, setReservesWithBalances] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReserve, setSelectedReserve] = useState<any>(null);
  const [selectedBalance, setSelectedBalance] = useState("");

  const handleBalanceChange = useCallback((tokenAddress: Address, balance: string) => {
    setBalances(prevBalances => ({ ...prevBalances, [tokenAddress]: balance }));
  }, []);

  useEffect(() => {
    if (reservesData && userReservesData) {
      const combinedReserves = reservesData.map(reserve => {
        const userReserve = userReservesData.find(userRes => userRes.underlyingAsset === reserve.underlyingAsset);
        return {
          ...reserve,
          ...userReserve,
          balance: balances[reserve.aTokenAddress as Address] || "0",
          underlyingAsset: reserve.underlyingAsset as Address,
        };
      });
      setReservesWithBalances(combinedReserves);

      const allZero = combinedReserves.every(reserve => parseFloat(reserve.balance) === 0);
      setAllBalancesZero(allZero);

      // Calculate the total balance and set it to the parent component
      const totalBalance = combinedReserves.reduce((sum, reserve) => {
        const balance = parseFloat(reserve.balance || "0");
        const priceInMarketReferenceCurrency = Number(reserve.priceInMarketReferenceCurrency) || 0;
        const adjustedBalance = balance * (priceInMarketReferenceCurrency / 1e8);
        return sum + adjustedBalance;
      }, 0);

      setSuppliesTotalBalance(totalBalance);
    }
  }, [reservesData, userReservesData, balances, setAllBalancesZero, setSuppliesTotalBalance]);

  // Track earnings for all supplied assets
  useEarningsSync({ reservesWithBalances });

  const totalBalance = useTotalBalance(reservesWithBalances);
  const totalAPY = useTotalAPY(reservesWithBalances);
  const collateralTotalBalance = useCollateralTotalBalance(reservesWithBalances);

  // Check if wallet is connected
  const isWalletConnected = !!walletAddress;

  if (!isWalletConnected) {
    return (
      <div className="text-center py-12">
        <div className="text-xl font-bold text-primary mb-3">{t("LendingProfileWelcomeMessage")}</div>
      </div>
    );
  }

  if (isLoadingReserves || isLoadingUserReserves) {
    return <p className="text-amber-950">Loading...</p>;
  }

  if (isErrorReserves || isErrorUserReserves) {
    return <p className="text-error">Error fetching data.</p>;
  }

  const handleWithdrawClick = (reserve: any, balance: string) => {
    setSelectedReserve(reserve);
    setSelectedBalance(balance);
    setIsModalOpen(true);
  };

  // Helper function to get earnings for a specific reserve
  const getEarningsForReserve = (reserveAddress: string) => {
    return earningsData.find(earning => earning.reserveAddress === reserveAddress);
  };

  return (
    <div>
      <div className="flex mt-2 gap-2 text-xs">
        <div className="tooltip tooltip-info tooltip-bottom" data-tip={t("LendingYourSuppliesBalanceTooltip")}>
          <span className="gray-tag hover:bg-base-200 dark:hover:bg-base-200 hover:text-primary hover:text-md dark:hover:text-white">
            Balance: {totalBalance} USD
          </span>
        </div>

        <div className="tooltip tooltip-info tooltip-bottom" data-tip={t("LendingYourSuppliesAPYTooltip")}>
          <span className="gray-tag hover:bg-base-200 dark:hover:bg-base-200 hover:text-primary hover:text-md dark:hover:text-white">
            APY: {totalAPY} %
          </span>
        </div>

        <div className="tooltip tooltip-info tooltip-bottom" data-tip={t("LendingYourSuppliesCollateralTooltip")}>
          <span className="gray-tag hover:bg-base-200 dark:hover:bg-base-200 hover:text-primary hover:text-md dark:hover:text-white">
            Collateral: ${collateralTotalBalance} USD
          </span>
        </div>
      </div>

      <div className="supplies-container mt-4">
        <div className="table-header supplies-header py-3 flex justify-between tracking-wider">
          <div className="supplies-header-item w-16">{t("LendingYourSuppliesColumn1")}</div>
          <div className="supplies-header-item w-20">{t("LendingYourSuppliesColumn2")}</div>
          <div className="supplies-header-item w-16 hidden sm:block">{t("LendingYourSuppliesColumn3")}</div>
          <div className="supplies-header-item w-18 hidden sm:block">{t("LendingYourSuppliesColumn4")}</div>
          <div className="supplies-header-item w-20 hidden md:block">Projected Annual Earnings</div>
          <div className="supplies-header-item w-16">{t("LendingYourSuppliesColumn5")}</div>
        </div>

        {reservesWithBalances.map((reserve, index) => {
          const balance = reserve.balance;
          const isButtonDisabled = !balance || parseFloat(balance) === 0;
          const earnings = getEarningsForReserve(reserve.underlyingAsset as string);

          return (
            <div key={index}>
              <div className="table-content table-border-top asset-row flex justify-between py-3">
                <div className="asset-row-item w-16 h-fit">
                  <p>{reserve.symbol}</p>
                </div>
                <div className="asset-row-item w-16 h-fit">
                  <p>
                    <WalletBalance
                      tokenAddress={reserve.aTokenAddress as Address}
                      walletAddress={walletAddress as Address}
                      onBalanceChange={handleBalanceChange}
                    />
                  </p>
                </div>
                <div className="asset-row-item w-16 h-fit hidden sm:block">
                  <p>{(Number(reserve.liquidityRate) / 1e25).toFixed(2)}%</p>
                </div>
                <div className="asset-row-item h-fit hidden sm:block">
                  <div>
                    {reserve.usageAsCollateralEnabled ? (
                      <span className="text-xl text-success font-bold">&#10003;</span>
                    ) : (
                      <span className="text-xl text-error font-bold">&#10005;</span>
                    )}
                  </div>
                </div>
                <div className="asset-row-item w-24 h-fit hidden md:block">
                  {earnings ? (
                    <div className="text-right">
                      <div className="text-success font-medium text-sm">${earnings.earningsUSD}</div>
                      <div className="text-xs text-gray-500">
                        {earnings.estimatedEarnings} {reserve.symbol}
                      </div>
                    </div>
                  ) : (
                    <div className="text-gray-400 text-sm">-</div>
                  )}
                </div>
                <div className="asset-row-item w-16 h-fit mr-2">
                  <button
                    onClick={() => handleWithdrawClick(reserve, balance)}
                    disabled={isButtonDisabled}
                    className={`${isButtonDisabled ? "disabled-btn" : "primary-btn"}`}
                  >
                    {t("LendingWithdrawModalTitle")}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Earnings info note */}
      <div className="mt-3 p-2 bg-base-100 rounded text-xs text-primary dark:text-white">
        Note: Projected annual earnings based on current balance and APY rates. These are estimates of what you would
        earn if you maintain the same balance for one year.
      </div>

      {isModalOpen && selectedReserve && (
        <WithdrawModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          reserve={selectedReserve}
          balance={selectedBalance}
        />
      )}
    </div>
  );
};

export default YourSupplies;
