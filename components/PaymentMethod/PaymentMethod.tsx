"use client";

import css from "./PaymentMethod.module.css";
import { useId } from "react";
import { Field } from "formik";

export default function PaymentMethod() {
  const fieldId = useId();

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Payment method</h2>
      <p className={css.text}>
        You can pay us in a multiple way in our payment gateway system.
      </p>

      <div className={css.radioGroup}>
        <label className={css.radioLabel} htmlFor={`${fieldId}-cash`}>
          <Field
            type="radio"
            name="paymentMethod"
            value="cash"
            id={`${fieldId}-cash`}
            className={css.hiddenRadio}
          />
          <span className={css.customRadio}></span>
          <span className={css.labelText}>Cash On Delivery</span>
        </label>

        <label className={css.radioLabel} htmlFor={`${fieldId}-bank`}>
          <Field
            type="radio"
            name="paymentMethod"
            value="bank"
            id={`${fieldId}-bank`}
            className={css.hiddenRadio}
          />
          <span className={css.customRadio}></span>
          <span className={css.labelText}>Bank</span>
        </label>
      </div>
    </div>
  );
}
