import React, { useCallback, useEffect, useState } from "react";
import WalletBalance from "./BalanceOf";
import CollateralToggle from "./CollateralToggle";
import WithdrawModal from "./modals/WithdrawTransactionModal";
import useAccountAddress from "@/hooks/useAccount";
import useGetReservesData from "@/hooks/useGetReservesData";
import useGetUserReservesData from "@/hooks/useGetUserReservesData";
import { Address } from "viem";

// Defining types for the props that the component accepts
interface YourSuppliesProps {
  setAllBalancesZero: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Component to display the user's supply data with collateral and withdrawal options.
 * @param {YourSuppliesProps} props - Props that include the setAllBalancesZero function to update state in the parent component.
 * @returns {JSX.Element} - Rendered component showing supplies, balance, APY, collateral, and actions.
 */
const YourSupplies: React.FC<YourSuppliesProps> = ({ setAllBalancesZero }) => {
  // Hook to get reserves data
  const { reservesData, isLoading: isLoadingReserves, isError: isErrorReserves } = useGetReservesData();
  // Hook to get user reserves data
  const { userReservesData, isLoading: isLoadingUserReserves, isError: isErrorUserReserves } = useGetUserReservesData();
  // Hook to get the user's account address
  const { address: walletAddress } = useAccountAddress();

  // State to manage the balances of the reserves
  const [balances, setBalances] = useState<Record<string, string>>({});
  // State to manage reserves with balances
  const [reservesWithBalances, setReservesWithBalances] = useState<any[]>([]);
  // State to manage the visibility of the modal and the selected reserve/balance
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReserve, setSelectedReserve] = useState<any>(null);
  const [selectedBalance, setSelectedBalance] = useState("");

  /**
   * Callback to handle changes in the balance of a specific token.
   * @param {Address} tokenAddress - Address of the token.
   * @param {string} balance - Updated balance amount.
   */
  const handleBalanceChange = useCallback((tokenAddress: Address, balance: string) => {
    setBalances(prevBalances => ({ ...prevBalances, [tokenAddress]: balance }));
  }, []);

  useEffect(() => {
    if (reservesData && userReservesData) {
      // Combine the reserves data with the user reserves data and the current balances
      const combinedReserves = reservesData.map(reserve => {
        const userReserve = userReservesData.find(userRes => userRes.underlyingAsset === reserve.underlyingAsset);
        return {
          ...reserve,
          ...userReserve,
          balance: balances[reserve.aTokenAddress as Address] || "0",
        };
      });
      setReservesWithBalances(combinedReserves);

      // Determine if all balances are zero
      const allZero = combinedReserves.every(reserve => parseFloat(reserve.balance) === 0);
      setAllBalancesZero(allZero);
    }
  }, [reservesData, userReservesData, balances, setAllBalancesZero]);

  // Loading state
  if (isLoadingReserves || isLoadingUserReserves) {
    return <p className="text-amber-950">Loading...</p>;
  }

  // Error state
  if (isErrorReserves || isErrorUserReserves) {
    return <p className="text-error">Error fetching data.</p>;
  }

  // Handle click on the withdraw button
  const handleWithdrawClick = (reserve: any, balance: string) => {
    setSelectedReserve(reserve);
    setSelectedBalance(balance);
    setIsModalOpen(true);
  };

  return (
    <div>
      <div
        className={`supplies-container mt-4 ${
          reservesWithBalances.every(reserve => parseFloat(reserve.balance) === 0) ? "hidden" : ""
        }`}
      >
        <div className="table-header supplies-header py-3 flex justify-between tracking-wider">
          <div className="supplies-header-item w-24">Assets</div>
          <div className="supplies-header-item w-24">Balance</div>
          <div className="supplies-header-item w-24">APY</div>
          <div className="supplies-header-item w-24">Collateral</div>
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
                  Withdraw
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

      {/* Modal for withdrawal transaction */}
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
