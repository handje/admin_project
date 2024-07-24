import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CustomerItem } from "../components/customers";
import { fetchCustomerCartItem, fetchCustomerItem } from "../util/fetchData";
import { Loading } from "../fallback";
import { Customer, Order } from "../util/interfaces";

const CustomerDetail = () => {
  const [customer, setCustomer] = useState<Customer>();
  const [orderList, setOrderList] = useState<Order[]>([]);
  const { id } = useParams() as { id: string };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await fetchCustomerItem(id);
        setCustomer(user);

        const list = await fetchCustomerCartItem(id);
        setOrderList(list);
      } catch (err) {
        throw new Error();
      }
    };
    fetchData();
  }, [id]);
  return (
    <>
      {customer ? (
        <CustomerItem customer={customer} orderList={orderList} />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default CustomerDetail;
