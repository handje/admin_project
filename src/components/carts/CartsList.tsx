import { formatDate } from "../../util/formatter";
import { Order } from "../../util/interfaces";
import { Table } from "../common";

const CartsList = ({ loadedCarts }: { loadedCarts: Order[] }) => {
  const headers = [
    { text: "Num", value: "id" },
    { text: "UserId", value: "userId" },
    { text: "Date", value: "date" },
  ];
  const carts = loadedCarts.map((cart) => ({
    ...cart,
    date: formatDate(cart.date),
  }));
  return <Table headers={headers} data={carts} pathname="carts"></Table>;
};
export default CartsList;
