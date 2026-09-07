"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import css from "./RegisterModal.module.css";
import { useId } from "react";
import { Formik, Form, Field } from "formik";

interface RegisterModalProps {
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export default function RegisterModal({
  onClose,
  onSwitchToLogin,
}: RegisterModalProps) {
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

        <h2 className={css.modalTitle}>Sign Up</h2>
        <p className={css.modalDescription}>
          Before proceeding, please register on our site.
        </p>

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

        <button
          type="button"
          onClick={onSwitchToLogin}
          className={css.loginBtn}
          aria-label="Switch to login form"
        >
          Already have an account?
        </button>
      </div>
    </div>,
    document.body,
  );
}
