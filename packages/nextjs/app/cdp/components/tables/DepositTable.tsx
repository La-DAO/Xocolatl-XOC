import React from "react";

const DepositTable: React.FC = () => {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="text-center">
            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Assets
            </th>
            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Balance
            </th>
            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Max LTV
            </th>
            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Liquidation Threshold
            </th>
            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-center">
          <tr>
            <td className="px-6 py-4">
              <p className="text-sm font-medium text-gray-900">WETH</p>
            </td>
            <td className="px-6 py-4">
              <p className="text-sm text-gray-900">Null</p>
            </td>
            <td className="px-6 py-4">
              <p className="text-sm text-gray-900">85%</p>
            </td>
            <td className="px-6 py-4">
              <div className="text-sm text-gray-900">
                <p className="text-sm text-gray-900">85%</p>
              </div>
            </td>
            <td className="px-6 py-4">
              <button className="text-sm text-gray-900">Deposit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DepositTable;
