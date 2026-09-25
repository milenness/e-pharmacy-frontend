import { create } from "zustand";
import { getCart } from "../api/requests";

interface CartState {
  totalItems: number;
  fetchCart: () => Promise<void>;
  incrementCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  totalItems: 0,

  fetchCart: async () => {
    try {
      const data = await getCart();
      const itemsCount = Array.isArray(data)
        ? data.length
        : data?.items?.length || 0;
      set({ totalItems: itemsCount });
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    }
  },

  incrementCart: () => set((state) => ({ totalItems: state.totalItems + 1 })),
}));
