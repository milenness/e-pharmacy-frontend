"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import css from "./Header.module.css";
import MobileMenu from "@/components/MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={css.header}>
      <div className="container">
        <nav className={css.nav}>
          <Link href="/" className={css.logoLink} aria-label="Go to home page">
            <Image
              className={css.logoImg}
              src="/WhiteLogo.svg"
              alt="E-Pharmacy Logo"
              width={32}
              height={32}
            />
            E-Pharmacy
          </Link>

          <ul className={css.navList}>
            <li className={css.navItem}>
              <Link
                href="/"
                className={css.navLink}
                aria-label="Go to home page"
              >
                Home
              </Link>
            </li>
            <li className={css.navItem}>
              <Link
                href="/medicine-store"
                className={css.navLink}
                aria-label="Go to medicine stores page"
              >
                Medicine store
              </Link>
            </li>
            <li className={css.navItem}>
              <Link
                href="/medicine"
                className={css.navLink}
                aria-label="Go to medicine catalog page"
              >
                Medicine
              </Link>
            </li>
          </ul>

          <ul className={css.authList}>
            <li className={css.authItem}>
              <Link
                href="/register"
                className={css.registerLink}
                aria-label="Go to register page"
              >
                Register
              </Link>
            </li>

            <li className={css.authItem}>
              <Link
                href="/login"
                className={css.loginLink}
                aria-label="Go to login page"
              >
                Login
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className={css.burgerButton}
            aria-label="Open mobile menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <IoIosMenu size={32} />
          </button>
        </nav>
      </div>

      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
}
