import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import theme from "../../styles/theme";

ChartJS.register(...registerables);

const BarChart = ({
  title,
  label,
  propsData,
}: {
  title: string;
  label: string;
  propsData: [string, number][];
}) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
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

  const data = {
    labels,
    datasets: [
      {
        label: label,
        data: chartData,
        backgroundColor: theme.colors.darkBlue600,
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default BarChart;
