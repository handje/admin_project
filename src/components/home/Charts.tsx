import styled from "styled-components";

import { Chart } from "../common";

const Charts = ({ products, carts }) => {
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
      if (countCarts.has(prod.productId)) {
        countCarts.set(
          prod.productId,
          countCarts.get(prod.productId) + prod.quantity
        );
      } else {
        countCarts.set(prod.productId, prod.quantity);
      }
    });
  });

  return (
    <Wrapper>
      <Chart title="카테고리별 상품 수" propsData={countProducts}></Chart>
      <Chart title="상품 판매 순위" propsData={countCarts}></Chart>
    </Wrapper>
  );
};

export default Charts;
const Wrapper = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin-right: 15px;
  margin-top: 10px;
`;
