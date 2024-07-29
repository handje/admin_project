import styled from "styled-components";

import { Count, Charts, List } from "../components/home";

import { useRouteLoaderData } from "react-router-dom";
import { Customer, Order, Product } from "../util/interfaces";

const Home = () => {
  const { products, customers, carts } = useRouteLoaderData("root") as {
    products: Product[];
    customers: Customer[];
    carts: Order[];
  };

  return (
    <Container>
      <Wrapper>
        <CountContainer>
          <Count>가입자 : {customers?.length}</Count>
          <Count>총 상품 : {products?.length}</Count>
        </CountContainer>
        <List title="최근 주문 내역" data={carts} />
      </Wrapper>
      <Wrapper>
        <Charts products={products} carts={carts} />
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding: 20px;
  @media ${({ theme }) => theme.mediaSize.md} {
    flex-direction: column;
    overflow-y: auto;
  }
`;
const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 15px;
  margin-top: 10px;
  @media ${({ theme }) => theme.mediaSize.md} {
    width: 100%;
  }
`;
const CountContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
