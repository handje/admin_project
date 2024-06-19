import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  BsHouseDoorFill,
  BsFillFileEarmarkPersonFill,
  BsBagCheckFill,
} from "react-icons/bs";

import { TitleContext } from "../../store/TitleContext";

const Nav = () => {
  const navigate = useNavigate();
  const { handleChangeTitle } = useContext(TitleContext);

  return (
    <NavContainer>
      <StyledNav>
        <Menu
          onClick={() => {
            navigate("/");
            handleChangeTitle("Home");
          }}
        >
          <BsHouseDoorFill />
          <p>Home</p>
        </Menu>
        <Menu
          onClick={() => {
            navigate("product");
            handleChangeTitle("Products");
          }}
        >
          <BsBagCheckFill />
          <p>Products</p>
        </Menu>
        <Menu
          onClick={() => {
            navigate("customers");
            handleChangeTitle("Customers");
          }}
        >
          <BsFillFileEarmarkPersonFill />
          <p>Customers</p>
        </Menu>
      </StyledNav>
    </NavContainer>
  );
};
const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  padding-top: 64px;
  margin-right: 30px;
`;
const StyledNav = styled.nav`
  bottom: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 64px;
  width: 150px;
  z-index: 10;
  border-right: solid var(--line-blue-color);
`;
const Menu = styled.button`
  height: 48px;
  margin: 5px 10px 5px 0px;
  display: flex;
  align-items: center;
  padding: 0 25px;
  font-size: 15px;
  transition: 0.3s;
  border-radius: 0 24px 24px 0;
  & > p {
    padding-left: 5px;
  }
  &:hover {
    background-color: var(--secondary-blue-color);
  }
  &:active {
    background-color: var(--primary-blue-color);
  }
`;
export default Nav;
