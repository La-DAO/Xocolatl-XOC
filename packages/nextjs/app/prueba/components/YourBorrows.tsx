import React, { useCallback, useEffect, useState } from "react";
import WalletBalance from "./BalanceOf";
import WithdrawModal from "./modals/WithdrawTransactionModal";
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
   * @param {string} balance - Updated balance amount.
   */
  const handleVariableDebtChange = useCallback((tokenAddress: Address, balance: string) => {
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

  // Handle withdraw button click
  const handleWithdrawClick = (reserve: any, balance: string) => {
    setSelectedReserve(reserve);
    setSelectedBalance(balance);
    setIsModalOpen(true);
  };

  return (
    <div className="mt-4">
      {reservesWithBalances.length > 0 && walletAddress ? (
        <div className="supplies-container">
          <div className="table-header supplies-header py-3 flex justify-between tracking-wider">
            <div className="supplies-header-item w-24">Assets</div>
            <div className="supplies-header-item w-24">Debt</div>
            <div className="supplies-header-item w-24">APY</div>
            <div className="supplies-header-item w-24">APY Type</div>
            <div className="supplies-header-item w-24">Actions</div>
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
                      tokenAddress={reserve.variableDebtTokenAddress as Address}
                      walletAddress={walletAddress}
                      onBalanceChange={handleVariableDebtChange}
                    />
                  </p>
                </div>
                <div className="supplies-row-item w-24">
                  <p>{(Number(reserve.liquidityRate) / 1e25).toFixed(2)}%</p>
                </div>
                <div className="supplies-row-item w-24">
                  <span className="px-4 py-1 bg-gray-100 text-gray-400 rounded-md uppercase text-xs">
                    {reserve.variableBorrowrate !== 0n && reserve.stableBorrowRateEnabled ? "stable" : "variable"}
                  </span>
                </div>

                <div className="supplies-row-item w-24">
                  <button
                    className={`${isButtonDisabled ? "disabled-btn" : "primary-btn"}`}
                    disabled={isButtonDisabled}
                    onClick={() => handleWithdrawClick(reserve, balance)}
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-500">No sufficient data available.</p>
      )}

      {/* Modal for withdraw transaction */}
      <WithdrawModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        reserve={selectedReserve}
        balance={selectedBalance}
      />
    </div>
  );
};

export default YourBorrows;
