import { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";

import { ProductsList } from "../components/products";
import { Loading } from "../fallback";
import { Product } from "../util/interfaces";

const Products = () => {
  const { products } = useRouteLoaderData("root") as { products: Product[] };

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={products}>
        {(loadedProducts) => <ProductsList products={loadedProducts} />}
      </Await>
    </Suspense>
  );
};

export default Products;
