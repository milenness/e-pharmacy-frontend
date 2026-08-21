"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./MobileMenu.module.css";
import { VscCloseCompact } from "react-icons/vsc";


interface ModalProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: ModalProps) {
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

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
                pathname === "/medicine" ? css.active : ""
              }`}
              style={{ paddingLeft: "17px", paddingRight: "17px" }}
              aria-label="Go to medicine catalog page"
              onClick={onClose}
            >
              Medicine
            </Link>
          </li>
        </ul>

        {/* <ul className={css.authList}>
          <li className={css.authItem}>
            <Link href="/register" className={css.registerLink}>
              Register
            </Link>
          </li>
          <li className={css.authItem}>
            <Link href="/login" className={css.loginLink}>
              Login
            </Link>
          </li>
        </ul> */}

        <Link href="/register" className={css.logOutLink}>
          Log out
        </Link>
      </div>
    </div>,
    document.body,
  );
}
