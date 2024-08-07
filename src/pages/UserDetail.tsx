import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { UserItem } from "../components/users";
import { fetchUsersCarts, fetchUserItem } from "../util/fetchData";
import { Loading } from "../fallback";
import { User, Cart } from "../util/types";

const UserDetailPage = () => {
  const [user, setUser] = useState<User>();
  const [cartList, setCartList] = useState<Cart[]>([]);
  const { id } = useParams() as { id: string };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await fetchUserItem(id);
        setUser(user);

        const list = await fetchUsersCarts(id);
        setCartList(list);
      } catch (err) {
        throw new Error();
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      {user && cartList ? (
        <UserItem user={user} cartList={cartList} />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default UserDetailPage;
