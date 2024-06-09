import { Outlet } from "react-router-dom";

import Header from "./Header";
import Nav from "./Nav";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        <Nav />
        <Content>
          <Outlet />
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
  padding-top: 64px;
  display: flex;
`;
export default Layout;
