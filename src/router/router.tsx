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
import { loginAction } from "../util/actions";
import { checkAuthLoader, rootLoader } from "../util/loaders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    id: "root",
    loader: rootLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: checkAuthLoader,
      },
      {
        id: "products",
        path: "products",
        loader: checkAuthLoader,
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
        loader: checkAuthLoader,
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
        action: loginAction,
      },
    ],
  },
]);
