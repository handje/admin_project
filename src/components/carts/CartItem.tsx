import { Page } from "../common";
import { Cart } from "../../util/types";
import { formatDate } from "../../util/formatter";
import { ListWrapper, Attributes } from "../../styles/styles";

const CartItem = ({ cart }: { cart: Cart }) => {
  return (
    <Page id={cart.id} title="">
      <ListWrapper>
        <li>
          <Attributes>Date</Attributes> :{formatDate(cart.date)}
        </li>
        <li>
          <Attributes>USER ID</Attributes> : {cart.userId}
        </li>
        <li>
          <Attributes>Products</Attributes>
          <ul>
            {cart.products.map((product) => (
              <li
                key={product.productId}
              >{`${product.productId} X ${product.quantity}`}</li>
            ))}
          </ul>
        </li>
      </ListWrapper>
    </Page>
  );
};
export default CartItem;
