import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";

const Page = ({
  id,
  title,
  children,
}: {
  id?: number;
  title: string;
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <button
          onClick={() => {
            navigate("..");
          }}
        >
          <BsArrowLeft />
        </button>
        <p>{id}</p>
      </Header>
      <Content>
        <Title>{title}</Title>
        {children}
      </Content>
    </Container>
  );
};
export default Page;

const Container = styled.article`
  width: 95%;
  height: 80%;
  overflow-y: auto;
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  & > p {
    font-size: 20px;
  }
  border: 1px solid ${({ theme }) => theme.colors.darkBlue500};
  ${({ theme }) => theme.util.scroll(theme.colors.darkBlue500)}
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  padding: 10px;
  ${({ theme }) => `background-color:${theme.colors.content.headerBg};
  color:${theme.colors.content.headerTxt}`};
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Content = styled.div`
  padding: 10px;
`;
