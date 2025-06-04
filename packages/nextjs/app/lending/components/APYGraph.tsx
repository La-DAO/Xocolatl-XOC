import React, { useState } from "react";
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
  const { data, isLoading } = useApyHistory(tokenAddress, timePeriod);

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
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: mode === "Supply" ? `${mode} APY` : `${mode} APR, variable`,
      },
    },
  };

  const handleTimePeriodChange = (period: string) => {
    setTimePeriod(period);
    // Update the data based on the selected time period
  };

  return (
    <div>
      <div className="flex justify-end gap-4 mb-4">
        <button onClick={() => handleTimePeriodChange("1month")} className="btn btn-sm">
          1 Month
        </button>
        <button onClick={() => handleTimePeriodChange("6months")} className="btn btn-sm">
          6 Months
        </button>
      </div>
      {isLoading ? <p className="text-center">Loading...</p> : <Line data={chartData} options={options} />}
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
