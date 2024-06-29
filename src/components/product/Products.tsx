import { useEffect, useState } from "react";

import Table from "../common/Table";
import { fetchAllProducts } from "../../util/http";
import Loading from "../../fallback/Loading";
import NotFound from "../../fallback/NotFound";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: { rate: number; count: number };
  image: string;
}

interface Products {
  products: Product[];
}

const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      try {
        const data = await fetchAllProducts();
        setProducts(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchProducts();
  }, []);

  if (isError) {
    return <NotFound />;
  }
  return <>{isLoading ? <Loading /> : <Table data={products} />}</>;
};

export default Products;
