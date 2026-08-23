import css from "./AddPharmacyPromo.module.css";
import Link from "next/link";
import Image from "next/image";

export default function AddPharmacyPromo() {
  return (
    <section className={css.section}>
          <div className={css.container}>
        <div className={css.content}>
          <div className={css.wrapper}>
            <h2 className={css.title}>Add the medicines you need online now</h2>
            <p className={css.text}>
              Enjoy the convenience of having your prescriptions filled from
              home by connecting with your community pharmacy through our online
              platform.
            </p>
            <Link
              href="/medicine-store"
              className={css.storeLink}
              aria-label="Go to medicine stores page to buy medicine"
            >
              Buy medicine
            </Link>
          </div>
          <Image
            className={css.promoImg}
            src="/AddPharmacyPromo/Tel.png"
            alt="A woman on a couch holding a smartphone during an online medical consultation and looking at pills"
            width={295}
            height={335}
            priority
          />
        </div>
      </div>
    </section>
  );
}
