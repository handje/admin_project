import { redirect } from "react-router-dom";

import { fetchAllCarts, fetchAllUsers, fetchAllProducts } from "./fetchData";

export const checkAuthLoader = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/login");
  }
  return null;
};

export const rootLoader = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }

  const products = await fetchAllProducts();
  const users = await fetchAllUsers();
  const carts = await fetchAllCarts();
  return { products, users, carts };
};
