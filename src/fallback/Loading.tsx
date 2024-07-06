import loading from "../asset/loading.gif";
import styled from "styled-components";

const Loading = () => {
  return (
    <Container>
      <img src={loading} />
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  & > img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
