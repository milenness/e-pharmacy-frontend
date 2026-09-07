"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import css from "./LoginModal.module.css";
import { useId } from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

   const fieldId = useId();

  return createPortal(
    <div
      className={css.backdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal}>
        <button
          className={css.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          <IoClose size={20} />
        </button>

        <h2 className={css.modalTitle}>Log in to your account</h2>
        <p className={css.modalDescription}>
          Please login to your account before continuing.
        </p>

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
          className={css.redisterBtn}
          aria-label="Go to register form"
        >
          Don&apos;t have an account?
        </Link>
      </div>
    </div>,
    document.body,
  );
}
