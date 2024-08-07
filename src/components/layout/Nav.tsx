import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  BsHouseDoorFill,
  BsFillFileEarmarkPersonFill,
  BsBagCheckFill,
  BsCartCheckFill,
} from "react-icons/bs";

const Nav = () => {
  return (
    <NavContainer>
      <StyledNav>
        <StyledLink to="/">
          <Menu>
            <BsHouseDoorFill />
            <p>Home</p>
          </Menu>
        </StyledLink>
        <StyledLink to="/products">
          <Menu>
            <BsBagCheckFill />
            <p>Products</p>
          </Menu>
        </StyledLink>
        <StyledLink to="/users">
          <Menu>
            <BsFillFileEarmarkPersonFill />
            <p>Users</p>
          </Menu>
        </StyledLink>
        <StyledLink to="/carts">
          <Menu>
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
