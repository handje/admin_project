import { Await, useRouteLoaderData } from "react-router-dom";
import { CustomersList } from "../components/customers";
import { Suspense } from "react";
import { Customer } from "../util/interfaces";

const Customers = () => {
  const { customers } = useRouteLoaderData("root") as { customers: Customer[] };
  return (
    <Suspense>
      <Await resolve={customers}>
        {(loadedCustomer) => <CustomersList loadedCustomer={loadedCustomer} />}
      </Await>
    </Suspense>
  );
};

export default Customers;
