import { instance, setAuthHeader, clearAuthHeader } from "./axiosInstance";
import { AuthCredentials, CheckoutData } from "../types/api";

// --- АВТОРИЗАЦІЯ ---
export const registerUser = async (credentials: AuthCredentials) => {
  const { data } = await instance.post("/user/register", credentials);
  return data;
};

export const loginUser = async (credentials: AuthCredentials) => {
  const { data } = await instance.post("/user/login", credentials);
  setAuthHeader(data.token);
  return data;
};

export const logoutUser = async () => {
  await instance.get("/user/logout");
  clearAuthHeader();
};

export const fetchUserInfo = async () => {
  const { data } = await instance.get("/user/user-info");
  return data;
};

// --- ТОВАРИ ТА АПТЕКИ ---
export const getProducts = async (params?: Record<string, string | number>) => {
  const { data } = await instance.get("/products", { params });
  return data;
};

// ДОДАНО: Функція для отримання одного товару за ID
export const getProductById = async (id: string) => {
  const { data } = await instance.get(`/products/${id}`);
  return data;
};

export const getStores = async () => {
  const { data } = await instance.get("/stores");
  return data;
};

export const getNearestStores = async () => {
  const { data } = await instance.get("/stores/nearest");
  return data;
};

export const getReviews = async () => {
  const { data } = await instance.get("/customer-reviews");
  return data;
};

// --- КОШИК ---
export const getCart = async () => {
  const { data } = await instance.get("/cart");
  return data;
};

export const updateCartItem = async (productId: string, quantity: number) => {
  const { data } = await instance.put("/cart/update", { productId, quantity });
  return data;
};

export const checkoutCart = async (checkoutData: CheckoutData) => {
  const { data } = await instance.post("/cart/checkout", checkoutData);
  return data;
};