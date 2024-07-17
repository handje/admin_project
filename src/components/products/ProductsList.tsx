import { useContext, useEffect, useState } from "react";
import { useNavigate, useRouteLoaderData } from "react-router-dom";

import Table from "../common/Table";
import { TitleContext } from "../../store/TitleContext";
import { Error, Loading } from "../../fallback";

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
  const products: Product[] = useRouteLoaderData("products");
  const { handleChangeTitle } = useContext(TitleContext);
  const admin = localStorage.getItem("login_admin");
  const navigate = useNavigate();

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
    if (!admin) {
      navigate("/login");
    } else {
      handleChangeTitle("Products");
    }
  }, []);

  if (isError) {
    return <Error />;
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
