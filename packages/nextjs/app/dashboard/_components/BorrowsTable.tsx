import React from "react";
import { BorrowTableProps } from "@/types/assets/assets";

const AssetsTable: React.FC<BorrowTableProps> = ({ assets, isBorrowed }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50 text-center">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            {isBorrowed ? "Assets" : "Asset"}
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            {isBorrowed ? "Debt" : "Available"}
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            APY
          </th>
          {isBorrowed && (
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              APY Type
            </th>
          )}
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
              <div className="text-sm text-gray-900">{isBorrowed ? asset.debt : asset.available}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{asset.apy}</div>
            </td>
            {isBorrowed && (
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{asset.apyType}</div>
              </td>
            )}
            <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
              <button className={`bg-accent text-white px-3 py-1 rounded-md`}>{isBorrowed ? "Repay" : "Borrow"}</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AssetsTable;
