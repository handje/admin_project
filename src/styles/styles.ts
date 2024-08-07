import { styled, css } from "styled-components";

export const ListWrapper = styled.ul`
  & > li {
    font-size: 20px;
    line-height: 300%;
  }
`;

export const Attributes = styled.span`
  font-weight: bold;
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const ButtonCSS = css`
  padding: 10px 20px;
  ${({ theme }) => {
    return `background-color:${theme.colors.button.bgColor};
    color:${theme.colors.button.textColor}`;
  }};

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }
`;

export const Button = styled.button`
  ${ButtonCSS}
  border-radius: 50%;
`;
