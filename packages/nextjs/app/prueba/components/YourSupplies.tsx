import React, { useCallback, useEffect, useState } from "react";
import Allowance from "./Allowance";
import CollateralToggle from "./CollateralToggle";
import useAccountAddress from "@/hooks/useAccount";
import useReadContracts from "@/hooks/useReadContracts";
import { Address } from "viem";

/**
 * Component for displaying user's supplies.
 * Fetches reserve data and corresponding allowances to display them in a list.
 */
const YourSupplies = () => {
  const {
    combinedReservesData: reserveData,
    isLoading: isLoadingReserveData,
    isError: isErrorReserveData,
  } = useReadContracts();
  const { address: walletAddress } = useAccountAddress();

  const [allowances, setAllowances] = useState<Record<string, string>>({});
  const [reservesWithAllowances, setReservesWithAllowances] = useState<any[]>([]);

  const handleAllowanceChange = useCallback((tokenAddress: Address, allowance: string) => {
    setAllowances(prevAllowances => ({ ...prevAllowances, [tokenAddress]: allowance }));
  }, []);

  useEffect(() => {
    if (reserveData) {
      const updatedReserves = reserveData.map(reserve => ({
        ...reserve,
        allowance: allowances[reserve.underlyingAsset as Address] || "0",
      }));
      setReservesWithAllowances(updatedReserves);
    }
  }, [reserveData, allowances]);

  return (
    <div className="mt-4">
      {isLoadingReserveData && <p className="text-amber-950">Loading...</p>}
      {isErrorReserveData && <p className="text-error">Error fetching data.</p>}

      {reservesWithAllowances.length > 0 && walletAddress ? (
        <div className="supplies-container">
          <div className="supplies-header py-3 flex text-center justify-between text-xs font-medium text-gray-500 uppercase tracking-wider">
            <div className="supplies-header-item w-24">Assets</div>
            <div className="supplies-header-item w-24">Balance</div>
            <div className="supplies-header-item w-24">APY</div>
            <div className="supplies-header-item w-24">Collateral</div>
            <div className="supplies-header-item w-24">Actions</div>
          </div>
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
                    <CollateralToggle
                      assetAddress={reserve.underlyingAsset}
                      initialUseAsCollateral={reserve.usageAsCollateralEnabledOnUser}
                    />
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
