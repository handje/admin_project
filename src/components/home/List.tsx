import { Table } from "../../components/common";
import { formatDate, sortByDate } from "../../util/formatter";
import { Order } from "../../util/interfaces";

const List = ({ title, data }: { title: string; data: Order[] }) => {
  const headers = [
    { text: "CartID", value: "id" },
    { text: "UserID", value: "userId" },
    { text: "Date", value: "date" },
  ];
  const carts = data
    ?.map((cart) => ({
      ...cart,
      date: formatDate(cart.date),
    }))
    ?.sort((a, b) => sortByDate(a.date, b.date));

  return (
    <>
      <h2>{title}</h2>
      <Table headers={headers} data={carts} pathname="carts" />
    </>
  );
};

export default List;
