import { useRouteLoaderData } from "react-router-dom";

import { ProductsList } from "../components/products";

import { Product } from "../util/types";

const ProductsPage = () => {
  const { products } = useRouteLoaderData("root") as { products: Product[] };

  return <ProductsList products={products} />;
};

export default ProductsPage;
