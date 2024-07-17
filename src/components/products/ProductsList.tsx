import { useEffect, useState } from "react";
import styled from "styled-components";

import Table from "../common/Table";
import { fetchAllProducts } from "../../util/http";
import { Loading, NotFound } from "../../fallback";

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

  const header = ["Num", "Title", "Price"];
  const renderRow = (data) => {
    return (
      <tr key={data.id}>
        <th>{data.id}</th>
        <td>{data.title}</td>
        <td>{data.price}</td>
      </tr>
    );
  };

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
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Table header={header} data={products} renderRow={renderRow} />
      )}
    </>
  );
};
export default ProductsList;
