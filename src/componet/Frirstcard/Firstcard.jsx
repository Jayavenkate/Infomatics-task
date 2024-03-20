import { Pie } from "react-chartjs-2";
import { CardDiv, Description, Title } from "../BaseCompont/Base.styled";
import { CategoryDiv, PieChartDiv } from "./Firstcard.styled";
ChartJS.register(ArcElement, Tooltip, Legend);

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

export const Firstcard = () => {
  const data = {
    labels: [
      "Flexi Cap Fund 32.19%",
      "Large & Mid Cap Fund 12.03%",
      "Sectoral Fund 26.40%",

      "Index Fund 12.03%",
      "ELSS 26.04%",
      "Small Cap Fund 26.40%",
    ],
    datasets: [
      {
        data: [42, 29, 23, 20, 12, 12],
        backgroundColor: [
          "#75D6FF",
          "#FF8E5D",
          "#FFC46A",

          "#FF7BF2",
          "#AA75FF",
          "#75FFFF",
        ],
        borderColor: [
          "#75D6FF",
          "#FF8E5D",
          "#FFC46A",

          "#FF7BF2",
          "#AA75FF",
          "#75FFFF",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: true,
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
        },
      },
    },


  };

  return (
    <CardDiv elevation={5}>
      <CategoryDiv>
        <Title>Sub-Category</Title>
        <Description>
          The assets are distributed between equity and cash & equivalents
        </Description>
      </CategoryDiv>
      <PieChartDiv>
        <Pie data={data} options={options} />
      </PieChartDiv>
    </CardDiv>
  );
};
