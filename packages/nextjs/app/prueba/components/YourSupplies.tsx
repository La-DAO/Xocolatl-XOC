import React, { useCallback, useState } from "react";
import Allowance from "./Allowance";
import IsolatedStateComponent from "@/components/tags/IsolatedState";
import useAccountAddress from "@/hooks/useAccount";
import useReadContracts from "@/hooks/useReadContracts";

/**
 * Component for displaying assets that can be supplied.
 * Fetches reserve data and corresponding wallet allowances to display them in a table.
 */
const YourSupplies = () => {
  // Hook to fetch reserve data
  const { data: reserveData, isLoading: isLoadingReserveData, isError: isErrorReserveData } = useReadContracts();
  // Hook to fetch the account address
  const { address: walletAddress } = useAccountAddress();

  // State to store allowances of the assets
  const [allowances, setAllowances] = useState<Record<string, string>>({});

  /**
   * Callback function to handle allowance change.
   * Updates the state with new allowances.
   */
  const handleAllowanceChange = useCallback((tokenAddress: `0x${string}`, allowance: string) => {
    setAllowances(prevAllowances => ({ ...prevAllowances, [tokenAddress]: allowance }));
  }, []);

  return (
    <div className="mt-4">
      {/* Display loading or error state for reserve data */}
      {isLoadingReserveData && <p className="text-amber-950">Loading...</p>}
      {isErrorReserveData && <p className="text-error">Error fetching data.</p>}

      {/* Display table if reserve data is available */}
      {reserveData && walletAddress && (
        <div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="text-center">
                <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assets
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Wallet Allowance
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  APY
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Collateral
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-center">
              {/* Iterate through reserve data to create table rows */}
              {reserveData.map((reserve, index) => {
                const allowance = allowances[reserve.underlyingAsset as `0x${string}`];
                const isButtonDisabled = !allowance || parseFloat(allowance) === 0;

                return (
                  <tr key={index}>
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-gray-900">{reserve.symbol}</p>
                    </td>
                    <td className="px-6 py-4">
                      {/* Use Allowance to display the allowance */}
                      <Allowance
                        tokenAddress={reserve.underlyingAsset as `0x${string}`}
                        ownerAddress={walletAddress}
                        spenderAddress={walletAddress} // Adjust this if needed
                        onAllowanceChange={handleAllowanceChange}
                      />
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
                          isButtonDisabled ? "bg-gray-100 text-gray-300 cursor-not-allowed" : "bg-accent text-white"
                        }`}
                        disabled={isButtonDisabled}
                      >
                        Withdraw
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

export default YourSupplies;
