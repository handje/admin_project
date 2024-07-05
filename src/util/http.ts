const requestFetch = async (url: string, config: object) => {
  const response = await fetch(url, config);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

export const fetchAllProducts = async () => {
  const resData = await requestFetch("https://fakestoreapi.com/products", {});
  return resData;
};

export const fetchAllCustomersInfo = async () => {
  const resData = await requestFetch("https://fakestoreapi.com/users", {});
  return resData;
};
