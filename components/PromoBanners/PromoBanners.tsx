import css from "./PromoBanners.module.css";
import Link from "next/link";

export default function PromoBanners() {
  return (
    <section className={css.section}>
      <div className="container">
        <ul className={css.list}>
          <li className={css.item}>
            <div className={css.top}>
              <p className={css.number}>1</p>
              <h2 className={css.title}>Huge Sale</h2>
            </div>

            <div className={css.bottom}>
              <p className={css.percentage}>70%</p>
              <Link
                href="/medicine?discount=70"
                className={css.bottomLink}
                aria-label="Shop items with 70% discount"
              >
                Shop now
              </Link>
            </div>
          </li>

          <li className={css.item} >
            <div className={css.top}>
              <p className={css.number}>2</p>
              <h2 className={css.title}>Secure delivery</h2>
            </div>

            <div
         className={`${css.bottom} ${css.secondItem}`}
            >
              <p className={css.percentage}>100%</p>
              <Link
                href="/features"
                className={css.bottomLink}
                aria-label="Read more about features and secure delivery"
              >
                Read more
              </Link>
            </div>
          </li>

          <li className={css.item}>
            <div className={css.top}>
              <p className={css.number}>3</p>
              <h2 className={css.title}>Off</h2>
            </div>

            <div className={css.bottom}>
              <p className={css.percentage}>35%</p>
              <Link
                href="/medicine?discount=35"
                className={css.bottomLink}
                aria-label="Shop items with 35% discount"
              >
                Shop now
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
