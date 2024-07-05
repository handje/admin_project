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

const Customers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [customers, setCustomers] = useState<Customer[]>([]);

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
        <Table>
          <Head>
            <tr>
              <th>Num</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Phone</th>
            </tr>
          </Head>
          <Body>
            {customers.map((info) => {
              return (
                <tr key={info.id}>
                  <th>{info.id}</th>
                  <td>
                    {info.name.firstname},{info.name.lastname}
                  </td>
                  <td>{info.username}</td>
                  <td>{info.phone}</td>
                </tr>
              );
            })}
          </Body>
        </Table>
      )}
    </>
  );
};
export default Customers;

const Head = styled.thead`
  line-height: 50px;
  background: #42444e;
  & > tr > th {
    color: #fff;
  }
`;

const Body = styled.tbody`
  line-height: 20px;
  & > tr > th,
  td {
    border-right: 1px solid #c6c9cc;
    border-bottom: 1px solid #c6c9cc;
    padding: 15px;
  }
`;
