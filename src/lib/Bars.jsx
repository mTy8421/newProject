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
      display: true,
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
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["January", "February", "March"];

const data = {
  labels,
  datasets: [
    {
      label: "Test Data",
      data: [1, 2, 3],
      backgroundColor: "rgb(255, 99, 132)",
      stack: "Stack 0",
    },
  ],
};

export function Bars() {
  return <Bar options={options} data={data} />;
}
