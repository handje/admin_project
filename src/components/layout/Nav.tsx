import styled from "styled-components";
import { BsHouseDoorFill, BsFillFileEarmarkPersonFill } from "react-icons/bs";

const Nav = () => {
  return (
    <StyledNav>
      <Menu>
        <BsHouseDoorFill />
        <p>Home</p>
      </Menu>
      <Menu>
        <BsFillFileEarmarkPersonFill />
        <p>User</p>
      </Menu>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  bottom: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 64px;
  width: 200px;
  z-index: 10;
  border-right: solid var(--line-blue-color);
`;
const Menu = styled.div`
  height: 48px;
  margin-right: 24px;
  display: flex;
  align-items: center;
  padding: 0 25px;
  font-size: 15px;
  & > p {
    padding-left: 10px;
  }
`;
export default Nav;
