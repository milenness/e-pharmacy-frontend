"use client";

import { useId } from "react";
import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";
import Link from "next/link";

export default function LoginForm() {
  const fieldId = useId();

  return (
    <div className={css.authContainer}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log("Login submitted:", values);
        }}
      >
        <Form className={css.form}>
          <div className={css.inputsWrapper}>
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
            Log in
          </button>
        </Form>
      </Formik>

      <Link
        href="/register"
        className={css.loginLink}
        aria-label="Go to register page"
      >
        Don&apos;t have an account?
      </Link>
    </div>
  );
}
