import React, { useCallback, useState } from "react";
import WalletBalance from "./WalletBalance";
import IsolatedStateComponent from "@/components/tags/IsolatedState";
import useAccountAddress from "@/hooks/useAccount";
import useReadContracts from "@/hooks/useReadContracts";

/**
 * Component for displaying assets that can be supplied.
 * Fetches reserve data and corresponding wallet balances to display them in a div-based layout.
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
      {!isLoadingReserveData && !isErrorReserveData && (
        <div className="mb-4 w-fit">
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
      )}

      {/* Display assets if reserve data is available */}
      {filteredReserveData && walletAddress && (
        <div className="assets-container">
          {/* Header for assets */}
          <div className="assets-header py-3 flex text-center justify-between items-center text-xs font-medium text-gray-500 uppercase tracking-wider">
            <div className="assets-header-item w-24">Assets</div>
            <div className="assets-header-item w-24">Wallet Balance</div>
            <div className="assets-header-item w-24">APY</div>
            <div className="assets-header-item w-24">Can be collateral</div>
            <div className="assets-header-item w-24">Actions</div>
          </div>

          {/* Iterate through filtered reserve data to create rows */}
          {filteredReserveData.map((reserve, index) => {
            const balance = balances[reserve.underlyingAsset as `0x${string}`];
            const isButtonDisabled = !balance || parseFloat(balance) === 0;

            return (
              <div
                key={index}
                className="asset-row flex justify-between py-3 text-sm text-center border-t border-t-gray-200 items-center"
              >
                <div className="asset-row-item w-24 h-fit">
                  <p className="text-sm font-medium text-gray-900">{reserve.symbol}</p>
                </div>
                <div className="asset-row-item w-24 h-fit">
                  {/* Use WalletBalance to display the balance */}
                  <WalletBalance
                    tokenAddress={reserve.underlyingAsset as `0x${string}`}
                    walletAddress={walletAddress}
                    onBalanceChange={handleBalanceChange}
                  />
                </div>
                <div className="asset-row-item w-24 h-fit">
                  <p className="text-sm text-gray-900">{(Number(reserve.liquidityRate) / 1e25).toFixed(2)}%</p>
                </div>
                <div className="asset-row-item w-24 h-fit">
                  <div className="text-sm text-gray-900">
                    {/* Display collateral status */}
                    {reserve.usageAsCollateralEnabled ? (
                      <span className="text-xl text-success font-bold">&#10003;</span>
                    ) : (
                      <IsolatedStateComponent message="Isolated" />
                    )}
                  </div>
                </div>
                <div className="asset-row-item w-24 h-fit">
                  <button
                    className={`px-3 py-1 rounded-md ${
                      isButtonDisabled ? "bg-gray-100 text-gray-300 cursor-not-allowed" : "bg-accent text-white"
                    }`}
                    disabled={isButtonDisabled}
                  >
                    Supply
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AssetsToSupply;
