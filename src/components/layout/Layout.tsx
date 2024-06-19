import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Nav from "./Nav";

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
  padding: 64px 10px 0 0;
  display: flex;
`;
export default Layout;
