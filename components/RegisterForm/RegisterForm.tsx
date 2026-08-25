"use client";

import { useId } from "react";
import { Formik, Form, Field } from "formik";
import css from "./RegisterForm.module.css";
import Link from "next/link";

export default function RegisterForm() {
  const fieldId = useId();

    return (
      <div className={css.authContainer}>
        <Formik
          initialValues={{
            username: "",
            email: "",
            phone: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log("Form submitted:", values);
          }}
        >
          <Form className={css.form}>
            <div className={css.inputsWrapper}>
              <div className={css.fieldGroup}>
                <label className={css.label} htmlFor={`${fieldId}-username`}>
                  User Name
                </label>
                <Field
                  className={css.field}
                  type="text"
                  name="username"
                  id={`${fieldId}-username`}
                  placeholder="User Name"
                />
              </div>

              <div className={css.fieldGroup}>
                <label className={css.label} htmlFor={`${fieldId}-email`}>
                  Email address
                </label>
                <Field
                  className={css.field}
                  type="email"
                  name="email"
                  id={`${fieldId}-email`}
                  placeholder="Email address"
                />
              </div>

              <div className={css.fieldGroup}>
                <label className={css.label} htmlFor={`${fieldId}-phone`}>
                  Phone number
                </label>
                <Field
                  className={css.field}
                  type="tel"
                  name="phone"
                  id={`${fieldId}-phone`}
                  placeholder="Phone number"
                />
              </div>

              <div className={css.fieldGroup}>
                <label className={css.label} htmlFor={`${fieldId}-password`}>
                  Password
                </label>
                <Field
                  className={css.field}
                  type="password"
                  name="password"
                  id={`${fieldId}-password`}
                  placeholder="Password"
                />
              </div>
            </div>

            <button className={css.btn} type="submit">
              Register
            </button>
          </Form>
        </Formik>
        <Link
          href="/login"
          className={css.registerLink}
          aria-label="Go to login page"
        >
          Already have an account?
        </Link>
      </div>
    );
}
