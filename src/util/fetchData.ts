import { json } from "react-router-dom";

//util
const requestFetch = async (url: string, config: object) => {
  const response = await fetch(url, config);
  if (!response.ok) {
    throw json({ message: "Failed to fetch data" }, { status: 500 });
  }
  const data = await response.json();
  return data;
};

//products
export const fetchAllProducts = async () => {
  const resData = await requestFetch("https://fakestoreapi.com/products", {});
  return resData;
};
export const fetchProductItem = async (id: string) => {
  const resData = await requestFetch(
    `https://fakestoreapi.com/products/${id}`,
    {}
  );
  return resData;
};

//customers
export const fetchAllCustomersInfo = async () => {
  const resData = await requestFetch("https://fakestoreapi.com/users", {});
  return resData;
};
export const fetchCustomerItem = async (id: string) => {
  const resData = await requestFetch(
    `https://fakestoreapi.com/users/${id}`,
    {}
  );
  return resData;
};

//carts
export const fetchAllCarts = async () => {
  const resData = await requestFetch("https://fakestoreapi.com/carts", {});
  return resData;
};

export const fetchCustomerCartItem = async (id: string) => {
  const resData = await requestFetch(
    `https://fakestoreapi.com/carts/user/${id}`,
    {}
  );
  return resData;
};

export const fetchCartItem = async (id: string) => {
  const resData = await requestFetch(
    `https://fakestoreapi.com/carts/${id}`,
    {}
  );
  return resData;
};
