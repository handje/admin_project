import styled from "styled-components";
import { useRouteLoaderData } from "react-router-dom";

import { Count, List, CategoryChart, RankChart } from "../components/home";
import { User, Cart, Product } from "../util/types";

const Home = () => {
  const { products, users, carts } = useRouteLoaderData("root") as {
    products: Product[];
    users: User[];
    carts: Cart[];
  };

  return (
    <Container>
      <Wrapper>
        <CountContainer>
          <Count>가입자 : {users?.length}</Count>
          <Count>총 상품 : {products?.length}</Count>
        </CountContainer>
        <List title="최근 주문 내역" data={carts} />
      </Wrapper>
      <Wrapper>
        <ChartContainer>
          <CategoryChart products={products}></CategoryChart>
        </ChartContainer>
        <ChartContainer>
          <RankChart propsData={carts}></RankChart>
        </ChartContainer>
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
  height: 90%;
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
const ChartContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.border300};
  margin-bottom: 5px;
`;
