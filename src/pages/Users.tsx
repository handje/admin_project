import { useRouteLoaderData } from "react-router-dom";

import { UsersList } from "../components/users";
import { User } from "../util/types";

const UsersPage = () => {
  const { users } = useRouteLoaderData("root") as { users: User[] };
  return <UsersList users={users} />;
};

export default UsersPage;
