import { useEffect, useState } from "react";

import Table from "../common/Table";
import { fetchAllProducts } from "../../util/fetchData";
import { Loading, Error } from "../../fallback";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: { rate: number; count: number };
  image: string;
}

const ProductsList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const headers = [
    { text: "Num", value: "id" },
    { text: "Title", value: "title" },
    { text: "Price", value: "price" },
  ];

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
    return <Error />;
  }
  return (
    <>{isLoading ? <Loading /> : <Table headers={headers} data={products} />}</>
  );
};
export default ProductsList;
