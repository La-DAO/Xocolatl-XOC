import React from "react";
import IsolatedStateComponent from "@/components/tags/IsolatedState";
import { SupplyTableProps } from "@/types/assets/assets";

const SupplyTable: React.FC<SupplyTableProps> = ({ assets, isSupplied, onAction, onCollateralToggle }) => {
  const handleCollateralToggle = (asset: any) => {
    console.log("Toggling collateral for asset:", asset);
    if (onCollateralToggle) {
      onCollateralToggle(asset);
    }
  };

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="text-center">
            {/* Column headers */}
            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Assets
            </th>
            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              {isSupplied ? "Balance" : "Wallet Balance"}
            </th>
            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              APY
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {isSupplied ? "Collateral" : "Can be collateral"}
            </th>
            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-center">
          {assets.map((asset, index) => (
            <tr key={index}>
              {/* Asset name */}
              <td className="py-4">
                <p className="text-sm font-medium text-gray-900">{asset.asset}</p>
              </td>
              {/* Display balance or wallet balance */}
              <td className="py-4">
                {isSupplied ? (
                  <>
                    <p className="text-sm text-gray-900 font-medium">{asset.balance}</p>
                    <p className="text-xs text-gray-900">${asset.walletBalanceConverted}</p>
                  </>
                ) : (
                  <p className="text-sm text-gray-900 font-medium">{asset.walletBalance}</p>
                )}
              </td>
              {/* Display APY */}
              <td className="py-4">
                <p className="text-sm text-gray-900">{asset.apy}%</p>
              </td>
              {/* Display collateral status */}
              <td className="py-4">
                <div className="text-sm text-gray-900">
                  {isSupplied ? (
                    asset.isIsolated ? (
                      <IsolatedStateComponent message="Isolated" />
                    ) : (
                      <label className="toggle-label">
                        <input
                          type="checkbox"
                          checked={asset.collateral}
                          className="toggle-checkbox"
                          onChange={() => handleCollateralToggle(asset)}
                        />
                        <span className="toggle-label"></span>
                      </label>
                    )
                  ) : asset.isIsolated ? (
                    <IsolatedStateComponent message="Isolated" />
                  ) : asset.collateral ? (
                    <span className="text-xl text-success font-bold">&#10003;</span>
                  ) : (
                    <IsolatedStateComponent message="Isolated" />
                  )}
                </div>
              </td>
              {/* Action button for supply or withdraw */}
              <td className="py-4 whitespace-nowrap text-sm font-medium">
                <button onClick={() => onAction(asset)} className="bg-accent text-white px-3 py-1 rounded-md">
                  {isSupplied ? "Withdraw" : "Supply"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplyTable;
