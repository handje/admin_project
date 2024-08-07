import { Table, Page } from "../common";
import { User, Cart } from "../../util/types";
import { ListWrapper, Attributes } from "../../styles/styles";

const UserItem = ({ user, cartList }: { user: User; cartList: Cart[] }) => {
  const headers = [
    { text: "ID", value: "id" },
    { text: "Date", value: "date" },
  ];
  const fullName = user.name.firstname
    .concat(", ", user.name.lastname)
    .toUpperCase();
  const address = `${user.address.number}, ${user.address.street}, ${user.address.city}, ${user.address.number} / ${user.address.zipcode}`;

  return (
    <Page id={user.id} title={fullName}>
      <ListWrapper>
        <li>
          <Attributes>USER NAME</Attributes> : {user.username}
        </li>
        <li>
          <Attributes>PHONE</Attributes> : {user.phone}
        </li>
        <li>
          <Attributes>EMAIL</Attributes> : {user.email}
        </li>
        <li>
          <Attributes>ADDRESS</Attributes> : {address}
        </li>
        <li>
          <Attributes>ORDER</Attributes>
          <Table headers={headers} data={cartList} pathname="carts" />
        </li>
      </ListWrapper>
    </Page>
  );
};
export default UserItem;
