"use client";

import css from "./Reviews.module.css";
import { useReviewsLimit } from "@/hooks/useReviewsLimit";
import Image from "next/image";

export default function Reviews() {
  const limit = useReviewsLimit();

  return (
    <section className={css.section}>
      <div className="container">
        <h2 className={css.title}>Reviews</h2>
        <p className={css.text}>Search for Medicine, Filter by your location</p>

        <ul className={css.list}>
          {limit >= 1 && (
            <li className={css.item}>
              <h3 className={css.titleItem}>Maria Tkachuk</h3>
              <p className={css.textItem}>
                I recently used this medical platform to book an appointment
                with a specialist, and I was impressed by how easy and
                user-friendly the process was. Highly recommended!
              </p>
              <Image
                className={css.avatar}
                src="/DefaultAvatar.jpg"
                alt=""
                width={64}
                height={64}
                priority
              />
            </li>
          )}

          {limit >= 2 && (
            <li className={css.item}>
              <h3 className={css.titleItem}>Sergey Rybachok</h3>
              <p className={css.textItem}>
                I had a great experience using this medical platform to access
                my health records. This platform is a game-changer for managing
                my healthcare needs.
              </p>
              <Image
                className={css.avatar}
                src="/DefaultAvatar.jpg"
                alt=""
                width={64}
                height={64}
                priority
              />
            </li>
          )}

          {limit >= 3 && (
            <li className={css.item}>
              <h3 className={css.titleItem}>Natalia Chatuk</h3>
              <p className={css.textItem}>
                I recently had a virtual appointment with my doctor through this
                medical platform, and I was pleasantly surprised by how seamless
                the experience was.{" "}
              </p>
              <Image
                className={css.avatar}
                src="/DefaultAvatar.jpg"
                alt=""
                width={64}
                height={64}
                priority
              />
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
