"use client";

import { useId, useState } from "react";
import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function LoginForm() {
  const fieldId = useId();
  const router = useRouter();

  const { login, error, clearError } = useAuthStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className={css.authContainer}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          clearError();
          setIsSubmitting(true);
          try {
            await login(values);
            router.push("/");
          } catch (err) {
            console.error("Помилка логіну:", err);
          } finally {
            setIsSubmitting(false);
          }
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
                required
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
                required
              />
            </div>
          </div>

          {error && (
            <p style={{ color: "red", marginTop: "10px", fontSize: "14px" }}>
              {error}
            </p>
          )}

          <button className={css.btn} type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Log in"}
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
