import { useState, useEffect } from "react";

import { Table } from "../common";
import { Loading, Error } from "../../fallback";
import { fetchAllCustomersInfo } from "../../util/fetchData";
import { Customer } from "../../util/interfaces";

const CustomersList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [customers, setCustomers] = useState<Customer[]>([]);

  const headers = [
    { text: "Num", value: "id" },
    { text: "Name", value: "fullname" },
    { text: "UserName", value: "username" },
    { text: "Phone", value: "phone" },
  ];

  useEffect(() => {
    setIsLoading(true);
    const fetchCustomers = async () => {
      try {
        const data = await fetchAllCustomersInfo();
        const customersData = data?.map((customer: Customer) => {
          const fullname = `${customer.name.firstname}, ${customer.name.lastname}`;
          return { ...customer, fullname: fullname };
        });
        setCustomers(customersData);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchCustomers();
  }, []);

  if (isError) {
    return <Error />;
  }

  return (
    <>
      {isLoading ? <Loading /> : <Table headers={headers} data={customers} />}
    </>
  );
};
export default CustomersList;
