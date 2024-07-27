export const formatDate = (date: string) => {
  const temp = date.split("T");
  const day = temp[0];
  const sec = temp[1].split(".")[0];
  return `${day} ${sec}`;
};

export const sortByDate = (date1: string, date2: string) => {
  return new Date(date2).getTime() - new Date(date1).getTime();
};

export const formatProducts = (product) => {
  return { ...product };
};
export const formatCustomer = (customer) => {
  return { ...customer };
};
export const formatCarts = (cart) => {
  return { ...cart };
};
