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
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const APYGraph: React.FC = () => {
  const [timePeriod, setTimePeriod] = useState("1month");

  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "APY",
        data: [2.5, 2.7, 2.6, 2.8], // Example data
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
        text: `APY Over ${timePeriod}`,
      },
    },
  };

  const handleTimePeriodChange = (period: string) => {
    setTimePeriod(period);
    // Update the data based on the selected time period
  };

  return (
    <div>
      <div className="flex justify-center gap-4 mb-4">
        <button onClick={() => handleTimePeriodChange("1month")} className="btn">
          1 Month
        </button>
        <button onClick={() => handleTimePeriodChange("6months")} className="btn">
          6 Months
        </button>
        <button onClick={() => handleTimePeriodChange("1year")} className="btn">
          1 Year
        </button>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default APYGraph;
