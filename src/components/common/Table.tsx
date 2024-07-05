import styled from "styled-components";

const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <TableContainer>
      <StyledTable>{children}</StyledTable>
    </TableContainer>
  );
};

export default Table;

const TableContainer = styled.div`
  width: 100%;
  height: 95%;
  overflow-y: scroll;
  margin: auto;
`;
const StyledTable = styled.table`
  width: 100%;
  height: 100%;
  border: 2px solid black;
  letter-spacing: 1px;
  padding: 10px;
`;
