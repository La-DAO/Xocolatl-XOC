import React from "react";

interface Asset {
  asset: string;
  walletBalance?: string;
  balance?: string;
  apy: string;
  collateral: boolean;
}

interface SupplyTableProps {
  assets: Asset[];
  isSupplied: boolean;
}

const SupplyTable: React.FC<SupplyTableProps> = ({ assets, isSupplied }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Assets
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            {isSupplied ? "Balance" : "Wallet Balance"}
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            APY
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Collateral
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {assets.map((asset, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="text-sm font-medium text-gray-900">{asset.asset}</div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{isSupplied ? asset.balance : asset.walletBalance}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{asset.apy}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">
                {asset.collateral ? <span>&#10003;</span> : <span>&#10007;</span>}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
              <button className={`bg-accent text-white px-3 py-1 rounded-md`}>
                {isSupplied ? "Withdraw" : "Supply"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SupplyTable;
