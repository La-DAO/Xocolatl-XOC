import React from "react";

/**
 * Borrows component displays a list of assets available to borrow.
 * It also shows assets the user has borrowed and allows for borrowing actions.
 */
const Borrows: React.FC = () => {
  // Sample data for assets available to borrow
  const assetsToBorrow = [
    { asset: "WETH", available: "0.01", apy: "0.46%" },
    { asset: "USDC", available: "100", apy: "2.10%" },
  ];

  return (
    <div className="rounded-md">
      {/* Container for borrows section */}
      <div className="w-full bg-white px-6 py-4 rounded-2xl shadow-md mb-4">
        <h2 className="text-2xl text-primary font-semibold mb-2">Your Borrows</h2>
        <p className="text-slate-800">Nothing borrowed yet</p>
      </div>

      {/* Container for assets available to borrow */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl text-primary font-semibold mb-4">Assets to Borrow</h2>
        <p className="text-gray-500 mb-4">Select the amount of WETH to deposit as collateral</p>
        {/* Table displaying assets available to borrow */}
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Asset
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Available
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                APY
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {assetsToBorrow.map((asset, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">{asset.asset}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{asset.available}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{asset.apy}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="bg-accent text-white px-3 py-1 rounded-md">Borrow</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Borrows;
