import styled from "styled-components";

import { Count, Charts, List } from "../components/home";
import { useEffect, useState } from "react";
import {
  fetchAllCarts,
  fetchAllCustomersInfo,
  fetchAllProducts,
} from "../util/fetchData";

const Home = () => {
  const [usersCount, setUsersCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const users = await fetchAllCustomersInfo();
        const products = await fetchAllProducts();
        const carts = await fetchAllCarts();
        setUsersCount(users.length);
        setProducts(
          products.map((prod) => ({
            id: prod.id,
            title: prod.title,
            category: prod.category,
          }))
        );
        setCarts(carts);
      } catch (err) {
        throw new Error();
      }
    };
    fetchAllData();
  }, []);

  return (
    <Container>
      <Wrapper>
        <CountContainer>
          <Count>가입자 : {usersCount}</Count>
          <Count>총 상품 : {products?.length}</Count>
        </CountContainer>
        <List title="최근 주문 내역" data={carts} />
      </Wrapper>
      <Charts products={products} carts={carts} />
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
`;
const CountContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
