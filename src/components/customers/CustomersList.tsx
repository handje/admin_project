import { Table } from "../common";

const CustomersList = ({ loadedCustomer }) => {
  const customers = loadedCustomer.map((loadedCustomer) => {
    return {
      ...loadedCustomer,
      fullname: `${loadedCustomer.name.firstname}, ${loadedCustomer.name.lastname}`,
    };
  });

  const headers = [
    { text: "Num", value: "id" },
    { text: "Name", value: "fullname" },
    { text: "UserName", value: "username" },
    { text: "Phone", value: "phone" },
  ];
  return <Table headers={headers} data={customers} />;
};
export default CustomersList;
