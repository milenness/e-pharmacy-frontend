"use client";

import css from "./OrderDetails.module.css";
import { useCartStore } from "@/store/cartStore";

export default function OrderDetails() {
  const items = useCartStore((state) => state.items);

  const totalAmount = items
    .reduce((total, item) => {
      const price = parseFloat(item.product?.price || "0");
      return total + price * item.quantity;
    }, 0)
    .toFixed(2);

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Order details</h2>
      <p className={css.text}>
        Shipping and additional costs are calculated based on values you have
        entered.
      </p>
      <div className={css.totalWrapper}>
        <span className={css.totalLabel}>Total:</span>
        <span className={css.total}>৳ {totalAmount}</span>
      </div>

      <button
        type="submit"
        className={css.submitBtn}
        disabled={items.length === 0}
      >
        {items.length === 0 ? "Cart is empty" : "Place order"}
      </button>
    </div>
  );
}
