import { styled } from "styled-components";
import { Link } from "react-router-dom";

import { Product } from "../../util/types";
import Table from "../common/Table";
import { ButtonCSS } from "../../styles/styles";

const ProductsList = ({ products }: { products: Product[] }) => {
  const headers = [
    { text: "Num", value: "id" },
    { text: "Title", value: "title" },
    { text: "Price", value: "price" },
  ];

  return (
    <Container>
      <CustomButton to="new">NEW</CustomButton>
      <Table headers={headers} data={products} pathname="products" />
    </Container>
  );
};
export default ProductsList;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const CustomButton = styled(Link)`
  ${ButtonCSS}
  border-radius: 10%;
  margin-top: 10px;
`;
