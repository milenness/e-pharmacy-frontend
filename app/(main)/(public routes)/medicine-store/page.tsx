import { Metadata } from "next";
import css from "./page.module.css";
import StoreList from "@/components/StoreList";

export const metadata: Metadata = {
  title: "Medicine store",
  description:
    "Find the nearest E-Pharmacy stores, check their addresses, and see available services in your area.",
};

export default function MedicineStorePage() {
  return (
    <section className={css.section}>
      <div className="container">
        <h1 className={css.title}>Medicine store</h1>
        <StoreList />
      </div>
    </section>
  );
}
