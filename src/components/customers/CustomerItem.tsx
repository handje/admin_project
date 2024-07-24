import styled from "styled-components";

import Page from "../common/Page";
import { Table } from "../common";
import { Customer, Order } from "../../util/interfaces";

// Number - Street - (District) - City/Province - Country - Postcode
// 호수 - 도로 - 구역(구/시) - 도시/도 - 나라 - 우편번호

const CustomerItem = ({
  customer,
  orderList,
}: {
  customer: Customer;
  orderList: Order[];
}) => {
  const headers = [
    { text: "ID", value: "id" },
    { text: "Date", value: "date" },
  ];
  return (
    <Page id={customer.id}>
      <InfoList>
        <li>
          <Attributes>NAME</Attributes> :
          {` ${customer.name.firstname} ${customer.name.lastname}`}
        </li>
        <li>
          <Attributes>USER NAME</Attributes> : {customer.username}
        </li>
        <li>
          <Attributes>PHONE</Attributes> : {customer.phone}
        </li>
        <li>
          <Attributes>EMAIL</Attributes> : {customer.email}
        </li>
        <li>
          <Attributes>ADDRESS</Attributes> :
          {`${customer.address.number}, ${customer.address.street}, ${customer.address.city}, ${customer.address.number} / ${customer.address.zipcode}`}
        </li>
        <li>
          <Attributes>ORDER</Attributes>
          <Table headers={headers} data={orderList} />
        </li>
      </InfoList>
    </Page>
  );
};
export default CustomerItem;

const InfoList = styled.ul`
  & > li {
    font-size: 18px;
    line-height: 300%;
  }
`;
const Attributes = styled.span`
  font-weight: bold;
`;
