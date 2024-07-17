import styled from "styled-components";
import { Input } from "../components/common";
import { useContext, useEffect } from "react";
import { TitleContext } from "../store/TitleContext";

const Login = () => {
  const { handleChangeTitle } = useContext(TitleContext);
  useEffect(() => {
    handleChangeTitle("Login");
  }, []);
  return (
    <CustomLogin>
      <Input title="EMAIL" id="email" name="email" type="email" />
      <Input title="PWD" id="password" name="password" type="password" />
      <ButtonContainer>
        <button>OK</button>
      </ButtonContainer>
    </CustomLogin>
  );
};

export default Login;

const CustomLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: auto;
  & > h1 {
    font-size: 30px;
    font-weight: 200;
    margin-bottom: 20px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
  font-size: 30px;
`;
