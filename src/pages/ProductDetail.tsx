import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ProductItem } from "../components/products";
import { Loading } from "../fallback";
import { fetchProductItem } from "../util/fetchData";
import { Product } from "../util/types";

const ProductDetailPage = () => {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams() as { id: string };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductItem(id);
        setProduct(data);
      } catch (err) {
        throw new Error();
      }
    };
    fetchData();
  }, [id]);

  return <>{product ? <ProductItem product={product} /> : <Loading />}</>;
};

export default ProductDetailPage;
