import { useContext, useEffect } from "react";
import LoginForm from "../components/admin/LoginForm";
import { TitleContext } from "../store/TitleContext";

const Login = () => {
  const { handleChangeTitle } = useContext(TitleContext);

  useEffect(() => {
    handleChangeTitle("LOGIN");
  }, []);

  return <LoginForm />;
};

export default Login;
