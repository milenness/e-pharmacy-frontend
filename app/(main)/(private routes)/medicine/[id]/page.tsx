import css from "./page.module.css";
import DetailInfo from "@/components/DetailInfo";

export default function MedicinePage() {
  return (
    <section className={css.section}>
      <div className="container">
        <DetailInfo/>
      </div>
    </section>
  );
}
