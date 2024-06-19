import styled from "styled-components";

const Table = () => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Num</th>
          <th>Name</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Son</td>
          <td>010-0000-0000</td>
        </tr>
        <tr>
          <th>2</th>
          <td>Jieun</td>
          <td>010-0000-0000</td>
        </tr>
      </tbody>
    </StyledTable>
  );
};

export default Table;

const StyledTable = styled.table`
  width: 100%;
  height: 95%;
  margin: auto;
  border-collapse: collapse;
  border: 2px solid black;
  letter-spacing: 1px;
`;
