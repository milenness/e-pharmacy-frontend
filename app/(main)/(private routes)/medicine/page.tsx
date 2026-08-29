import css from "./page.module.css"
import ProductCatalog from "@/components/ProductCatalog"

export default function MedicinePage() {
  return (
    <section className={css.section}>
      <div className="container">
        <h1 className={css.title}>Medicine</h1>
        {/* <SearchFilterPanel /> */}
        <ProductCatalog />
      </div>
    </section>
  );
}
