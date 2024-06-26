import styled from "styled-components";

const Table = () => {
  return (
    <StyledTable>
      <Head>
        <tr>
          <th>Num</th>
          <th>Name</th>
          <th>Phone</th>
        </tr>
      </Head>
      <Body>
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
      </Body>
    </StyledTable>
  );
};

export default Table;

const StyledTable = styled.table`
  width: 100%;
  height: 95%;
  margin: auto;
  border-collapse: separate;
  border: 2px solid black;
  letter-spacing: 1px;
`;

const Head = styled.thead`
  line-height: 50px;
  background: #42444e;
  & > tr > th {
    background: #42444e;
    color: #fff;
    text-align: left;
  }
`;

const Body = styled.tbody`
  line-height: 20px;
  & > tr {
    height: 10%;
  }
  & > tr > th,
  td {
    border-right: 1px solid #c6c9cc;
    border-bottom: 1px solid #c6c9cc;
  }
`;
