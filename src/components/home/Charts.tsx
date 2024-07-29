import { styled } from "styled-components";

import { DoughnutChart, BarChart } from "../common";
import { Product, Order } from "../../util/interfaces";

const Charts = ({
  products,
  carts,
}: {
  products: Product[];
  carts: Order[];
}) => {
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

  const countCarts = new Map();
  carts.forEach((cart) => {
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
  const productsRank = Array.from(countCarts).sort(
    (prod1, prod2) => prod2[1] - prod1[1]
  );

  return (
    <>
      <ChartContainer>
        <DoughnutChart
          title="카테고리별 상품 수"
          propsData={Array.from(countProducts)}
        ></DoughnutChart>
      </ChartContainer>
      <ChartContainer>
        <BarChart
          title="상품 판매 순위"
          label="판매 수"
          propsData={productsRank.splice(0, 7)}
        ></BarChart>
      </ChartContainer>
    </>
  );
};

export default Charts;
const ChartContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.border300};
  margin-bottom: 5px;
`;
