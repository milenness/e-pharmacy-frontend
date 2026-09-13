import css from "./PaymentMethod.module.css";

export default function PaymentMethod() {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Payment method</h2>
      <p className={css.text}>
        You can pay us in a multiple way in our payment gateway system.
      </p>
    </div>
  );
}
