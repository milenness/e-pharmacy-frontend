import css from "./page.module.css";
import StoreList from "@/components/StoreList";

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
