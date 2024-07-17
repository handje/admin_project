import styled from "styled-components";

import { Table } from "../../components/common";

const List = ({ title }: { title: string }) => {
  return (
    <>
      <h2>{title}</h2>
      <Table header={undefined} data={[]} renderRow={undefined} />
    </>
  );
};

export default List;

const Head = styled.thead`
  line-height: 30px;
  background: var(--line-blue-color);
  & > tr > th {
    color: #fff;
  }
`;

const Body = styled.tbody`
  line-height: 20px;
  & > tr:hover {
    height: fit-content;
    background-color: var(--line-blue-color);
  }
  & > tr > th,
  td {
    border-right: 1px solid #c6c9cc;
    border-bottom: 1px solid #c6c9cc;
    padding: 15px;
  }
`;
