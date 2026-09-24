"use client";

import { useEffect, useState, useId } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import css from "./LoginModal.module.css";
import { Formik, Form, Field } from "formik";
import { useAuthStore } from "@/store/authStore";

interface LoginModalProps {
  onClose: () => void;
  onSwitchToRegister: () => void;
}

export default function LoginModal({
  onClose,
  onSwitchToRegister,
}: LoginModalProps) {
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

  const { login, error, clearError } = useAuthStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
          onSubmit={async (values) => {
            clearError();
            setIsSubmitting(true);
            try {
              await login(values);
              onClose();
            } catch (err) {
              console.error("Login failed:", err);
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

        <button
          type="button"
          onClick={onSwitchToRegister}
          className={css.redisterBtn}
          aria-label="Switch to register form"
        >
          Don&apos;t have an account?
        </button>
      </div>
    </div>,
    document.body,
  );
}
