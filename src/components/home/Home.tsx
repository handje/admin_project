import styled from "styled-components";
import { Card } from "../layout";

const Home = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Card></Card>
          <Card></Card>
        </Wrapper>
        <Wrapper>
          <Card></Card>
          <Card></Card>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export default Home;
