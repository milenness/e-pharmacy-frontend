"use client";

import css from "./OrderDetails.module.css";

export default function OrderDetails() {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Order details</h2>
      <p className={css.text}>
        Shipping and additional costs are calculated based on values you have
        entered.
      </p>
      <div className={css.totalWrapper}>
        <span className={css.totalLabel}>Total:</span>
        <span className={css.total}>৳ 122.00</span>
      </div>
      <button type="submit" className={css.submitBtn}>
        Place order
      </button>
    </div>
  );
}
