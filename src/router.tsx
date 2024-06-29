import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./components/layout";
import { Home } from "./components/home";
import { Products } from "./components/product";
import { Customers } from "./components/customers";
import NotFound from "./fallback/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
