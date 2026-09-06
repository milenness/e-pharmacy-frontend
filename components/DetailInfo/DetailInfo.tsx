"use client";

import { useState } from "react";
import css from "./DetailInfo.module.css";
import Image from "next/image";
import { CgMathPlus } from "react-icons/cg";
import { HiMiniMinus } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";

export default function DetailInfo() {
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description",
  );

  return (
    <div className={css.detailWrapper}>
      <Image
        className={css.img}
        src="/Catalog/Default.jpg"
        alt=""
        width={335}
        height={337}
        priority
      />
      <div className={css.cartWrapper}>
        <div className={css.titleCostWrapper}>
          <h2 className={css.title}>Moringa</h2>
          <span className={css.cost}>৳470</span>
        </div>
        <p className={css.brand}>Brand: Roofing (Asphalt)</p>
        <div className={css.buttonsAdd}>
          <div className={css.counter}>
            <button type="button" className={css.plusBtn}>
              <CgMathPlus size={20} />
            </button>
            <span className={css.number}>1</span>
            <button type="button" className={css.minusBtn}>
              <HiMiniMinus size={20} />
            </button>
          </div>
          <button type="button" className={css.addCart}>
            Add to cart
          </button>
        </div>
      </div>

      <div className={css.deskWrapper}>
        <ul className={css.buttonsWrapper}>
          <li>
            <button
              type="button"
              className={`${css.deskButton} ${activeTab === "description" ? css.active : ""}`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`${css.deskButton} ${activeTab === "reviews" ? css.active : ""}`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </li>
        </ul>

        {activeTab === "description" && (
          <>
            <p className={css.mainDesk}>
              Although it&apos;s typically considered safe, excessive
              consumption can lead to side effects. Therefore, it&apos;s
              recommended to consult a healthcare professional before using
              moringa, especially if you&apos;re pregnant, nursing, or taking
              other medications. This balanced approach allows for the benefits
              of moringa while recognizing the importance of proper usage and
              caution.
            </p>
            <ul className={css.deskList}>
              <li className={css.deskItem}>
                <span className={css.accent}>Medicinal Uses:</span>
                <span className={css.accent}>
                  {" "}
                  Antioxidant Properties:
                </span>{" "}
                Moringa is packed with antioxidants that help fight oxidative
                stress and inflammation in the body.
              </li>
              <li className={css.deskItem}>
                <span className={css.accent}>Anti-Diabetic Effects:</span> Some
                studies have shown that moringa leaves might lower blood sugar
                levels, making it a valuable supplement for managing diabetes.
              </li>
              <li className={css.deskItem}>
                <span className={css.accent}>Anti-Diabetic Effects:</span> Some
                studies have shown that moringa leaves might lower blood sugar
                levels, making it a valuable supplement for managing diabetes.
              </li>
              <li className={css.deskItem}>
                <span className={css.accent}>Heart Health:</span> The plant has
                been linked to reduced cholesterol levels, which is vital for
                heart health.
              </li>
              <li className={css.deskItem}>
                <span className={css.accent}>Anti-Cancer Properties:</span>{" "}
                Certain compounds in moringa, such as niazimicin, have been
                found to suppress the growth of cancer cells in laboratory
                studies.
              </li>
              <li className={css.deskItem}>
                <span className={css.accent}>Immune Support:</span> With its
                high vitamin C content, moringa can boost the immune system.
              </li>
              <li className={css.deskItem}>
                <span className={css.accent}>Digestive Aid:</span> Moringa can
                help in treating digestive disorders due to its
                anti-inflammatory properties.
              </li>
            </ul>
          </>
        )}

        {activeTab === "reviews" && (
          <ul className={css.reviewsList}>
            <li className={css.reviewItem}>
              <div className={css.reviewTop}>
                <Image
                  className={css.reviewAvatar}
                  src="/DefaultAvatar.jpg"
                  alt=""
                  width={44}
                  height={44}
                  priority
                />
                <div className={css.reviewContent}>
                  <h4 className={css.reviewAuthor}>Leroy Jenkins</h4>
                  <span className={css.reviewDays}>2 days ago</span>
                </div>

                <div className={css.reviewStarsTel}>
                  <FaStar className={css.starIcon} size={16} /> 4
                </div>

                <div className={css.reviewStarsDesk}>
                  <ul className={css.reviewStars}>
                    <li className={css.reviewNamber}>
                      <FaStar className={css.starIcon} size={16} />
                    </li>
                    <li className={css.reviewNamber}>
                      <FaStar className={css.starIcon} size={16} />
                    </li>
                    <li className={css.reviewNamber}>
                      <FaStar className={css.starIcon} size={16} />
                    </li>
                    <li className={css.reviewNamber}>
                      <FaStar className={css.starIcon} size={16} />
                    </li>
                    <li className={css.reviewNamber}>
                      <FaStar className={css.empty} size={16} />
                    </li>
                  </ul>
                  4
                </div>
              </div>
              <p className={css.reviewText}>
                I&apos;ve been using Moringa powder in my smoothies for a few
                weeks now. My energy levels are up, and I feel great. I followed
                the recommended dosage, and it seems to be a perfect addition to
                my daily routine. Highly recommend!
              </p>
            </li>

            <li className={css.reviewItem}>
              <div className={css.reviewTop}>
                <Image
                  className={css.reviewAvatar}
                  src="/DefaultAvatar.jpg"
                  alt=""
                  width={44}
                  height={44}
                  priority
                />
                <div className={css.reviewContent}>
                  <h4 className={css.reviewAuthor}>Leroy Jenkins</h4>
                  <span className={css.reviewDays}>2 days ago</span>
                </div>

                <div className={css.reviewStarsTel}>
                  <FaStar className={css.starIcon} size={16} /> 4
                </div>

                <div className={css.reviewStarsDesk}>
                  <ul className={css.reviewStars}>
                    <li className={css.reviewNamber}>
                      <FaStar className={css.starIcon} size={16} />
                    </li>
                    <li className={css.reviewNamber}>
                      <FaStar className={css.starIcon} size={16} />
                    </li>
                    <li className={css.reviewNamber}>
                      <FaStar className={css.starIcon} size={16} />
                    </li>
                    <li className={css.reviewNamber}>
                      <FaStar className={css.starIcon} size={16} />
                    </li>
                    <li className={css.reviewNamber}>
                      <FaStar className={css.empty} size={16} />
                    </li>
                  </ul>
                  4
                </div>
              </div>
              <p className={css.reviewText}>
                I tried Moringa capsules as part of my wellness regimen, and
                I&apos;ve been pleasantly surprised by the results. My skin
                looks healthier, and I&apos;ve noticed an improvement in my
                digestion. A natural and effective supplement!
              </p>
            </li>

            <li className={css.reviewItem}>
              <div className={css.reviewTop}>
                <Image
                  className={css.reviewAvatar}
                  src="/DefaultAvatar.jpg"
                  alt=""
                  width={44}
                  height={44}
                  priority
                />
                <div className={css.reviewContent}>
                  <h4 className={css.reviewAuthor}>Leroy Jenkins</h4>
                  <span className={css.reviewDays}>2 days ago</span>
                </div>

                <div className={css.reviewStarsTel}>
                  <FaStar className={css.starIcon} size={16} /> 4
                </div>

                <div className={css.reviewStarsDesk}>
                  <ul className={css.reviewStars}>
                    <li className={css.reviewNamber}>
                      <FaStar className={css.starIcon} size={16} />
                    </li>
                    <li className={css.reviewNamber}>
                      <FaStar className={css.starIcon} size={16} />
                    </li>
                    <li className={css.reviewNamber}>
                      <FaStar className={css.starIcon} size={16} />
                    </li>
                    <li className={css.reviewNamber}>
                      <FaStar className={css.starIcon} size={16} />
                    </li>
                    <li className={css.reviewNamber}>
                      <FaStar className={css.empty} size={16} />
                    </li>
                  </ul>
                  4
                </div>
              </div>
              <p className={css.reviewText}>
                I added Moringa oil to my skincare routine, and the results are
                amazing. My skin feels smoother and more nourished. I was
                skeptical at first, but now I&apos;m a firm believer in its
                benefits.
              </p>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
