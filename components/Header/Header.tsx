"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { IoIosMenu } from "react-icons/io";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

import css from "./Header.module.css";
import MobileMenu from "@/components/MobileMenu";
import { useAuthStore } from "@/store/authStore";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const { isLoggedIn, user, logout } = useAuthStore();

  const isHomePage = pathname === "/";

  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

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
                style={{ paddingLeft: "20px", paddingRight: "20px" }}
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
                style={{ paddingLeft: "9px", paddingRight: "9px" }}
                aria-label="Go to medicine stores page"
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
                  className={`${css.registerLink} ${isHomePage ? css.homeRegisterLink : ""}`}
                  aria-label="Go to register page"
                >
                  Register
                </Link>
              </li>

              <li className={css.authItem}>
                <Link
                  href="/login"
                  className={`${css.loginLink} ${isHomePage ? css.homeLoginLink : ""}`}
                  aria-label="Go to login page"
                >
                  Login
                </Link>
              </li>
            </ul>
          )}

          {mounted && isLoggedIn && (
            <ul className={css.userList}>
              <li className={css.cartItem}>
                <Link
                  href="/cart"
                  className={css.cartLink}
                  aria-label="Go to cart page"
                >
                  <PiShoppingCartSimpleBold size={16} />
                </Link>
                <p className={css.count}>0</p>
              </li>

              <li
                className={`${css.nameItem} ${isHomePage ? css.homeNameItem : ""}`}
              >
                {userInitial}
              </li>

              <li className={css.logOutItem}>
                <button
                  onClick={handleLogout}
                  className={`${css.logOutBtn} ${isHomePage ? css.homeLogOutBtn : ""}`}
                  aria-label="Log out"
                >
                  Log out
                </button>
              </li>
            </ul>
          )}

          <button
            type="button"
            className={`${css.burgerButton} ${isHomePage ? css.homeBurgerButton : ""}`}
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