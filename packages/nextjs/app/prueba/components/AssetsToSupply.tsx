import React, { useEffect, useState } from "react";
import IsolatedStateComponent from "@/components/tags/IsolatedState";
import useBalanceOf from "@/hooks/useBalanceOf";
import useReserveData from "@/hooks/useReserveData";

/**
 * Component for displaying assets that can be supplied.
 * Fetches reserve data and corresponding wallet balances to display them in a table.
 */
const AssetsToSupply = () => {
  // Hook to fetch reserve data
  const { data: reserveData, isLoading: isLoadingReserveData, isError: isErrorReserveData } = useReserveData();

  // Hook to fetch balance data for a given address
  const { balance, fetchBalance } = useBalanceOf();

  // State to store balances of the assets
  const [balances, setBalances] = useState<Record<string, string | null>>({});

  // Effect to fetch balances for each reserve asset when reserve data changes
  useEffect(() => {
    if (reserveData) {
      reserveData.forEach(reserve => {
        fetchBalance(reserve.underlyingAsset as `0x${string}`);
      });
    }
  }, [reserveData, fetchBalance]);

  // Effect to update balances state whenever a new balance is fetched
  useEffect(() => {
    if (reserveData && balance !== undefined) {
      const updatedBalances = { ...balances };
      reserveData.forEach(reserve => {
        updatedBalances[reserve.underlyingAsset] = balance;
      });
      setBalances(updatedBalances);
    }
  }, [balance, reserveData, balances]);

  return (
    <div className="mt-4">
      {/* Display loading or error state for reserve data */}
      {isLoadingReserveData && <p className="text-amber-950">Loading...</p>}
      {isErrorReserveData && <p className="text-error">Error fetching data.</p>}

      {/* Display table if reserve data is available */}
      {reserveData && (
        <div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="text-center">
                <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assets
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Wallet Balance
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  APY
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Can be collateral
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-center">
              {/* Iterate through reserve data to create table rows */}
              {reserveData.map((reserve, index) => {
                const balance = balances[reserve.underlyingAsset as `0x${string}`];
                const isLoadingBalance = balance === undefined;
                const isErrorBalance = balance === null;
                const isButtonDisabled = !balance || parseFloat(balance) === 0;

                return (
                  <tr key={index}>
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-gray-900">{reserve.symbol}</p>
                    </td>
                    <td className="px-6 py-4">
                      {/* Display loading, error, or balance */}
                      {isLoadingBalance ? (
                        <p className="text-sm text-gray-900">Loading...</p>
                      ) : isErrorBalance ? (
                        <p className="text-sm text-gray-900">Error</p>
                      ) : (
                        <p className="text-sm text-gray-900">{balance}</p>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-900">{(Number(reserve.liquidityRate) / 1e25).toFixed(2)}%</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {/* Display collateral status */}
                        {reserve.usageAsCollateralEnabled ? (
                          <span className="text-xl text-success font-bold">&#10003;</span>
                        ) : (
                          <IsolatedStateComponent message="Isolated" />
                        )}
                      </div>
                    </td>
                    <td className="py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        className={`px-3 py-1 rounded-md ${
                          isButtonDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-accent text-white"
                        }`}
                        disabled={isButtonDisabled}
                      >
                        Supply
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AssetsToSupply;
