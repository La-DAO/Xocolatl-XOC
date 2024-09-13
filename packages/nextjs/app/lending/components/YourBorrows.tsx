import React, { useCallback, useEffect, useState } from "react";
import BalanceOf from "./BalanceOf";
import RepayModal from "./modals/RepayTransactionModal.tsx";
import useAccountAddress from "@/hooks/useAccount";
import useGetReservesData from "@/hooks/useGetReservesData";
import useGetUserReservesData from "@/hooks/useGetUserReservesData";
import { useTotalBalance } from "@/hooks/useTotalBalance";
import { Address } from "viem";
import { useTranslation } from "~~/app/context/LanguageContext";
import { useTotalAPY } from "~~/hooks/useTotalAPY";

interface YourBorrowsProps {
  setBorrowsTotalBalance: React.Dispatch<React.SetStateAction<number>>;
}

/**
 * Component for displaying user's borrow data.
 * @returns {JSX.Element} - Rendered component displaying borrows, debt, APY, APY type, and actions.
 */
const YourBorrows: React.FC<YourBorrowsProps> = ({ setBorrowsTotalBalance }) => {
  const { t } = useTranslation();
  const { reservesData, isLoading: isLoadingReserves, isError: isErrorReserves } = useGetReservesData();
  const { userReservesData, isLoading: isLoadingUserReserves, isError: isErrorUserReserves } = useGetUserReservesData();
  const { address: walletAddress } = useAccountAddress();

  const [balances, setBalances] = useState<Record<string, string>>({});
  const [reservesWithBalances, setReservesWithBalances] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReserve, setSelectedReserve] = useState<any>(null);
  const [selectedBalance, setSelectedBalance] = useState("");

  const handleVariableDebtChange = useCallback((tokenAddress: Address, balance: string) => {
    setBalances(prevBalances => ({ ...prevBalances, [tokenAddress]: balance }));
  }, []);

  useEffect(() => {
    if (reservesData && userReservesData) {
      const combinedReserves = reservesData.map(reserve => {
        const userReserve = userReservesData.find(userRes => userRes.underlyingAsset === reserve.underlyingAsset);
        return {
          ...reserve,
          ...userReserve,
          balance: balances[reserve.variableDebtTokenAddress as Address] || "0",
          underlyingAsset: reserve.underlyingAsset as `0x${string}`,
        };
      });
      setReservesWithBalances(combinedReserves);

      // Calculate the total debt balance and set it to the parent component
      const totalDebtBalance = combinedReserves.reduce((sum, reserve) => {
        const balance = parseFloat(reserve.balance || "0");
        const priceInMarketReferenceCurrency = Number(reserve.priceInMarketReferenceCurrency) || 0;
        const adjustedBalance = balance * (priceInMarketReferenceCurrency / 1e8);
        return sum + adjustedBalance;
      }, 0);

      setBorrowsTotalBalance(totalDebtBalance);
    }
  }, [reservesData, userReservesData, balances, setBorrowsTotalBalance]);

  const totalAPY = useTotalAPY(reservesWithBalances);
  const totalBalance = useTotalBalance(reservesWithBalances);

  if (isLoadingReserves || isLoadingUserReserves) {
    return <p className="text-amber-950">Loading...</p>;
  }

  if (isErrorReserves || isErrorUserReserves) {
    return <p className="text-error">Error fetching data.</p>;
  }

  const allBalancesZero = reservesWithBalances.every(reserve => parseFloat(reserve.balance) === 0);

  const handleRepayClick = (reserve: any, balance: string) => {
    setSelectedReserve(reserve);
    setSelectedBalance(balance);
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="flex mt-2 gap-2 text-xs">
        <span className="gray-tag">Balance: {totalBalance} USD</span>
        <span className="gray-tag">APY: {totalAPY} %</span>
      </div>
      <div className={`borrows-container mt-4 ${allBalancesZero ? "hidden" : ""}`}>
        <div className="table-header borrows-header py-3 flex justify-between tracking-wider">
          <div className="borrows-header-item w-24">{t("LendingYourBorrowsColumn1")}</div>
          <div className="borrows-header-item w-24">{t("LendingYourBorrowsColumn2")}</div>
          <div className="borrows-header-item w-24">{t("LendingYourBorrowsColumn3")}</div>
          <div className="borrows-header-item w-24">{t("LendingYourBorrowsColumn4")}</div>
          <div className="borrows-header-item w-24">{t("LendingYourBorrowsColumn5")}</div>
        </div>
        {reservesWithBalances.map((reserve, index) => {
          const balance = reserve.balance;
          const isButtonDisabled = parseFloat(balance) === 0;

          return (
            <div
              key={index}
              className={`table-content table-border-top borrows-row flex justify-between py-3 ${
                isButtonDisabled ? "hidden" : "block"
              }`}
            >
              <div className="borrows-row-item w-24">
                <p>{reserve.symbol}</p>
              </div>
              <div className="borrows-row-item w-24">
                <p>
                  <BalanceOf
                    tokenAddress={reserve.variableDebtTokenAddress as Address}
                    walletAddress={walletAddress as Address}
                    onBalanceChange={handleVariableDebtChange}
                  />
                </p>
              </div>
              <div className="borrows-row-item w-24">
                <p>{(Number(reserve.variableBorrowRate) / 1e25).toFixed(2)}%</p>
              </div>
              <div className="borrows-row-item w-24">
                <span className="px-4 py-1 bg-gray-100 text-gray-400 rounded-md uppercase text-xs">
                  {reserve.variableBorrowrate !== 0n && reserve.stableBorrowRateEnabled ? "stable" : "variable"}
                </span>
              </div>

              <div className="borrows-row-item w-24">
                <button
                  className={`${isButtonDisabled ? "disabled-btn" : "primary-btn"}`}
                  disabled={isButtonDisabled}
                  onClick={() => handleRepayClick(reserve, balance)}
                >
                  {t("LendingRepayModalButton")}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <p className={`text-left text-gray-500 ${allBalancesZero ? "" : "hidden"}`}>
        {t("LendingYourBorrowsZeroBalance")}
      </p>

      <RepayModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        reserve={selectedReserve}
        balance={selectedBalance}
      />
    </div>
  );
};

export default YourBorrows;
