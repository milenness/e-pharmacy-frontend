import { Metadata } from "next";
import css from "./page.module.css";
import CartClient from "@/components/CartClient";

export const metadata: Metadata = {
  title: "Cart",
  description:
    "Review your selected medicines, choose a payment method, and complete your order securely.",
};

export default function CartPage() {
  return (
    <section className={css.section}>
      <div className="container">
        <h2 className={css.title}>Cart</h2>
        <CartClient />
      </div>
    </section>
  );
}
