import React, { useCallback, useEffect, useState } from "react";
import Allowance from "./Allowance";
import IsolatedStateComponent from "@/components/tags/IsolatedState";
import useAccountAddress from "@/hooks/useAccount";
import useReadContracts from "@/hooks/useReadContracts";
import { Address } from "viem";

/**
 * Component for displaying user's supplies.
 * Fetches reserve data and corresponding allowances to display them in a list.
 */
const YourSupplies = () => {
  // Hook to fetch reserve data
  const { data: reserveData, isLoading: isLoadingReserveData, isError: isErrorReserveData } = useReadContracts();
  // Hook to fetch the account address
  const { address: walletAddress } = useAccountAddress();

  // State to store allowances of the assets
  const [allowances, setAllowances] = useState<Record<string, string>>({});
  // State to store reserves with allowances
  const [reservesWithAllowances, setReservesWithAllowances] = useState<any[]>([]);

  /**
   * Callback to handle changes in allowance.
   * @param {Address} tokenAddress - The address of the token.
   * @param {string} allowance - The allowance value.
   */
  const handleAllowanceChange = useCallback((tokenAddress: Address, allowance: string) => {
    setAllowances(prevAllowances => ({ ...prevAllowances, [tokenAddress]: allowance }));
  }, []);

  // Effect to update reserves with allowances when reserve data or allowances change
  useEffect(() => {
    if (reserveData) {
      const updatedReserves = reserveData.map(reserve => ({
        ...reserve,
        allowance: allowances[reserve.underlyingAsset as Address] || "0",
      }));
      setReservesWithAllowances(updatedReserves);
    }
  }, [reserveData, allowances]);

  // Effect to log reserves with allowances when they are updated
  // useEffect(() => {
  //   if (reservesWithAllowances.length > 0) {
  //     console.log("Reserves with Allowances:", reservesWithAllowances);
  //     reservesWithAllowances.forEach(reserve => {
  //       if (reserve.allowance > 0) {
  //         console.log("Allowance for", reserve.symbol, ":", reserve.allowance);
  //       }
  //     });
  //   }
  // }, [reservesWithAllowances]);

  return (
    <div className="mt-4">
      {/* Display loading or error state for reserve data */}
      {isLoadingReserveData && <p className="text-amber-950">Loading...</p>}
      {isErrorReserveData && <p className="text-error">Error fetching data.</p>}

      {/* Display supplies if reserve data is available */}
      {reservesWithAllowances.length > 0 && walletAddress ? (
        <div className="supplies-container">
          {/* Header for supplies table */}
          <div className="supplies-header py-3 flex text-center justify-between text-xs font-medium text-gray-500 uppercase tracking-wider">
            <div className="supplies-header-item w-24">Assets</div>
            <div className="supplies-header-item w-24">Balance</div>
            <div className="supplies-header-item w-24">APY</div>
            <div className="supplies-header-item w-24">Collateral</div>
            <div className="supplies-header-item w-24">Actions</div>
          </div>
          {/* Iterate through reserves with allowances to create rows */}
          {reservesWithAllowances.map((reserve, index) => {
            if (reserve.allowance === "NaN" || reserve.allowance === 0) {
              return null;
            }

            const isButtonDisabled = parseFloat(reserve.allowance) === 0;

            return (
              <div
                key={index}
                className={`supplies-row flex justify-between py-3 text-sm text-center border-t border-t-gray-200 ${
                  isButtonDisabled ? "hidden" : "block"
                }`}
              >
                <div className="supplies-row-item w-24">
                  <p className="text-sm font-medium text-gray-900">{reserve.symbol}</p>
                </div>
                <div className="supplies-row-item w-24">
                  <Allowance
                    tokenAddress={reserve.underlyingAsset as Address}
                    ownerAddress={walletAddress}
                    spenderAddress={walletAddress}
                    onAllowanceChange={handleAllowanceChange}
                  />
                </div>
                <div className="supplies-row-item w-24">
                  <p className="text-sm text-gray-900">{(Number(reserve.liquidityRate) / 1e25).toFixed(2)}%</p>
                </div>
                <div className="supplies-row-item w-24">
                  <div className="text-sm text-gray-900">
                    {reserve.usageAsCollateralEnabled ? (
                      <span className="text-xl text-success font-bold">&#10003;</span>
                    ) : (
                      <IsolatedStateComponent message="Isolated" />
                    )}
                  </div>
                </div>
                <div className="supplies-row-item w-24">
                  <button
                    className={`px-3 py-1 rounded-md ${
                      isButtonDisabled ? "bg-gray-100 text-gray-300 cursor-not-allowed" : "bg-accent text-white"
                    }`}
                    disabled={isButtonDisabled}
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
    </div>
  );
};

export default YourSupplies;
