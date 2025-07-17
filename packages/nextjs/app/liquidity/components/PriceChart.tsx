"use client";

import React, { useEffect, useState } from "react";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import dayjs from "dayjs";
import { Line } from "react-chartjs-2";
import { usePriceHistory } from "~~/hooks/usePriceHistory";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface PriceDataPoint {
  timestamp: number;
  price: number;
}

export const PriceChart = () => {
  const [timePeriod, setTimePeriod] = useState<"1month" | "6months" | "1year">("1month");
  const [isMobile, setIsMobile] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>("");

  // Fetch price history from Supabase
  const { data: priceHistoryData, isLoading } = usePriceHistory();

  // Check if we're on mobile after component mounts and set current time
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString());
    };

    checkMobile();
    updateTime();
    window.addEventListener("resize", checkMobile);

    // Update time every 5 seconds instead of every second to reduce re-renders
    const timeInterval = setInterval(updateTime, 5000);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearInterval(timeInterval);
    };
  }, []);

  // Convert Supabase data to chart format
  const priceHistory: PriceDataPoint[] = React.useMemo(() => {
    return (
      priceHistoryData?.map((item: any) => ({
        timestamp: new Date(item.timestamp).getTime(),
        price: Number(item.fetch_spot) / 1e18, // Convert from wei to decimal format
      })) || []
    );
  }, [priceHistoryData]);

  // Sample data based on time period to avoid overcrowding
  const { chartLabels, chartValues, currentPrice } = React.useMemo(() => {
    const sampledData =
      timePeriod === "1month"
        ? priceHistory.slice(-30)
        : timePeriod === "6months"
        ? priceHistory.slice(-60)
        : priceHistory.slice(-90);

    const chartLabels = sampledData.map(d => dayjs(d.timestamp).format("MMM D, HH:mm"));
    const chartValues = sampledData.map(d => d.price);
    const currentPrice = chartValues[chartValues.length - 1] || 0;

    return { chartLabels, chartValues, currentPrice };
  }, [priceHistory, timePeriod]);

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: "Pool Price",
        data: chartValues,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          boxWidth: 12,
          padding: 8,
          font: {
            size: isMobile ? 10 : 12,
          },
        },
      },
      title: {
        display: true,
        text: "Pool Price History",
        font: {
          size: isMobile ? 14 : 16,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 45,
          font: {
            size: isMobile ? 8 : 10,
          },
        },
        grid: {
          display: !isMobile,
        },
      },
      y: {
        ticks: {
          font: {
            size: isMobile ? 8 : 10,
          },
          callback: function (value: any) {
            return `$${Number(value).toFixed(4)}`;
          },
        },
        grid: {
          display: !isMobile,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index" as const,
    },
    elements: {
      point: {
        radius: isMobile ? 2 : 4,
        hoverRadius: isMobile ? 4 : 6,
      },
      line: {
        borderWidth: isMobile ? 1 : 2,
      },
    },
  };

  const handleTimePeriodChange = (period: "1month" | "6months" | "1year") => {
    setTimePeriod(period);
  };

  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between items-center mb-4">
          <h2 className="card-title">Price Chart</h2>
          <div className="flex gap-2">
            <button
              onClick={() => handleTimePeriodChange("1month")}
              className={`btn btn-xs ${timePeriod === "1month" ? "btn-primary text-white" : "btn-outline"}`}
            >
              1M
            </button>
            <button
              onClick={() => handleTimePeriodChange("6months")}
              className={`btn btn-xs ${timePeriod === "6months" ? "btn-primary text-white" : "btn-outline"}`}
            >
              6M
            </button>
            <button
              onClick={() => handleTimePeriodChange("1year")}
              className={`btn btn-xs ${timePeriod === "1year" ? "btn-primary text-white" : "btn-outline"}`}
            >
              1Y
            </button>
          </div>
        </div>

        <div className="h-64 md:h-80 lg:h-96">
          {isLoading ? (
            <div className="h-full flex items-center justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : priceHistory.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <p className="text-center text-base-content/70">No price data available</p>
            </div>
          ) : (
            <Line data={chartData} options={options} />
          )}
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-sm">
            <span className="text-base-content/70">Current Price: </span>
            <span className="font-bold text-primary dark:text-white text-2xl">${currentPrice.toFixed(2)}</span>
          </div>
          <div className="text-xs text-base-content/50">Last updated: {currentTime || "..."}</div>
        </div>
      </div>
    </div>
  );
};
