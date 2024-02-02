import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { RootState, useAppSelector } from "../store/store";
import { IssueTypes } from "../enums";
import { countByStatus } from "../utils";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [chartData, setChartData] = useState<any>({ datasets: [] });
  const [chartOptions, setChartOptions] = useState({});
  const { issues } = useAppSelector((state: RootState) => state.store.issues);

  // Count issues for each status
  const openIssueCount = countByStatus(issues, IssueTypes.OPEN);
  const inProgressCount = countByStatus(issues, IssueTypes.INPROGRESS);
  const resolvedCount = countByStatus(issues, IssueTypes.RESOLVED);
  const closedCount = countByStatus(issues, IssueTypes.CLOSED);

  useEffect(() => {
    setChartData({
      labels: [
        IssueTypes.OPEN,
        IssueTypes.INPROGRESS,
        IssueTypes.RESOLVED,
        IssueTypes.CLOSED,
      ],
      datasets: [
        {
          label: "Ticket count",
          data: [openIssueCount, inProgressCount, resolvedCount, closedCount],
          borderColor: "rgb(64, 149, 255)",
          backgroundColor: "rgb(64, 149, 255, 0.8",
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Overview",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [issues]);

  return (
    <>
      <div className="w-full md:col-span-2 lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};
