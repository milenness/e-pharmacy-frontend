import Link from "next/link";
import Image from "next/image";
import css from "./AuthHeader.module.css"

export default function AuthHeader() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.nav}>
          <Link href="/" className={css.logoLink} aria-label="Go to home page">
            <Image
              className={css.logoImg}
              src="/Logo.svg"
              alt="E-Pharmacy Logo"
              width={32}
              height={32}
            />
            E-Pharmacy
          </Link>
        </nav>
      </div>
    </header>
  );
}
