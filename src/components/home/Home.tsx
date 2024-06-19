import styled from "styled-components";
import { Card } from "../common";

const Home = () => {
  return (
    <>
      <Container>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
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
  flex-wrap: wrap;
  padding: 0px 30px;
`;

export default Home;
