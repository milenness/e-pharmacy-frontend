import css from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { ImFacebook } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.top}>
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

          <p className={css.text}>
            Get the medicine to help you feel better, get back to your active
            life, and enjoy every moment.
          </p>

          <nav className={css.nav}>
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
          </nav>

          <ul className={css.socialList}>
            <li className={css.socialItem}>
              <Link
                href="https://www.facebook.com/goITclub/"
                className={css.socialLink}
                aria-label="Go to medicine catalog page"
              >
                <ImFacebook size={20} />
              </Link>
            </li>
            <li className={css.socialItem}>
              <Link
                href="https://www.facebook.com/goITclub/"
                className={css.socialLink}
                aria-label="Go to medicine catalog page"
              >
                <RiInstagramFill size={23} />
              </Link>
            </li>
            <li className={css.socialItem}>
              <Link
                href="https://www.youtube.com/c/GoIT"
                className={css.socialLink}
                aria-label="Go to medicine catalog page"
              >
                <FaYoutube size={25} />
              </Link>
            </li>
          </ul>
        </div>
        <div className={css.bottom}>
          <p className={`${css.copyright} ${css.bottomItem}`}>
            © E-Pharmacy 2023. All Rights Reserved
          </p>
          <Link
            href="/"
            className={`${css.bottomLink} ${css.bottomItem}`}
            aria-label="Go to medicine catalog page"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className={`${css.bottomLink} ${css.bottomItem}`}
            aria-label="Go to medicine catalog page"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
