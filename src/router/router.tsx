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
import NotFound from "../fallback/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
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
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
