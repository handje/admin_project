import { useState, useEffect } from "react";
import styled from "styled-components";

import { Table } from "../common";
import { Loading, NotFound } from "../../fallback";
import { fetchAllCustomersInfo } from "../../util/http";

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
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [customers, setCustomers] = useState<Customer[]>([]);

  const header = ["Num", "Name", "UserName", "Phone"];
  const renderRow = (data) => {
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
    setIsLoading(true);
    const fetchCustomers = async () => {
      try {
        const data = await fetchAllCustomersInfo();
        setCustomers(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchCustomers();
  }, []);

  if (isError) {
    return <NotFound />;
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Table header={header} data={customers} renderRow={renderRow} />
      )}
    </>
  );
};
export default CustomersList;
