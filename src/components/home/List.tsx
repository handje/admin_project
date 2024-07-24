import { Table } from "../../components/common";

const List = ({ title }: { title: string }) => {
  const headers = [
    { text: "Num", value: "id" },
    { text: "Name", value: "fullname" },
    { text: "UserName", value: "username" },
    { text: "Phone", value: "phone" },
  ];

  return (
    <>
      <h2>{title}</h2>
      <Table headers={headers} data={[]} />
    </>
  );
};

export default List;
