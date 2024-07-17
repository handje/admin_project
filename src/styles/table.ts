import styled from "styled-components";

export const Head = styled.thead`
  line-height: 50px;
  background: var(--line-blue-color);
  & > tr > th {
    color: #fff;
  }
`;

export const Body = styled.tbody`
  line-height: 20px;
  & > tr:hover {
    background-color: rgba(44, 130, 242, 0.5);
    cursor: pointer;
  }
  & > tr > th,
  td {
    border-right: 1px solid #c6c9cc;
    border-bottom: 1px solid #c6c9cc;
    padding: 15px;
  }
`;
