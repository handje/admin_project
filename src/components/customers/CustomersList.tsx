import { useNavigate, useRouteLoaderData } from "react-router-dom";
import { useContext, useEffect } from "react";

import { Table } from "../common";
import { TitleContext } from "../../store/TitleContext";

interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: { lat: string; long: string };
}

interface Customer {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: Address;
  phone: string;
}

const CustomersList = () => {
  const navigate = useNavigate();
  const customers = useRouteLoaderData("customers") as Customer[];
  const { handleChangeTitle } = useContext(TitleContext);
  const admin = localStorage.getItem("login_admin");

  const header = ["Num", "Name", "UserName", "Phone"];
  const renderRow = (data: Customer) => {
    return (
      <tr key={data.id}>
        <th>{data.id}</th>
        <td>
          {data.name.firstname},{data.name.lastname}
        </td>
        <td>{data.username}</td>
        <td>{data.phone}</td>
      </tr>
    );
  };

  useEffect(() => {
    if (!admin) {
      navigate("/login");
    } else {
      handleChangeTitle("Customers");
    }
  }, []);

  return <Table header={header} data={customers} renderRow={renderRow} />;
};
export default CustomersList;
