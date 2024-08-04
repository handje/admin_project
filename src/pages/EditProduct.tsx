import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../util/interfaces";
import { fetchProductItem } from "../util/fetchData";
import { ProductForm } from "../components/products";

const EditProductPage = () => {
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
  return <ProductForm product={product} method="patch" />;
};

export default EditProductPage;
