import styled from "styled-components";

import { Count, Charts, List } from "../components/home";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <CountContainer>
          <Count>가입자수 : 10</Count>
          <Count>총 상품수 : 10</Count>
        </CountContainer>
        <List title="최근 로그인한 유저" />
      </Wrapper>
      <Wrapper>
        <Charts />
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
  flex-wrap: wrap;
  padding: 20px;
`;
const CountContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-right: 15px;
`;
