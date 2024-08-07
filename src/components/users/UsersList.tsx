import { User } from "../../util/types";
import { Table } from "../common";

const UsersList = ({ users }: { users: User[] }) => {
  const usersData = users.map((user) => {
    return {
      ...user,
      fullname: `${user.name.firstname}, ${user.name.lastname}`,
    };
  });

  const headers = [
    { text: "Num", value: "id" },
    { text: "Name", value: "fullname" },
    { text: "UserName", value: "username" },
    { text: "Phone", value: "phone" },
  ];
  return <Table headers={headers} data={usersData} pathname="users" />;
};
export default UsersList;
