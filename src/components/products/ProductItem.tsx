import styled from "styled-components";
import Page from "../common/Page";
import { Product } from "../../util/interfaces";
import { Link } from "react-router-dom";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <Page id={product.id}>
      <Title>{product.title}</Title>
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
const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

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

const Property = styled.ul`
  display: flex;
  flex: 2;
  flex-direction: column;
  margin-left: 20px;
  & > li {
    font-size: 20px;
    line-height: 300%;
  }
`;

const Attributes = styled.span`
  font-weight: bold;
`;
