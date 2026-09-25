import { create } from "zustand";
import { getCart, updateCartItem, checkoutCart } from "@/api/requests";
import { Product, CheckoutData } from "@/types/api";

export interface CartItemType {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItemType[];
  fetchCart: () => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  removeItem: (productId: string) => Promise<void>;
  checkout: (data: CheckoutData) => Promise<void>;
  getTotal: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  fetchCart: async () => {
    try {
      const data = await getCart();
      set({ items: data?.items || [] });
    } catch (error) {
      console.error("Failed to fetch cart", error);
    }
  },

  updateQuantity: async (productId, quantity) => {
    try {
      const data = await updateCartItem(productId, quantity);
      set({ items: data?.items || [] });
    } catch (error) {
      console.error("Failed to update cart", error);
    }
  },

  removeItem: async (productId) => {
    try {
      // Передаємо quantity: 0, щоб бекенд зрозумів, що товар треба видалити
      const data = await updateCartItem(productId, 0);
      set({ items: data?.items || [] });
    } catch (error) {
      console.error("Failed to remove item", error);
    }
  },

  checkout: async (checkoutData) => {
    try {
      await checkoutCart(checkoutData);
      set({ items: [] }); // Очищаємо кошик на фронті після успішного замовлення
    } catch (error) {
      console.error("Checkout failed", error);
      throw error;
    }
  },

  getTotal: () => {
    const { items } = get();
    return items.reduce((total, item) => {
      const price = parseFloat(item.product.price) || 0;
      return total + price * item.quantity;
    }, 0);
  },
}));
