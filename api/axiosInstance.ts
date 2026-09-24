import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export const instance = axios.create({
  baseURL,
});

export const setAuthHeader = (token: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = "";
};
