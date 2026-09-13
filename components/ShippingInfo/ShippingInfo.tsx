"use client";

import css from "./ShippingInfo.module.css";
import { useId } from "react";
import { Field } from "formik";

export default function ShippingInfo() {
  const fieldId = useId();

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Enter shipping info</h2>
      <p className={css.text}>
        Enter your delivery address where you get the product. You can also send
        any other location where you send the products.
      </p>

      <div className={css.inputsWrapper}>
        <div className={css.fieldGroup}>
          <label className={css.label} htmlFor={`${fieldId}-username`}>
            Name
          </label>
          <Field
            className={css.field}
            type="text"
            name="username"
            id={`${fieldId}-username`}
            placeholder="Enter name"
          />
        </div>

        <div className={css.fieldGroup}>
          <label className={css.label} htmlFor={`${fieldId}-email`}>
            Email
          </label>
          <Field
            className={css.field}
            type="email"
            name="email"
            id={`${fieldId}-email`}
            placeholder="Enter email"
          />
        </div>

        <div className={css.fieldGroup}>
          <label className={css.label} htmlFor={`${fieldId}-phone`}>
            Phone
          </label>
          <Field
            className={css.field}
            type="tel"
            name="phone"
            id={`${fieldId}-phone`}
            placeholder="Enter phone"
          />
        </div>

        <div className={css.fieldGroup}>
          <label className={css.label} htmlFor={`${fieldId}-address`}>
            Address
          </label>
          <Field
            className={css.field}
            type="text"
            name="address"
            id={`${fieldId}-address`}
            placeholder="Enter address"
          />
        </div>
      </div>
    </div>
  );
}
