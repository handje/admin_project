import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { BsList } from "react-icons/bs";

import { UserIcon } from "../admin";

const Header = ({ onNavOpen }: { onNavOpen: () => void }) => {
  const path = useLocation().pathname.split("/")[1];
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(() => {
      return path.length > 0 ? path.toUpperCase() : "HOME";
    });
  }, [path]);

  return (
    <StyledHeader>
      <LeftHeader>
        <button onClick={onNavOpen}>
          <BsList />
        </button>
        <h1>AUTHORIZED</h1>
      </LeftHeader>
      <SectionTitle>
        <h1>{title}</h1>
      </SectionTitle>
      <Icons>
        <UserIcon />
      </Icons>
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
  border-bottom: 3px solid ${({ theme }) => theme.colors.border300};
`;

const LeftHeader = styled.div`
  border-right: 3px solid ${({ theme }) => theme.colors.border300};
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
    padding-left: 5px;
    padding-top: 5px;
    font-size: 2rem;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    width: 40px;
    & > h1 {
      visibility: hidden;
    }
  }
`;

const SectionTitle = styled.div`
  padding-left: 35px;
  & > h1 {
    font-size: 1.5rem;
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    padding-left: 10px;
  }
`;

const Icons = styled.div`
  flex: auto;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.darkBlue900};
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
`;
export default Header;
