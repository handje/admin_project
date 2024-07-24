import { useActionData, Form } from "react-router-dom";
import styled from "styled-components";

import { Input } from "../common";

const LoginForm = () => {
  const error = useActionData() as { message: string };

  return (
    <CustomLogin>
      <Form method="post">
        <Error>{error?.message}</Error>
        <Input
          title="EMAIL"
          id="email"
          name="email"
          type="email"
          correct={!error}
        />
        <Input
          title="PWD"
          id="password"
          name="password"
          type="password"
          correct={!error}
        />
        <ButtonContainer>
          <CustomButton>OK</CustomButton>
        </ButtonContainer>
      </Form>
    </CustomLogin>
  );
};

const CustomLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: auto;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
  font-size: 30px;
`;

const CustomButton = styled.button`
  padding: 10px 20px;
  border-radius: 50%;
  ${({ theme }) => {
    return `background-color:${theme.colors.button.bgColor};
    color:${theme.colors.button.textColor}`;
  }};

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }
`;

const Error = styled.p`
  text-align: end;
  color: red;
  margin-bottom: 10px;
`;
export default LoginForm;
