import { Chart as ChartJS, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import theme from "../../styles/theme";

ChartJS.register(...registerables);

const DoughnutChart = ({
  title,
  propsData,
}: {
  title: string;
  propsData: [string, number][];
}) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },

      title: {
        display: true,
        text: title,
      },
    },
  };
  const labels = [];
  const chartData = [];
  for (let i = 0; i < propsData.length; i++) {
    labels.push(propsData[i][0]);
    chartData.push(propsData[i][1]);
  }
  console.log(theme.colors);
  const data = {
    labels,
    datasets: [
      {
        data: chartData,
        backgroundColor: [
          theme.colors.darkBlue100,
          theme.colors.darkBlue600,
          theme.colors.darkBlue300,
          theme.colors.darkBlue400,
          theme.colors.darkBlue500,
          theme.colors.darkBlue200,
        ],
      },
    ],
  };
  return <Doughnut options={options} data={data} />;
};

export default DoughnutChart;
