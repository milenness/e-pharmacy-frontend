import { create } from "zustand";
import { getProducts } from "../api/requests";
import { Product } from "@/types/api";

interface ProductsState {
  products: Product[];
  filters: { category: string; name: string };
  setFilters: (category: string, name: string) => void;
  fetchProducts: () => Promise<void>;
}

export const useProductsStore = create<ProductsState>((set, get) => ({
  products: [],
  filters: { category: "", name: "" },

  setFilters: (category, name) => {
    set({ filters: { category, name } });
  },

  fetchProducts: async () => {
    const { filters } = get();
    try {
      const params: Record<string, string> = {};

      if (filters.category && filters.category !== "all") {
        params.category = filters.category;
      }

      if (filters.name) {
        params.query = filters.name;
      }

      const data = await getProducts(params);
      set({ products: data || [] });
    } catch (error) {
      console.error("Failed to fetch products", error);
      throw error;
    }
  },
}));
