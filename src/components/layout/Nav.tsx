import { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
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
const StyledLink = styled(NavLink)`
  &:hover {
    background-color: rgba(44, 130, 242, 0.5);
  }
  &.active {
    background-color: var(--primary-blue-color);
  }
`;
const Menu = styled.div`
  height: 48px;
  margin: 5px 10px 5px 0px;
  display: flex;
  align-items: center;
  padding: 0 25px;
  font-size: 15px;
  transition: 0.3s;
  & > p {
    padding-left: 5px;
  }
`;

export default Nav;
