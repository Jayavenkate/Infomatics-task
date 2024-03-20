import { Description, Title } from "../BaseCompont/Base.styled";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { CategoryDiv } from "../Frirstcard/Firstcard.styled";
import { MultiBarChartDiv, CardDiv } from "./ThirdCard.styled";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
export const ThirdCard = () => {
  const options = {
    responsive: true,
    indexAxis: "y",
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        beginAtZero: true,
        stacked: true,
      },
      x: {
        display: false,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        align: "start",
        labels: {
          font: {
            size: "24px",
            weight: 400,
            family: "'Arial', sans-serif",
          },
          boxWidth: 22,
          boxHeight: 22,
          itemHeight: 30,
         
          filter: function (legendItem) {
            return legendItem.text !== "Dataset 5";
          },
        },
      },
    },
  };

  const data = {
    labels: [
      "Oil & Gas 32.19%",
      "Private Bank 26.04%",
      "Power Generation 26.40%",
    ],
    datasets: [
      {
        label: "Oil & Gas 32.19%",
        data: [{ x: [0, 8], y: "Oil & Gas 32.19%" }],
        backgroundColor: "#75D6FF",
        borderWidth: 1,
        barPercentage: 1.3,
      },
      {
        label: "Pharmaceuticals 26.40%",
        data: [{ x: [8, 18], y: "Oil & Gas 32.19%" }],
        backgroundColor: "#75FFFF",
        borderWidth: 1,
        barPercentage: 1.3,
      },
      {
        label: "Private Bank 26.04%",
        data: [{ x: [0, 8], y: "Private Bank 26.04%" }],
        backgroundColor: "#AA75FF",
        borderWidth: 1,
        barPercentage: 1.3,
      },
      {
        label: "Construction 12.03%",
        data: [{ x: [8, 18], y: "Private Bank 26.04%" }],
        backgroundColor: "#FF7BF2",
        borderWidth: 1,
        barPercentage: 1.3,
      },
      {
        label: "Dataset 5",
        data: [{ x: [0, 5], y: "Power Generation 26.40%" }],
        backgroundColor: "#FFD875",
        borderWidth: 1,
        barPercentage: 1.3,
      },
      {
        label: "Power Generation 26.40%",
        data: [{ x: [5, 9], y: "Power Generation 26.40%" }],
        backgroundColor: "#FFC46A",
        borderWidth: 1,
        barPercentage: 1.3,
      },
      {
        label: "Other 12.03%",
        data: [{ x: [9, 18], y: "Power Generation 26.40%" }],
        backgroundColor: "#FF8E5D",
        borderWidth: 1,
        barPercentage: 1.3,
      },
    ],
  };
  return (
    <CardDiv elevation={5}>
      <CategoryDiv>
        <Title>Top Sectors</Title>
        <Description>
          The assets are distributed between equity and cash & equivalents.
        </Description>
      </CategoryDiv>
   
      <MultiBarChartDiv >
        <Bar options={options} data={data} />
      </MultiBarChartDiv>
     
    </CardDiv>
  );
};


