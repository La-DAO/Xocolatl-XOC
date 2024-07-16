import React from "react";
import IsolatedStateComponent from "@/components/tags/IsolatedState";
import { SupplyTableProps } from "@/types/assets/assets";

const SupplyTable: React.FC<SupplyTableProps> = ({ assets, isSupplied, onAction, onCollateralToggle }) => {
  const handleCollateralToggle = (asset: any) => {
    if (onCollateralToggle) {
      onCollateralToggle(asset);
    }
  };

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="text-center">
            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Assets
            </th>
            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              {isSupplied ? "Balance" : "Wallet Balance"}
            </th>
            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Max LTV
            </th>
            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
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
              <td className="px-6 py-4">
                <p className="text-sm font-medium text-gray-900">{asset.asset}</p>
              </td>
              <td className="px-6 py-4">
                <p className="text-sm text-gray-900">{isSupplied ? asset.balance : asset.walletBalance}</p>
                {isSupplied && <p className="text-xs text-gray-900">${asset.walletBalanceConverted}</p>}
              </td>
              <td className="px-6 py-4">
                <p className="text-sm text-gray-900">{asset.apy}%</p>
              </td>
              <td className="px-6 py-4">
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
                  ) : asset.collateral ? (
                    <span className="text-xl text-success font-bold">&#10003;</span>
                  ) : (
                    <IsolatedStateComponent message="Isolated" />
                  )}
                </div>
              </td>
              <td className="py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => onAction(asset)}
                  className={`px-3 py-1 rounded-md ${
                    asset.walletBalance === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-accent text-white"
                  }`}
                  disabled={asset.walletBalance === 0}
                >
                  {isSupplied ? "Withdraw" : "Deposit"}
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
