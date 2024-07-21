import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Page = ({ id, children }: { id: number; children: React.ReactNode }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Nav>
        <p>{id}</p>
        <button
          onClick={() => {
            navigate("..");
          }}
        >
          X
        </button>
      </Nav>
      <Content>{children}</Content>
    </Container>
  );
};
export default Page;

const Container = styled.article`
  width: 95%;
  height: 90%;
  overflow-y: auto;
  margin: auto;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  & > p {
    font-size: 20px;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  padding: 10px;
  background-color: antiquewhite;
`;

const Content = styled.div`
  padding: 10px;
`;
