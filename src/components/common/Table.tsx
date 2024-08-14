import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

interface TableProps<T> {
  headers: { text: string; value: string }[];
  data: T[];
  pathname: string;
}

const Table = <T extends { id: number }>({
  headers,
  data,
  pathname,
}: TableProps<T>) => {
  const navigate = useNavigate();

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            {headers?.map((header) => (
              <TableHeaderCell key={header.text}>{header.text}</TableHeaderCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((rowData, idx) => {
            return (
              <TableRow
                key={idx}
                onClick={() => navigate(`/${pathname}/${rowData.id}`)}
              >
                {headers.map(({ value }) => {
                  return (
                    <TableCell key={value}>
                      {" "}
                      {rowData?.[value as keyof T]?.toString()}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default Table;

const TableContainer = styled.div`
  width: 100%;
  height: 75%;
  margin: 10px auto;
  overflow-y: auto;
  ${({ theme }) => theme.util.scroll(theme.colors.darkBlue400)}
`;
const StyledTable = styled.table`
  width: 100%;
  padding: 5px 0px;
  border-collapse: collapse;
  letter-spacing: 0.5px;
  & > thead {
    background-color: ${({ theme }) => theme.colors.darkBlue400};
  }
`;
const TableRow = styled.tr`
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBlue100};
  }
`;
const cellStyles = css`
  padding: 15px 15px;
  border: 1px solid ${({ theme }) => theme.colors.darkBlue300};
`;
const TableHeaderCell = styled.th`
  ${cellStyles}
  text-align: center;
  font-size: large;
  font-weight: 500;
`;
const TableCell = styled.td`
  ${cellStyles}
  &:first-child {
    text-align: center;
  }
  cursor: pointer;
`;
