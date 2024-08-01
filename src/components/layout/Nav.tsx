import { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  BsHouseDoorFill,
  BsFillFileEarmarkPersonFill,
  BsBagCheckFill,
  BsCartCheckFill,
} from "react-icons/bs";

import { TitleContext } from "../../store/TitleContext";

const Nav = () => {
  const navigate = useNavigate();
  const { handleChangeTitle } = useContext(TitleContext);

  return (
    <NavContainer>
      <StyledNav>
        <StyledLink to="/">
          <Menu
            onClick={() => {
              handleChangeTitle("Home");
            }}
          >
            <BsHouseDoorFill />
            <p>Home</p>
          </Menu>
        </StyledLink>
        <StyledLink to="/products">
          <Menu
            onClick={() => {
              navigate("products");
              handleChangeTitle("Products");
            }}
          >
            <BsBagCheckFill />
            <p>Products</p>
          </Menu>
        </StyledLink>
        <StyledLink to="/customers">
          <Menu
            onClick={() => {
              navigate("customers");
              handleChangeTitle("Customers");
            }}
          >
            <BsFillFileEarmarkPersonFill />
            <p>Customers</p>
          </Menu>
        </StyledLink>
        <StyledLink to="/carts">
          <Menu
            onClick={() => {
              navigate("carts");
              handleChangeTitle("Carts");
            }}
          >
            <BsCartCheckFill />
            <p>Carts</p>
          </Menu>
        </StyledLink>
      </StyledNav>
    </NavContainer>
  );
};
const NavContainer = styled.div`
  width: 150px;
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
  border: 3px solid ${({ theme }) => theme.colors.border300};
  background-color: #fff;
`;
const StyledLink = styled(NavLink)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.darkBlue300};
    color: #fff;
  }
`;
const Menu = styled.div`
  height: 48px;
  margin: 5px 10px 5px 0px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 15px;
  transition: 0.3s;
  & > p {
    padding-left: 5px;
  }
`;

export default Nav;
