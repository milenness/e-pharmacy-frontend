"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import css from "./MobileMenu.module.css";
import { VscCloseCompact } from "react-icons/vsc";
import { useAuthStore } from "@/store/authStore";

interface ModalProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: ModalProps) {
  const pathname = usePathname();
  const router = useRouter();

  const { isLoggedIn, logout } = useAuthStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleLogout = async () => {
    await logout();
    onClose(); // Закриваємо мобільне меню після виходу
    router.push("/");
  };

  return createPortal(
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button
          className={css.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          <VscCloseCompact size={18} />
        </button>

        <ul className={css.navList}>
          <li className={css.navItem}>
            <Link
              href="/"
              className={`${css.navLink} ${pathname === "/" ? css.active : ""}`}
              style={{ paddingLeft: "20px", paddingRight: "20px" }}
              aria-label="Go to home page"
              onClick={onClose}
            >
              Home
            </Link>
          </li>
          <li className={css.navItem}>
            <Link
              href="/medicine-store"
              className={`${css.navLink} ${
                pathname === "/medicine-store" ? css.active : ""
              }`}
              style={{ paddingLeft: "9px", paddingRight: "9px" }}
              aria-label="Go to medicine stores page"
              onClick={onClose}
            >
              Medicine store
            </Link>
          </li>
          <li className={css.navItem}>
            <Link
              href="/medicine"
              className={`${css.navLink} ${
                pathname === "/medicine" || pathname.startsWith("/medicine/")
                  ? css.active
                  : ""
              }`}
              style={{ paddingLeft: "17px", paddingRight: "17px" }}
              aria-label="Go to medicine catalog page"
              onClick={onClose}
            >
              Medicine
            </Link>
          </li>
        </ul>

        {mounted && !isLoggedIn && (
          <ul className={css.authList}>
            <li className={css.authItem}>
              <Link
                href="/register"
                className={css.registerLink}
                onClick={onClose}
              >
                Register
              </Link>
            </li>
            <li className={css.authItem}>
              <Link href="/login" className={css.loginLink} onClick={onClose}>
                Login
              </Link>
            </li>
          </ul>
        )}

        {mounted && isLoggedIn && (
          <button
            onClick={handleLogout}
            className={css.logOutLink}
            aria-label="Log out"
          >
            Log out
          </button>
        )}
      </div>
    </div>,
    document.body,
  );
}
