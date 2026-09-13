"use client";

import css from "./page.module.css";
import ShippingInfo from "@/components/ShippingInfo";
import PaymentMethod from "@/components/PaymentMethod";
import OrderDetails from "@/components/OrderDetails";
import { Formik, Form } from "formik";

export default function CartPage() {
  return (
    <section className={css.section}>
      <div className="container">
        <h2 className={css.title}>Cart</h2>
        <div className={css.cartContainer}>
          <Formik
            initialValues={{
              username: "",
              email: "",
              phone: "",
              address: "",
              paymentMethod: "cash",
            }}
            onSubmit={(values) => {
              console.log("Final Order Data:", values);
            }}
          >
            <Form className={css.cartWrapper}>
              <ShippingInfo />
              <PaymentMethod />
              <OrderDetails />
            </Form>
          </Formik>

          {/* <CartList /> */}
        </div>
      </div>
    </section>
  );
}
