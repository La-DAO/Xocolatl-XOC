import React from "react";

// import { useTranslation } from "../../context/LanguageContext";

interface Stream {
  id: string;
  from: string;
  to: string;
  allTimeFlow: number;
  flowRate: number;
  startDate: Date;
  endDate?: Date;
}

// Mock data for demonstration
const mockStreams: Stream[] = [
  {
    id: "1",
    from: "0x1234...5678",
    to: "0x8765...4321",
    allTimeFlow: 1500.5,
    flowRate: 100.25,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
  },
  {
    id: "2",
    from: "0x9876...5432",
    to: "0x2468...1357",
    allTimeFlow: 2750.75,
    flowRate: 150.5,
    startDate: new Date("2024-02-15"),
  },
  // Add more mock data as needed
];

const ActiveStreams: React.FC = () => {
  const formatAddress = (address: string) => {
    return address;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString();
  };

  const formatFlowRate = (rate: number) => {
    return `${rate.toFixed(2)} $XOC/month`;
  };

  const formatAllTimeFlow = (amount: number) => {
    return `${amount.toFixed(2)} $XOC`;
  };

  return (
    <div className="mt-8 bg-white dark:bg-base-100 rounded-2xl p-6 shadow-lg">
      <h2 className="text-3xl font-bold text-neutral dark:text-white mb-6">Active Streams</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">To/From</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                All Time Flow
              </th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Flow Rate</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                Start/End Date
              </th>
            </tr>
          </thead>
          <tbody>
            {mockStreams.map(stream => (
              <tr
                key={stream.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="py-4 px-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600 dark:text-gray-300">From: {formatAddress(stream.from)}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">To: {formatAddress(stream.to)}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-300">
                  {formatAllTimeFlow(stream.allTimeFlow)}
                </td>
                <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-300">
                  {formatFlowRate(stream.flowRate)}
                </td>
                <td className="py-4 px-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Start: {formatDate(stream.startDate)}
                    </span>
                    {stream.endDate && (
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        End: {formatDate(stream.endDate)}
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveStreams;
