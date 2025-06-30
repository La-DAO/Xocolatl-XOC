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
import { useApyHistory } from "~~/hooks/useApyHistory";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type APYGraphProps = {
  mode: "Supply" | "Borrow";
  tokenAddress: string;
};

const APYGraph: React.FC<APYGraphProps> = ({ mode, tokenAddress }) => {
  const [timePeriod, setTimePeriod] = useState("1month");
  const [isMobile, setIsMobile] = useState(false);
  const { data, isLoading } = useApyHistory(tokenAddress, timePeriod);

  // Check if we're on mobile after component mounts
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const apyData = data || [];

  const sampledData = timePeriod === "1month" ? apyData.slice(-15) : apyData.slice(-50);

  const chartLabels = sampledData.map((d: any) => dayjs(d.timestamp).format("MMM D, HH:mm"));

  const chartValues = sampledData.map((d: any) => (mode === "Supply" ? Number(d.supply_apy) : Number(d.borrow_apr)));

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: mode === "Supply" ? "Supply APY" : "Borrow APR",
        data: chartValues,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
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
        text: mode === "Supply" ? `${mode} APY` : `${mode} APR, variable`,
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

  const handleTimePeriodChange = (period: string) => {
    setTimePeriod(period);
    // Update the data based on the selected time period
  };

  return (
    <div>
      <div className="flex justify-end gap-2 md:gap-4 mb-4">
        <button
          onClick={() => handleTimePeriodChange("1month")}
          className={`btn btn-xs md:btn-sm ${
            timePeriod === "1month"
              ? "btn-primary text-white"
              : "btn-outline dark:text-primary dark:hover:bg-base-200 dark:hover:text-white"
          }`}
        >
          <span className="hidden sm:inline">1 Month</span>
          <span className="sm:hidden">1M</span>
        </button>
        <button
          onClick={() => handleTimePeriodChange("6months")}
          className={`btn btn-xs md:btn-sm ${
            timePeriod === "6months"
              ? "btn-primary text-white"
              : "btn-outline dark:text-primary dark:hover:bg-base-200 dark:hover:text-white"
          }`}
        >
          <span className="hidden sm:inline">6 Months</span>
          <span className="sm:hidden">6M</span>
        </button>
      </div>
      <div className="h-64 md:h-80 lg:h-96">
        {isLoading ? (
          <div className="h-full flex items-center justify-center">
            <p className="text-center">Loading...</p>
          </div>
        ) : (
          <Line data={chartData} options={options} />
        )}
      </div>
    </div>
  );
};

export default APYGraph;

// VSCode wouldn't let me comment this block above
/* 
<button onClick={() => handleTimePeriodChange("1year")} className="btn">
  1 Year
</button>
*/
