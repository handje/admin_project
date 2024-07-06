import styled from "styled-components";

import { Card, Table } from "../common";
//최근 로그인한 유저, 가입자 수, 카테고리별 상품 수, 가입자수 변동 , 장바구니에 많이 담긴 상품
const Home = () => {
  return (
    <Container>
      <UserContainer>
        <CountContainer>
          <CountBox>가입자수 : 10</CountBox>
          <CountBox>총 상품수 : 10</CountBox>
        </CountContainer>
        <h2 id="logined-user">최근 로그인한 유저</h2>
        <Table aria-labelledby="logined-user">
          <Head>
            <tr>
              <th>NAME</th>
              <th>DATE</th>
              <th>ADDRESS</th>
            </tr>
          </Head>
          <Body>
            <tr>
              <th>johnd</th>
              <td>2024.07.06</td>
              <td>kilcoole</td>
            </tr>
          </Body>
        </Table>
      </UserContainer>
      <ChartContainer>
        <Card title="카테고리별 상품 수"></Card>
        <Card title="장바구니에 많이 담긴 상품"></Card>
      </ChartContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  padding: 20px;
`;

const UserContainer = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-right: 15px;
`;
const CountContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const CountBox = styled.div`
  width: 45%;
  height: 100px;
  border: 2px solid var(--line-blue-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: x-large;
`;

const Head = styled.thead`
  line-height: 30px;
  background: var(--line-blue-color);
  & > tr > th {
    color: #fff;
  }
`;

const Body = styled.tbody`
  line-height: 20px;
  & > tr:hover {
    height: fit-content;
    background-color: var(--line-blue-color);
  }
  & > tr > th,
  td {
    border-right: 1px solid #c6c9cc;
    border-bottom: 1px solid #c6c9cc;
    padding: 15px;
  }
`;

const ChartContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
export default Home;
