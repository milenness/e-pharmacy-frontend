import css from "./page.module.css";

export default function CartPage() {
  return (
    <section className={css.section}>
      <div className="container">
        <h2 className={css.title}>Cart</h2>
        <div className={css.cartContainer}>
          <div className={css.cartWrapper}>
            {/* <ShippingInfo />
            <PaymentMethod />
            <OrderDetails />  */}
          </div>
          {/* <CartList /> */}
        </div>
      </div>
    </section>
  );
}
