import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CustomerItem } from "../components/customers";
import { fetchCustomerCartItem, fetchCustomerItem } from "../util/http";
import { Loading } from "../fallback";

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
  fullname?: string;
}

interface Order {
  id: number;
  userId: number;
  date: string;
  products: { productId: number; quantity: number }[];
}

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
