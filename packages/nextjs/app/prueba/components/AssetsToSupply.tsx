import React, { useCallback, useState } from "react";
import WalletBalance from "./WalletBalance";
import IsolatedStateComponent from "@/components/tags/IsolatedState";
import useAccountAddress from "@/hooks/useAccount";
import useReadContracts from "@/hooks/useReadContracts";

/**
 * Component for displaying assets that can be supplied.
 * Fetches reserve data and corresponding wallet balances to display them in a table.
 */
const AssetsToSupply = () => {
  // Hook to fetch reserve data
  const { data: reserveData, isLoading: isLoadingReserveData, isError: isErrorReserveData } = useReadContracts();
  // Hook to fetch the account address
  const { address: walletAddress } = useAccountAddress();

  // State to store balances of the assets
  const [balances, setBalances] = useState<Record<string, string>>({});
  // State to manage the check for filtering
  const [showAll, setShowAll] = useState(true);

  /**
   * Callback function to handle balance change.
   * Updates the state with new balances.
   */
  const handleBalanceChange = useCallback((tokenAddress: `0x${string}`, balance: string) => {
    setBalances(prevBalances => ({ ...prevBalances, [tokenAddress]: balance }));
  }, []);

  /**
   * Function to filter reserve data based on the balance and showAll state.
   */
  const filteredReserveData = reserveData?.filter(reserve => {
    const balance = balances[reserve.underlyingAsset as `0x${string}`];
    return showAll || (balance && parseFloat(balance) > 0);
  });

  return (
    <div className="mt-4">
      {/* Display loading or error state for reserve data */}
      {isLoadingReserveData && <p className="text-amber-950">Loading...</p>}
      {isErrorReserveData && <p className="text-error">Error fetching data.</p>}

      {/* Checkbox to toggle showing all or filtered assets */}
      <div className="mb-4">
        <label className="cursor-pointer text-amber-950 flex items-center">
          <input
            type="checkbox"
            checked={showAll}
            onChange={() => setShowAll(prev => !prev)}
            className="mr-2 bg-white form-checkbox h-5 w-5"
          />
          Show assets with 0 balance
        </label>
      </div>

      {/* Display table if reserve data is available */}
      {filteredReserveData && walletAddress && (
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
              {filteredReserveData.map((reserve, index) => {
                const balance = balances[reserve.underlyingAsset as `0x${string}`];
                const isButtonDisabled = !balance || parseFloat(balance) === 0;

                return (
                  <tr key={index}>
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-gray-900">{reserve.symbol}</p>
                    </td>
                    <td className="px-6 py-4">
                      {/* Use WalletBalance to display the balance */}
                      <WalletBalance
                        tokenAddress={reserve.underlyingAsset as `0x${string}`}
                        walletAddress={walletAddress}
                        onBalanceChange={handleBalanceChange}
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
