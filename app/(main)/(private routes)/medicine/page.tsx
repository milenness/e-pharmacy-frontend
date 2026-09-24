import { Metadata } from "next";
import css from "./page.module.css";
import ProductCatalog from "@/components/ProductCatalog";
import SearchFilterPanel from "@/components/SearchFilterPanel";

export const metadata: Metadata = {
  title: "Medicine",
  description:
    "Browse our comprehensive catalog of medicines, healthcare products, and supplements. Filter by category to find exactly what you need.",
};

export default function MedicinePage() {
  return (
    <section className={css.section}>
      <div className="container">
        <h1 className={css.title}>Medicine</h1>
        <SearchFilterPanel />
        <ProductCatalog />
      </div>
    </section>
  );
}
