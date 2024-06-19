import styled from "styled-components";

const Card = () => {
  return (
    <CardContainer>
      <ChartContainer>
        <h2>Chart</h2>
      </ChartContainer>
      <ContentContainer>
        <h1>title</h1>
        <p>content</p>
      </ContentContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 400px;
  height: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 0px 10px;
`;
const ChartContainer = styled.div`
  height: 70%;
`;
const ContentContainer = styled.div`
  height: 30%;
  border-top: 1px solid black;
`;

export default Card;
