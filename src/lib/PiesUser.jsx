import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import axios from "axios";

import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);
export function PiesUser() {
  const [dataSet, setDataSet] = useState([]);

  const tableData = async () => {
    const responst = await axios.get("api/users/chartUser");
    setDataSet(responst.data);
  };

  useEffect(() => {
    tableData();
  }, []);

  const data = {
    labels: dataSet.map((item) => item.title_type),
    datasets: [
      {
        label: "ภาระงานที่ทำ",
        data: dataSet.map((item) => item.total),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const option = {
    response: true,
    plugins: {
      title: {
        display: true,
        text: "ภาระงานประจำวัน",
        font: {
          size: 24,
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          display: false,
        },
      },
      y: {
        stacked: true,
        ticks: {
          display: false,
        },
      },
    },
  };
  return <Doughnut data={data} options={option} />;
}
