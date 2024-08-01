import { styled } from "styled-components";

import { Page } from "../common";
import { Order } from "../../util/interfaces";
import { formatDate } from "../../util/formatter";

const CartItem = ({ cart }: { cart: Order }) => {
  return (
    <Page id={cart.id}>
      <ul>
        <Item>
          <Attributes>Date</Attributes> :{formatDate(cart.date)}
        </Item>
        <Item>
          <Attributes>USER ID</Attributes> : {cart.userId}
        </Item>
        <Item>
          <Attributes>Products</Attributes>
          <ul>
            {cart.products.map((product) => (
              <li>{`${product.productId} X ${product.quantity}`}</li>
            ))}
          </ul>
        </Item>
      </ul>
    </Page>
  );
};
export default CartItem;

const Item = styled.li`
  font-size: 18px;
  line-height: 300%;
`;
const Attributes = styled.span`
  font-weight: bold;
`;
