"use client";

import { useEffect, useState } from "react";
import { generateMockPriceData } from "~~/app/utils/mockData";

interface PriceData {
  timestamp: number;
  price: number;
}

export const PriceChart = () => {
  const [priceData, setPriceData] = useState<PriceData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock bounds - replace with real data when contracts are ready
  const lowerPrice = 1.2;
  const upperPrice = 1.8;

  useEffect(() => {
    // Simulate price data fetching
    const fetchPriceData = () => {
      const data = generateMockPriceData();
      setPriceData(data);
    };

    fetchPriceData();
    setIsLoading(false);

    // Poll for new data every 15 seconds
    const interval = setInterval(fetchPriceData, 15000);

    return () => clearInterval(interval);
  }, []);

  const currentPrice = priceData[priceData.length - 1]?.price || 0;

  if (isLoading) {
    return (
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Price Chart</h2>
          <div className="flex items-center justify-center h-64">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow-xl bg-primary dark:bg-neutral dark:text-primary">
      <div className="card-body">
        <h2 className="card-title">Price Chart</h2>
        <div className="relative h-64 bg-base-100 rounded-lg p-4">
          {/* Chart placeholder - replace with actual charting library */}
          <div className="h-full flex items-end justify-between">
            {priceData.map((point, index) => (
              <div
                key={index}
                className="bg-primary rounded-sm"
                style={{
                  width: "2px",
                  height: `${(point.price / 2) * 100}%`,
                  opacity: 0.7,
                }}
              />
            ))}
          </div>

          {/* Price bounds overlay */}
          <div className="absolute inset-0 pointer-events-none dark:bg-contrast">
            <div
              className="absolute w-full border-t-2 border-success"
              style={{ top: `${100 - (lowerPrice / 2) * 100}%` }}
            >
              <span className="bg-success text-success-content px-2 py-1 rounded text-xs">
                Lower: ${lowerPrice.toFixed(4)}
              </span>
            </div>
            <div
              className="absolute w-full border-t-2 border-error"
              style={{ top: `${100 - (upperPrice / 2) * 100}%` }}
            >
              <span className="bg-error text-error-content px-2 py-1 rounded text-xs">
                Upper: ${upperPrice.toFixed(4)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-sm">
            <span className="text-base-content/70 dark:text-primary">Current Price: </span>
            <span className="font-bold text-primary dark:text-primary">${currentPrice.toFixed(4)}</span>
          </div>
          <div className="text-xs text-base-content/50 dark:text-primary">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
};
