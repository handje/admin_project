import { useContext, useEffect } from "react";
import { useNavigate, useRouteLoaderData } from "react-router-dom";

import Table from "../common/Table";
import { TitleContext } from "../../store/TitleContext";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: { rate: number; count: number };
  image: string;
}

const ProductsList = () => {
  const navigate = useNavigate();
  const products = useRouteLoaderData("products") as Product[];
  const { handleChangeTitle } = useContext(TitleContext);
  const admin = localStorage.getItem("login_admin");

  const header = ["Num", "Title", "Price"];
  const renderRow = (data: Product) => {
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

  return <Table header={header} data={products} renderRow={renderRow} />;
};
export default ProductsList;
