import styled from "styled-components";
import { Link } from "react-router-dom";

import { Page } from "../common";
import { Product } from "../../util/types";
import { ListWrapper, Attributes } from "../../styles/styles";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <Page id={product.id} title={product.title}>
      <ButtonContainer>
        <Link to="edit">edit</Link>
      </ButtonContainer>
      <Info>
        <Image>
          <img src={product.image} alt={product.title} />
        </Image>
        <Property>
          <li>
            <Attributes>CATEGORY</Attributes> : {product.category}
          </li>
          <li>
            <Attributes>PRICE</Attributes> : {product.price}
          </li>
          <li>
            <Attributes>RATE</Attributes> : {product.rating?.rate}
          </li>
          <li>
            <Attributes>DESCRIPTION</Attributes> : {product.description}
          </li>
        </Property>
      </Info>
    </Page>
  );
};
export default ProductItem;

const Info = styled.div`
  display: flex;
  @media ${({ theme }) => theme.mediaSize.md} {
    flex-direction: column;
  }
`;

const Image = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border100};
  text-align: center;
  flex: 1;
  & > img {
    width: 95%;
    height: 400px;
    object-fit: contain;
  }
`;

const ButtonContainer = styled.menu`
  display: flex;
  justify-content: end;
  margin-bottom: 10px;
  & > a {
    color: ${({ theme }) => theme.colors.darkBlue500};
    font-size: 20px;
  }
`;

const Property = styled(ListWrapper)`
  display: flex;
  flex: 2;
  flex-direction: column;
  margin-left: 20px;
`;
