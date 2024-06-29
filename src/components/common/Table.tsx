import styled from "styled-components";

interface DataProps {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: { rate: number; count: number };
  image: string;
}

const Table = ({ data }: { data: DataProps[] }) => {
  return (
    <TableContainer>
      <StyledTable>
        <Head>
          <tr>
            <th>Num</th>
            <th>Title</th>
            <th>Price(USD)</th>
          </tr>
        </Head>
        <Body>
          {data.map((info) => {
            return (
              <tr>
                <th>{info.id}</th>
                <td>{info.title}</td>
                <td>{info.price}</td>
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

const Head = styled.thead`
  line-height: 50px;
  background: #42444e;
  & > tr > th {
    color: #fff;
  }
`;

const Body = styled.tbody`
  line-height: 20px;
  & > tr > th,
  td {
    border-right: 1px solid #c6c9cc;
    border-bottom: 1px solid #c6c9cc;
    padding: 15px;
  }
`;
