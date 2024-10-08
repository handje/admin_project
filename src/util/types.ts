export interface Auth {
  email: string;
  password: string;
}

export interface Admin {
  name: string;
  depart: string;
  num: string;
  email: string;
}

export interface AdminInfo extends Admin {
  password: string;
  role: string;
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  loginedInfo?: Admin;
}

export interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: { lat: string; long: string };
}

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: Address;
  phone: string;
  fullname?: string;
}

export interface Cart {
  id: number;
  userId: number;
  date: string;
  products: { productId: number; quantity: number }[];
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating?: { rate: number; count: number };
  image: string;
  category: string;
}
