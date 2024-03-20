import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import './Second.css'
import { Bar } from "react-chartjs-2";
import { Description, Title } from "../BaseCompont/Base.styled";
import { CategoryDiv } from "../Frirstcard/Firstcard.styled";
import { BarChartDiv, SecondcardDiv } from "./Secondcard.styled";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const SecondCard = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    aspectRatio: 7,
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
          // Filter out legend items for "April" and "Dataset 6"
          filter: function (legendItem) {
            return (
              legendItem.text !== "April" && legendItem.text !== "Dataset 6"
            );
          },
        },
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "Equity 32.19%",
        data: [{ x: [0, 5.5], y: "Equity 32.19%" }],
        backgroundColor: "#75D6FF",
      },
      {
        label: "Bonds 26.40%",
        data: [{ x: [5.5, 9], y: "Equity 32.19%" }],
        backgroundColor: "#75FFFF",
      },
      {
        label: "Gold 26.04%",
        data: [{ x: [9, 12], y: "Equity 32.19%" }],
        backgroundColor: "#AA75FF",
      },
      {
        label: "April",
        data: [{ x: [12, 14.3], y: "Equity 32.19%" }],
        backgroundColor: "#FF7BF2",
      },
      {
        label: "Govt. Securities 26.40%",
        data: [{ x: [14, 16], y: "Equity 32.19%" }],
        backgroundColor: "#FFC46A",
      },
      {
        label: "Dataset 6",
        data: [{ x: [16, 18], y: "Equity 32.19%" }],
        backgroundColor: "#FF8E5D",
      },
    ],
  };

  const Barchart = () => {
    return (
      <BarChartDiv>
        <Bar options={options} data={data} />
      </BarChartDiv>
    );
  };
  return (
    <SecondcardDiv elevation={5}>
      <CategoryDiv>
        <Title>Fund Distribution</Title>
        <Description>
          A mutual fund distribution represents the earnings of a fund being
          passed on to the individual investor or unit holder of the fund.
        </Description>
      </CategoryDiv>
      {Barchart()}
    </SecondcardDiv>
  );
};
