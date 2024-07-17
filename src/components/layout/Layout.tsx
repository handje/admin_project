import { useEffect, useState } from "react";
import { Outlet, useNavigation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Nav from "./Nav";
import { Loading } from "../../fallback";

const Layout = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const navigate = useNavigate();
  const navigation = useNavigation();
  const admin = localStorage.getItem("login_admin");

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (!admin) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Container>
        <Header onNavOpen={handleNavOpen} />
        {isNavOpen ? <Nav /> : null}
        <Content>
          {navigation.state === "loading" ? <Loading /> : <Outlet />}
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  width: 100%;
  padding: 64px 10px 0 10px;
  display: flex;
`;
export default Layout;
