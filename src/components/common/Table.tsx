import styled from "styled-components";

interface TableProps<T> {
  header: string[];
  data: T[];
  renderRow: (item: T) => React.ReactNode;
}

const Table = <T,>({ header, data, renderRow }: TableProps<T>) => {
  return (
    <TableContainer>
      <StyledTable>
        <Head>
          <tr>
            {header?.map((head, idx) => (
              <th key={idx}>{head}</th>
            ))}
          </tr>
        </Head>
        <Body>{data?.map((rowData) => renderRow(rowData))}</Body>
      </StyledTable>
    </TableContainer>
  );
};

export default Table;

const TableContainer = styled.div`
  width: 100%;
  height: 95%;
  margin: auto;
  overflow-y: auto;
`;
const StyledTable = styled.table`
  width: 100%;
  height: max-content;
  border: 2px solid var(--line-blue-color);
  letter-spacing: 1px;
`;
const Head = styled.thead`
  line-height: 50px;
  background: var(--line-blue-color);
  & > tr > th {
    color: #fff;
  }
`;
const Body = styled.tbody`
  line-height: 20px;
  & > tr:hover {
    background-color: rgba(44, 130, 242, 0.5);
  }
  & > tr > th,
  td {
    border-right: 1px solid #c6c9cc;
    border-bottom: 1px solid #c6c9cc;
    padding: 15px;
  }
`;
