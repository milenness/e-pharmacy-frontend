"use client";

import { useState, useEffect } from "react";
import css from "./Reviews.module.css";
import { useReviewsLimit } from "@/hooks/useReviewsLimit";
import { getReviews } from "@/api/requests";
import Image from "next/image";

interface Review {
  _id?: string;
  name?: string;
  testimonial?: string;
  avatar?: string;
}

export default function Reviews() {
  const limit = useReviewsLimit();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        const data = await getReviews();
        setReviews(data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviewsData();
  }, []);

  return (
    <section className={css.section}>
      <div className="container">
        <h2 className={css.title}>Reviews</h2>
        <p className={css.text}>Search for Medicine, Filter by your location</p>

        <ul className={css.list}>
          {reviews.slice(0, limit).map((review, index) => {
            const reviewImageSrc = `/Reviews/Img-${index + 1}.png`;

            return (
              <li className={css.item} key={review._id || index}>
                <h3 className={css.titleItem}>{review.name || "Anonymous"}</h3>
                <p className={css.textItem}>
                  {review.testimonial || "No comment provided."}
                </p>
                <Image
                  className={css.avatar}
                  src={reviewImageSrc}
                  alt={review.name || "User avatar"}
                  width={64}
                  height={64}
                  priority
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
