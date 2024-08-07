import { createBrowserRouter } from "react-router-dom";

import {
  Layout,
  Login,
  Home,
  UsersPage,
  UserDetailPage,
  ProductsPage,
  ProductDetailPage,
  CartsPage,
  CartDetailPage,
  EditProductPage,
  NewProductPage,
} from "../pages";
import { Error } from "../fallback";
import { loginAction, formAction } from "../util/actions";
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
            element: <ProductsPage />,
          },
          {
            path: ":id",
            children: [
              {
                index: true,
                element: <ProductDetailPage />,
              },
              {
                path: "edit",
                element: <EditProductPage />,
                action: formAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewProductPage />,
            action: formAction,
          },
        ],
      },
      {
        id: "users",
        path: "users",
        loader: checkAuthLoader,
        children: [
          {
            index: true,
            element: <UsersPage />,
          },
          {
            path: ":id",
            element: <UserDetailPage />,
          },
        ],
      },
      {
        id: "carts",
        path: "carts",
        loader: checkAuthLoader,
        children: [
          {
            index: true,
            element: <CartsPage />,
          },
          {
            path: ":id",
            element: <CartDetailPage />,
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
