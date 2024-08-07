import { formatDate } from "../../util/formatter";
import { Cart } from "../../util/types";
import { Table } from "../common";

const CartsList = ({ carts }: { carts: Cart[] }) => {
  const headers = [
    { text: "Num", value: "id" },
    { text: "UserId", value: "userId" },
    { text: "Date", value: "date" },
  ];
  const cartsData = carts.map((cart) => ({
    ...cart,
    date: formatDate(cart.date),
  }));
  return <Table headers={headers} data={cartsData} pathname="carts"></Table>;
};
export default CartsList;
