import React, { useCallback, useEffect, useState } from "react";
import WalletBalance from "./BalanceOf";
import CollateralToggle from "./CollateralToggle";
import WithdrawModal from "./modals/WithdrawTransactionModal";
import useAccountAddress from "@/hooks/useAccount";
import { useCollateralTotalBalance } from "@/hooks/useCollateralTotalBalance";
import useGetReservesData from "@/hooks/useGetReservesData";
import useGetUserReservesData from "@/hooks/useGetUserReservesData";
import { useTotalBalance } from "@/hooks/useTotalBalance";
import { Address } from "viem";
import { useTranslation } from "~~/app/context/LanguageContext";
import { useTotalAPY } from "~~/hooks/useTotalAPY";

interface YourSuppliesProps {
  setAllBalancesZero: React.Dispatch<React.SetStateAction<boolean>>;
  setSuppliesTotalBalance: React.Dispatch<React.SetStateAction<number>>;
}

const YourSupplies: React.FC<YourSuppliesProps> = ({ setAllBalancesZero, setSuppliesTotalBalance }) => {
  const { reservesData, isLoading: isLoadingReserves, isError: isErrorReserves } = useGetReservesData();
  const { userReservesData, isLoading: isLoadingUserReserves, isError: isErrorUserReserves } = useGetUserReservesData();
  const { address: walletAddress } = useAccountAddress();

  const [balances, setBalances] = useState<Record<string, string>>({});
  const [reservesWithBalances, setReservesWithBalances] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReserve, setSelectedReserve] = useState<any>(null);
  const [selectedBalance, setSelectedBalance] = useState("");

  const { t } = useTranslation();

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

  const totalBalance = useTotalBalance(reservesWithBalances);
  const totalAPY = useTotalAPY(reservesWithBalances);
  const collateralTotalBalance = useCollateralTotalBalance(reservesWithBalances);

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

  return (
    <div>
      <div className="flex mt-2 gap-2 text-xs">
        <span className="gray-tag">Balance: {totalBalance} USD</span>
        <span className="gray-tag">APY: {totalAPY}%</span>
        <span className="gray-tag">Collateral: ${collateralTotalBalance} USD</span>
      </div>

      <div
        className={`supplies-container mt-4 ${
          reservesWithBalances.every(reserve => parseFloat(reserve.balance) === 0) ? "hidden" : ""
        }`}
      >
        <div className="table-header supplies-header py-3 flex justify-between tracking-wider">
          <div className="supplies-header-item w-24">{t("LendingYourSuppliesColumn1")}</div>
          <div className="supplies-header-item w-24">{t("LendingYourSuppliesColumn2")}</div>
          <div className="supplies-header-item w-24">{t("LendingYourSuppliesColumn3")}</div>
          <div className="supplies-header-item w-24">{t("LendingYourSuppliesColumn4")}</div>
          <div className="supplies-header-item w-24">{t("LendingYourSuppliesColumn5")}</div>
        </div>
        {reservesWithBalances.map((reserve, index) => {
          const balance = reserve.balance;
          const isButtonDisabled = parseFloat(balance) === 0;

          return (
            <div
              key={index}
              className={`table-content table-border-top supplies-row flex justify-between py-3 ${
                isButtonDisabled ? "hidden" : "block"
              }`}
            >
              <div className="supplies-row-item w-24">
                <p>{reserve.symbol}</p>
              </div>
              <div className="supplies-row-item w-24">
                <p>
                  <WalletBalance
                    tokenAddress={reserve.aTokenAddress as Address}
                    walletAddress={walletAddress as Address}
                    onBalanceChange={handleBalanceChange}
                  />
                </p>
              </div>
              <div className="supplies-row-item w-24">
                <p>{(Number(reserve.liquidityRate) / 1e25).toFixed(2)}%</p>
              </div>
              <div className="supplies-row-item w-24">
                <div>
                  <CollateralToggle
                    assetAddress={reserve.underlyingAsset}
                    initialUseAsCollateral={reserve.usageAsCollateralEnabledOnUser}
                  />
                </div>
              </div>
              <div className="supplies-row-item w-24">
                <button
                  className={`${isButtonDisabled ? "disabled-btn" : "primary-btn"}`}
                  disabled={isButtonDisabled}
                  onClick={() => handleWithdrawClick(reserve, balance)}
                >
                  {t("LendingWithdrawModalButton")}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <p
        className={`text-left text-gray-500 ${
          reservesWithBalances.every(reserve => parseFloat(reserve.balance) === 0) ? "" : "hidden"
        }`}
      >
        Nothing supplied yet.
      </p>

      <WithdrawModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        reserve={selectedReserve}
        balance={selectedBalance}
      />
    </div>
  );
};

export default YourSupplies;
