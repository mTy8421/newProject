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
  Legend
);
import axios from "axios";

import { useEffect, useState } from "react";

export function BarsUser() {
  const [dataSet, setDataSet] = useState([]);

  const tableData = async () => {
    const responst = await axios.get("api/users/chartBarUser");
    setDataSet(responst.data);
  };

  useEffect(() => {
    tableData();
  }, []);

  const options = {
    plugins: {
      title: {
        display: true,
        text: "ภาระงานประจำเดือน",
        font: {
          size: 24,
        },
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
        // grid: {
        //   display: false,
        // },
      },
      y: {
        stacked: true,
        // grid: {
        //   display: false,
        // },
        // border: {
        //   display: false,
        // },
        // ticks: {
        //   display: false,
        // },
      },
    },
  };

  const labels = [
    ["มกราคม"],
    ["กุมภาพันธ์"],
    ["มีนาคม"],
    ["เมษายน"],
    ["พฤษภาคม"],
    ["มิถุนายน"],
    ["กรกฎาคม"],
    ["สิงหาคม"],
    ["กันยายน"],
    ["ตุลาคม"],
    ["พฤศจิกายน"],
    ["ธันวาคม"],
  ];

  console.log(dataSet);
  const data = {
    labels: dataSet.map((item) => labels[item.month - 1]),
    datasets: [
      {
        label: "ภาระงานที่ทำ",
        data: dataSet.map((item) => item.total),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        stack: "Stack 0",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
