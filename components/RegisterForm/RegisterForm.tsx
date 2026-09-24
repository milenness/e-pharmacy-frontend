"use client";

import { useId, useState } from "react";
import { Formik, Form, Field } from "formik";
import css from "./RegisterForm.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const fieldId = useId();
  const router = useRouter();

  const { register, clearError } = useAuthStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className={css.authContainer}>
      <Formik
        initialValues={{
          username: "",
          email: "",
          phone: "",
          password: "",
        }}
        onSubmit={async (values) => {
          clearError();
          setIsSubmitting(true);
          try {
            await register({
              name: values.username,
              email: values.email,
              phone: values.phone,
              password: values.password,
            });
            router.push("/");
          } catch (err: unknown) {
            const errorMessage =
              err instanceof Error ? err.message : "Registration failed";
            toast.error(errorMessage);
          } finally {
            setIsSubmitting(false);
          }
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
                required
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
                required
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
                required
              />
            </div>
          </div>

          <button className={css.btn} type="submit" disabled={isSubmitting}>
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
