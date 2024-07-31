import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  plugins: {
    title: {
      display: false,
      text: "Test",
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      }
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

const labels = ["January", "February", "March"];

const data = {
  labels,
  datasets: [
    {
      label: "Test Data",
      data: [1, 4, 3],
      backgroundColor: "rgb(255, 99, 132)",
      stack: "Stack 0",
    },
  ],
};

export function Bars() {
  return <Bar options={options} data={data} />;
}
