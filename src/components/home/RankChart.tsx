import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

import theme from "../../styles/theme";
import { Order } from "../../util/types";

ChartJS.register(...registerables);

const RankChart = ({ propsData }: { propsData: Order[] }) => {
  const countCarts = new Map();
  propsData.forEach((cart) => {
    cart.products.forEach((prod) => {
      if (countCarts.has(`${prod.productId}`)) {
        countCarts.set(
          `${prod.productId}`,
          countCarts.get(`${prod.productId}`) + prod.quantity
        );
      } else {
        countCarts.set(`${prod.productId}`, prod.quantity);
      }
    });
  });
  const productsRank = Array.from(countCarts)
    .sort((prod1, prod2) => prod2[1] - prod1[1])
    .splice(0, 7);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "상품 판매 순위",
      },
    },
  };
  const labels = [];
  const chartData = [];
  for (let i = 0; i < productsRank.length; i++) {
    labels.push(productsRank[i][0]);
    chartData.push(productsRank[i][1]);
  }

  const data = {
    labels,
    datasets: [
      {
        label: "판매 수",
        data: chartData,
        backgroundColor: theme.colors.darkBlue600,
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default RankChart;
