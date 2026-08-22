import css from "./MainBanner.module.css";

export default function MainBanner() {
  return (
    <section className={css.section}>
      <div className="container">
        <div className={css.content}>
          <h1 className={css.title}>Your medication delivered</h1>
          <p className={css.text}>
            Say goodbye to all your healthcare worries with us
          </p>
        </div>
      </div>
    </section>
  );
}
