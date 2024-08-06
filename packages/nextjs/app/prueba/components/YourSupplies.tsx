import React, { useCallback, useEffect, useState } from "react";
import Allowance from "./Allowance";
import CollateralToggle from "./CollateralToggle";
import WithdrawModal from "./modals/WithdrawTransactionModal";
import useAccountAddress from "@/hooks/useAccount";
import useGetReservesData from "@/hooks/useGetReservesData";
import useGetUserReservesData from "@/hooks/useGetUserReservesData";
import { Address } from "viem";

/**
 * Component for displaying user's supply data with allowances and collateral options.
 * @returns {JSX.Element} - Rendered component displaying supplies, balance, APY, collateral, and actions.
 */
const YourSupplies = () => {
  // Hook to get reserves data
  const { reservesData, isLoading: isLoadingReserves, isError: isErrorReserves } = useGetReservesData();
  // Hook to get user reserves data
  const { userReservesData, isLoading: isLoadingUserReserves, isError: isErrorUserReserves } = useGetUserReservesData();
  // Hook to get user account address
  const { address: walletAddress } = useAccountAddress();

  // State to manage allowances for reserves
  const [allowances, setAllowances] = useState<Record<string, string>>({});
  // State to manage reserves with allowances
  const [reservesWithAllowances, setReservesWithAllowances] = useState<any[]>([]);
  // State to manage modal visibility and selected reserve/balance
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReserve, setSelectedReserve] = useState<any>(null);
  const [selectedAllowance, setSelectedAllowance] = useState("");

  /**
   * Callback to handle changes in allowance for a specific token.
   * @param {Address} tokenAddress - Address of the token.
   * @param {string} allowance - Updated allowance amount.
   */
  const handleAllowanceChange = useCallback((tokenAddress: Address, allowance: string) => {
    setAllowances(prevAllowances => ({ ...prevAllowances, [tokenAddress]: allowance }));
  }, []);

  useEffect(() => {
    if (reservesData && userReservesData) {
      // Combine reserves data with user reserves data and current allowances
      const combinedReserves = reservesData.map(reserve => {
        const userReserve = userReservesData.find(userRes => userRes.underlyingAsset === reserve.underlyingAsset);
        return {
          ...reserve,
          ...userReserve,
          allowance: allowances[reserve.underlyingAsset as Address] || "0",
        };
      });
      setReservesWithAllowances(combinedReserves);
    }
  }, [reservesData, userReservesData, allowances]);

  // Loading state
  if (isLoadingReserves || isLoadingUserReserves) {
    return <p className="text-amber-950">Loading...</p>;
  }

  // Error state
  if (isErrorReserves || isErrorUserReserves) {
    return <p className="text-error">Error fetching data.</p>;
  }

  // Handle withdraw button click
  const handleWithdrawClick = (reserve: any, allowance: string) => {
    setSelectedReserve(reserve);
    setSelectedAllowance(allowance);
    setIsModalOpen(true);
  };

  return (
    <div className="mt-4">
      {reservesWithAllowances.length > 0 && walletAddress ? (
        <div className="supplies-container">
          <div className="table-header supplies-header py-3 flex justify-between tracking-wider">
            <div className="supplies-header-item w-24">Assets</div>
            <div className="supplies-header-item w-24">Allowance</div>
            <div className="supplies-header-item w-24">APY</div>
            <div className="supplies-header-item w-24">Collateral</div>
            <div className="supplies-header-item w-24">Actions</div>
          </div>
          {reservesWithAllowances.map((reserve, index) => {
            // Skip rendering if allowance is not valid
            if (reserve.allowance === "NaN" || reserve.allowance === 0) {
              return null;
            }

            const isButtonDisabled = parseFloat(reserve.allowance) === 0;

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
                    <Allowance
                      tokenAddress={reserve.underlyingAsset as Address}
                      ownerAddress={walletAddress}
                      spenderAddress={walletAddress}
                      onAllowanceChange={handleAllowanceChange}
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
                    className={`${isButtonDisabled ? ".disabled-btn" : "primary-btn "}`}
                    disabled={isButtonDisabled}
                    onClick={() => handleWithdrawClick(reserve, reserve.allowance)}
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
        balance={selectedAllowance}
      />
    </div>
  );
};

export default YourSupplies;
