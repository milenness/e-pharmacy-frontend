"use client";

import { useEffect, useState, useId } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import css from "./AuthModal.module.css";
import { Formik, Form, Field } from "formik";
import { useAuthStore } from "@/store/authStore";
import toast from "react-hot-toast";

interface AuthModalProps {
  onClose: () => void;
  initialView?: "login" | "register";
}

export default function AuthModal({
  onClose,
  initialView = "login",
}: AuthModalProps) {
  const [view, setView] = useState<"login" | "register">(initialView);
  const isLogin = view === "login";

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
  const { login, register, clearError } = useAuthStore();
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

        {isLogin ? (
          <>
            <h2 className={css.modalTitle}>Log in to your account</h2>
            <p className={css.modalDescriptionLogin}>
              Please login to your account before continuing.
            </p>

            <Formik
              key="login-form"
              initialValues={{ email: "", password: "" }}
              onSubmit={async (values) => {
                clearError();
                setIsSubmitting(true);
                try {
                  await login(values);
                  onClose();
                } catch (err: unknown) {
                  const errorMessage =
                    err instanceof Error
                      ? err.message
                      : "Invalid email or password";
                  toast.error(errorMessage);
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
                    <label
                      className={css.label}
                      htmlFor={`${fieldId}-password`}
                    >
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

                <button
                  className={css.btn}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Log in
                </button>
              </Form>
            </Formik>

            <button
              type="button"
              onClick={() => {
                clearError();
                setView("register");
              }}
              className={css.registerBtn}
              aria-label="Switch to register form"
            >
              Don&apos;t have an account?
            </button>
          </>
        ) : (
          <>
            <h2 className={css.modalTitle}>Sign Up</h2>
            <p className={css.modalDescriptionRegister}>
              Before proceeding, please register on our site.
            </p>

            <Formik
              key="register-form"
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
                  onClose();
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
                    <label
                      className={css.label}
                      htmlFor={`${fieldId}-username`}
                    >
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
                    <label
                      className={css.label}
                      htmlFor={`${fieldId}-reg-email`}
                    >
                      Email address
                    </label>
                    <Field
                      className={css.field}
                      type="email"
                      name="email"
                      id={`${fieldId}-reg-email`}
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
                    <label
                      className={css.label}
                      htmlFor={`${fieldId}-reg-password`}
                    >
                      Password
                    </label>
                    <Field
                      className={css.field}
                      type="password"
                      name="password"
                      id={`${fieldId}-reg-password`}
                      placeholder="Password"
                      required
                    />
                  </div>
                </div>

                <button
                  className={css.btn}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Register
                </button>
              </Form>
            </Formik>

            <button
              type="button"
              onClick={() => {
                clearError();
                setView("login");
              }}
              className={css.loginBtn}
              aria-label="Switch to login form"
            >
              Already have an account?
            </button>
          </>
        )}
      </div>
    </div>,
    document.body,
  );
}
