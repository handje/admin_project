import styled from "styled-components";

const Table = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <TableContainer>
      <StyledTable {...props}>{children}</StyledTable>
    </TableContainer>
  );
};

export default Table;

const TableContainer = styled.div`
  width: 100%;
  height: 95%;
  margin: auto;
`;
const StyledTable = styled.table`
  width: 100%;
  height: 100%;
  border: 2px solid var(--line-blue-color);
  letter-spacing: 1px;
  padding: 10px;
`;
