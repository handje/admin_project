import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type rowDataType = Record<string, string>;

interface TableProps<T> {
  headers: { text: string; value: string }[];
  data: T[];
}

const Table = <T,>({ headers, data }: TableProps<T>) => {
  const navigate = useNavigate();
  const handleRowClick = (rowData: rowDataType) => {
    navigate(`${rowData.id}`);
  };
  return (
    <TableContainer>
      <StyledTable>
        <Head>
          <tr>
            {headers?.map((header) => (
              <th key={header.text}>{header.text}</th>
            ))}
          </tr>
        </Head>
        <Body>
          {data?.map((rowData, idx) => {
            return (
              <tr key={idx} onClick={() => handleRowClick(rowData)}>
                {headers.map((key) => (
                  <td key={key.value}>{rowData[key.value]}</td>
                ))}
              </tr>
            );
          })}
        </Body>
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
    cursor: pointer;
  }
  & > tr > th,
  td {
    border-right: 1px solid #c6c9cc;
    border-bottom: 1px solid #c6c9cc;
    padding: 15px;
  }
`;
