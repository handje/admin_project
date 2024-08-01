import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CartItem } from "../components/carts";
import { fetchCartItem } from "../util/fetchData";
import { Loading } from "../fallback";
import { Order } from "../util/interfaces";

const CartDetail = () => {
  const [cart, setCart] = useState<Order>();
  const { id } = useParams() as { id: string };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await fetchCartItem(id);
        setCart(list);
      } catch (err) {
        throw new Error();
      }
    };
    fetchData();
  }, [id]);
  return <>{cart ? <CartItem cart={cart} /> : <Loading />}</>;
};

export default CartDetail;
