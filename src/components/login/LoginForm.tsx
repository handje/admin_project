import { useActionData, Form } from "react-router-dom";
import styled from "styled-components";

import Input from "./Input";
import { Button } from "../../styles/styles";

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
          <Button>OK</Button>
        </ButtonContainer>
      </Form>
    </CustomLogin>
  );
};

const CustomLogin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
  font-size: 30px;
`;

const Error = styled.p`
  text-align: end;
  color: red;
  margin-bottom: 10px;
`;
export default LoginForm;
