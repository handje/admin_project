import { Chart as ChartJS, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import theme from "../../styles/theme";
import { Product } from "../../util/types";

ChartJS.register(...registerables);

const CategoryChart = ({ products }: { products: Product[] }) => {
  const countProducts = new Map();
  products.forEach((product) => {
    if (countProducts.has(product.category)) {
      countProducts.set(
        product.category,
        countProducts.get(product.category) + 1
      );
    } else {
      countProducts.set(product.category, 1);
    }
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },

      title: {
        display: true,
        text: "카테고리별 상품 수",
      },
    },
  };
  const labels = [];
  const chartData = [];
  for (const [key, value] of countProducts) {
    labels.push(key);
    chartData.push(value);
  }
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

export default CategoryChart;
