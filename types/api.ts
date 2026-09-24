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
