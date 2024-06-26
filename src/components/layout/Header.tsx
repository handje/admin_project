import { useContext } from "react";
import styled from "styled-components";
import { BsList } from "react-icons/bs";

import { UserIcon } from "../user";
import { TitleContext } from "../../store/TitleContext";

const Header = ({ onNavOpen }: { onNavOpen: () => void }) => {
  const { title } = useContext(TitleContext);
  return (
    <StyledHeader>
      <LeftHeader>
        <>
          <NavIcon onClick={onNavOpen} />
        </>
        <h1>AUTHORIZED</h1>
      </LeftHeader>
      <SectionTitle>
        <h1>{title}</h1>
      </SectionTitle>
      <IconContainer>
        <Icons>
          <UserIcon />
        </Icons>
      </IconContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  left: 0;
  right: 0;
  top: 0;
  position: fixed;
  line-height: 1.5rem;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: solid var(--line-blue-color);
`;

const LeftHeader = styled.div`
  border-right: solid var(--line-blue-color);
  height: 50px;
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  & > h1 {
    font-size: 2rem;
    font-weight: 600;
  }
  & > button {
    padding-top: 10px;
  }
`;

const NavIcon = styled(BsList)`
  font-size: 2rem;
  cursor: pointer;
`;

const SectionTitle = styled.div`
  padding-left: 35px;
  & > h1 {
    font-size: 1.5rem;
  }
`;
const IconContainer = styled.div`
  flex: auto;
`;

const Icons = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
`;
export default Header;
