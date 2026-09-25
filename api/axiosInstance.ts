import axios from "axios";
import { useLoaderStore } from "@/store/loaderStore";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  (config) => {
    useLoaderStore.getState().showLoader();

    const authStorage = localStorage.getItem("auth-storage");
    if (authStorage) {
      try {
        const { state } = JSON.parse(authStorage);
        if (state?.token) {
          config.headers.Authorization = `Bearer ${state.token}`;
        }
      } catch (e) {
        console.error("Error parsing auth storage in interceptor", e);
      }
    }

    return config;
  },
  (error) => {
    useLoaderStore.getState().hideLoader();
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    useLoaderStore.getState().hideLoader();
    return response;
  },
  (error) => {
    useLoaderStore.getState().hideLoader();

    if (error.response) {
      const message = error.response.data?.message || "Something went wrong";
      return Promise.reject(new Error(message));
    }

    return Promise.reject(
      new Error("Network error. Please check your connection."),
    );
  },
);

export const setAuthHeader = (token: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = "";
};
