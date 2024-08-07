import { json } from "react-router-dom";
import { Product } from "./types";

//util
const requestFetch = async (url: string, config: object) => {
  const response = await fetch(url, config);
  if (!response.ok) {
    throw json({ message: "Failed to fetch data" }, { status: 500 });
  }
  const data = await response.json();
  return data;
};

//products API
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

export const fetchAllCategory = async () => {
  const resData = await requestFetch(
    "https://fakestoreapi.com/products/categories",
    {}
  );
  return resData;
};

export const postProduct = async (
  product: Product,
  method: string,
  id?: string
) => {
  let url = "https://fakestoreapi.com/products";
  if (method === "PATCH") {
    url += `/${id}`;
  }
  const resData = await requestFetch(url, {
    method: method,
    body: JSON.stringify(product),
  });
  return resData;
};

//users API
export const fetchAllUsers = async () => {
  const resData = await requestFetch("https://fakestoreapi.com/users", {});
  return resData;
};
export const fetchUserItem = async (id: string) => {
  const resData = await requestFetch(
    `https://fakestoreapi.com/users/${id}`,
    {}
  );
  return resData;
};

//carts API
export const fetchAllCarts = async () => {
  const resData = await requestFetch("https://fakestoreapi.com/carts", {});
  return resData;
};

export const fetchUsersCarts = async (id: string) => {
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
