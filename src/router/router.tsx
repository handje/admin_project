import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../components/layout";
import {
  Login,
  Home,
  Products,
  ProductDetail,
  Customers,
  CustomerDetail,
} from "../pages";
import { Error } from "../fallback";
import { fetchAllProducts, fetchAllCustomersInfo } from "../util/http";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        id: "products",
        path: "products",
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: ":id",
            element: <ProductDetail />,
          },
        ],
      },
      {
        id: "customers",
        path: "customers",
        children: [
          {
            index: true,
            element: <Customers />,
          },
          {
            path: ":id",
            element: <CustomerDetail />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
