import { Table } from "../../components/common";
import { formatDate, sortByDate } from "../../util/formatter";

const List = ({ title, data }: { title: string }) => {
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
      <Table headers={headers} data={carts} />
    </>
  );
};

export default List;
