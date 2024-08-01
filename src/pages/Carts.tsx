import { Suspense } from "react";
import { useRouteLoaderData, Await } from "react-router-dom";

import { CartsList } from "../components/carts";
import { Order } from "../util/interfaces";

const Carts = () => {
  const { carts } = useRouteLoaderData("root") as { carts: Order[] };
  return (
    <Suspense>
      <Await resolve={carts}>
        {(loadedCarts) => <CartsList loadedCarts={loadedCarts} />}
      </Await>
    </Suspense>
  );
};

export default Carts;
