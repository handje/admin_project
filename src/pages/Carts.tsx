import { useRouteLoaderData } from "react-router-dom";

import { CartsList } from "../components/carts";
import { Cart } from "../util/types";

const CartsPage = () => {
  const { carts } = useRouteLoaderData("root") as { carts: Cart[] };
  return <CartsList carts={carts} />;
};

export default CartsPage;
