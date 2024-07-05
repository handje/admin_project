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
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Table>
          <Head>
            <tr>
              <th>Num</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </Head>
          <Body>
            {products.map((info) => {
              return (
                <tr key={info.id}>
                  <th>{info.id}</th>
                  <td>{info.title}</td>
                  <td>{info.price}</td>
                </tr>
              );
            })}
          </Body>
        </Table>
      )}
    </>
  );
};

export default Products;

const Head = styled.thead`
  line-height: 50px;
  background: #42444e;
  & > tr > th {
    color: #fff;
  }
`;

const Body = styled.tbody`
  line-height: 20px;
  & > tr > th,
  td {
    border-right: 1px solid #c6c9cc;
    border-bottom: 1px solid #c6c9cc;
    padding: 15px;
  }
`;
