import { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import styled from "styled-components";

import { Header, Nav } from "../components/layout";
import { Loading } from "../fallback";

const Layout = () => {
  const [isNavOpen, setIsNavOpen] = useState(() => {
    if (window.matchMedia("(max-width: 576px)").matches) {
      return false;
    } else {
      return true;
    }
  });
  const navigation = useNavigation();
  const token = localStorage.getItem("token");

  const handleNavOpen = () => {
    if (token) {
      setIsNavOpen(!isNavOpen);
    }
  };

  return (
    <>
      <Container>
        <Header onNavOpen={handleNavOpen} />
        {isNavOpen && token ? <Nav /> : null}
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
const Content = styled.main`
  width: 100%;
  height: 100%;
  padding: 64px 10px 0 10px;
`;
export default Layout;
