import { styled } from "styled-components";
import { Link } from "react-router-dom";

import { Product } from "../../util/interfaces";
import Table from "../common/Table";

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
  width: 50px;
  padding: 10px;
  border-radius: 10%;
  text-align: center;
  margin-top: 10px;
  ${({ theme }) => {
    return `background-color:${theme.colors.button.bgColor};
    color:${theme.colors.button.textColor}`;
  }};

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }
`;
