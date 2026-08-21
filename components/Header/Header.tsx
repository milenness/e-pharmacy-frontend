"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoIosMenu } from "react-icons/io";
import css from "./Header.module.css";
import MobileMenu from "@/components/MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <header className={`${css.header} ${isHomePage ? css.homeHeader : ""}`}>
      <div className="container">
        <nav className={css.nav}>
          <Link
            href="/"
            className={`${css.logoLink} ${isHomePage ? css.homeLogoLink : ""}`}
            aria-label="Go to home page"
          >
            <Image
              className={css.logoImg}
              src={isHomePage ? "/WhiteLogo.svg" : "/Logo.svg"}
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
                className={`${css.navLink} ${pathname === "/" ? css.active : ""}`}
                aria-label="Go to home page"
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
                aria-label="Go to medicine stores page"
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
                className={`${css.registerLink} ${
                  pathname === "/register" ? css.active : ""
                }`}
                aria-label="Go to register page"
              >
                Register
              </Link>
            </li>

            <li className={css.authItem}>
              <Link
                href="/login"
                className={`${css.loginLink} ${
                  pathname === "/login" ? css.active : ""
                }`}
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
