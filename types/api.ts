export interface AuthCredentials {
  email: string;
  password?: string;
  name?: string;
  phone?: string;
}

export interface CheckoutData {
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: "Cash On Delivery" | "Bank";
}

export interface Store {
  _id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  rating: number;
  status: "OPEN" | "CLOSE";
}

export interface Review {
  _id?: string;
  name?: string;
  testimonial?: string;
  avatar?: string;
}

export interface Product {
  _id: string;
  id?: string;
  photo: string;
  name: string;
  suppliers: string;
  stock: string;
  price: string;
  category: string;
  discount: string;
  brand: string;
}