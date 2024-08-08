import React, { useCallback, useEffect, useState } from "react";
import BalanceOf from "./BalanceOf";
import RepayModal from "./modals/RepayTransactionModal.tsx";
import useAccountAddress from "@/hooks/useAccount";
import useGetReservesData from "@/hooks/useGetReservesData";
import useGetUserReservesData from "@/hooks/useGetUserReservesData";
import { Address } from "viem";

/**
 * Component for displaying user's borrow data.
 * @returns {JSX.Element} - Rendered component displaying borrows, debt, APY, APY type, and actions.
 */
const YourBorrows = () => {
  // Hook to get reserves data
  const { reservesData, isLoading: isLoadingReserves, isError: isErrorReserves } = useGetReservesData();
  // Hook to get user reserves data
  const { userReservesData, isLoading: isLoadingUserReserves, isError: isErrorUserReserves } = useGetUserReservesData();
  // Hook to get user account address
  const { address: walletAddress } = useAccountAddress();

  // State to manage balances for reserves
  const [balances, setBalances] = useState<Record<string, string>>({});
  // State to manage reserves with balances
  const [reservesWithBalances, setReservesWithBalances] = useState<any[]>([]);
  // State to manage modal visibility and selected reserve/balance
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReserve, setSelectedReserve] = useState<any>(null);
  const [selectedBalance, setSelectedBalance] = useState("");

  /**
   * Callback to handle changes in balance for a specific token.
   * @param {Address} tokenAddress - Address of the token.
   * @param {Address} balance - Updated balance amount.
   */
  const handleVariableDebtChange = useCallback((tokenAddress: Address, balance: string) => {
    // console.log(`Token Address: ${tokenAddress}, Balance: ${balance}`);
    setBalances(prevBalances => ({ ...prevBalances, [tokenAddress]: balance }));
  }, []);

  useEffect(() => {
    if (reservesData && userReservesData) {
      // Combine reserves data with user reserves data and current balances
      const combinedReserves = reservesData.map(reserve => {
        const userReserve = userReservesData.find(userRes => userRes.underlyingAsset === reserve.underlyingAsset);
        return {
          ...reserve,
          ...userReserve,
          balance: balances[reserve.variableDebtTokenAddress as Address] || "0",
        };
      });
      setReservesWithBalances(combinedReserves);
    }
  }, [reservesData, userReservesData, balances]);

  // Loading state
  if (isLoadingReserves || isLoadingUserReserves) {
    return <p className="text-amber-950">Loading...</p>;
  }

  // Error state
  if (isErrorReserves || isErrorUserReserves) {
    return <p className="text-error">Error fetching data.</p>;
  }

  // Check if all balances are zero
  const allBalancesZero = reservesWithBalances.every(reserve => parseFloat(reserve.balance) === 0);

  // Handle withdraw button click
  const handleRepayClick = (reserve: any, balance: string) => {
    setSelectedReserve(reserve);
    setSelectedBalance(balance);
    setIsModalOpen(true);
  };

  return (
    <div className="mt-4">
      <div className={`borrows-container ${allBalancesZero ? "hidden" : ""}`}>
        <div className="table-header borrows-header py-3 flex justify-between tracking-wider">
          <div className="borrows-header-item w-24">Assets</div>
          <div className="borrows-header-item w-24">Debt</div>
          <div className="borrows-header-item w-24">APY</div>
          <div className="borrows-header-item w-24">APY Type</div>
          <div className="borrows-header-item w-24">Actions</div>
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
                <p>{(Number(reserve.liquidityRate) / 1e25).toFixed(2)}%</p>
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
                  Repay
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <p className={`text-left text-gray-500 ${allBalancesZero ? "" : "hidden"}`}>Nothing borrowed yet.</p>

      {/* Modal for Repay transaction */}
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
