import { Product } from "../../util/interfaces";
import Table from "../common/Table";

const ProductsList = ({ products }: { products: Product[] }) => {
  const headers = [
    { text: "Num", value: "id" },
    { text: "Title", value: "title" },
    { text: "Price", value: "price" },
  ];

  return <Table headers={headers} data={products} pathname="products" />;
};
export default ProductsList;
