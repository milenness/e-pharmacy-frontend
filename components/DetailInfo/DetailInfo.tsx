"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import css from "./DetailInfo.module.css";
import Image from "next/image";
import { CgMathPlus } from "react-icons/cg";
import { HiMiniMinus } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import toast from "react-hot-toast";

import { getProductById } from "@/api/requests";
import { useCartStore } from "@/store/cartStore";
import { useAuthStore } from "@/store/authStore";
import AuthModal from "@/components/AuthModal";
import { Product } from "@/types/api"; // Імпортуємо готовий тип з твого файлу

export default function DetailInfo() {
  const params = useParams();
  const id = params.id as string;

  // Використовуємо імпортований тип Product
  const [product, setProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description",
  );

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [imgSrc, setImgSrc] = useState("/Catalog/Default.jpg");

  const { items, updateQuantity } = useCartStore();
  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    if (id) {
      getProductById(id)
        .then((data) => {
          setProduct(data);
          if (data.photo) setImgSrc(data.photo);
        })
        .catch(() => toast.error("Failed to load product details"));
    }
  }, [id]);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = async () => {
    if (!isLoggedIn) {
      setIsAuthModalOpen(true);
      return;
    }

    try {
      const existingItem = items.find((item) => item.product._id === id);
      const newQuantity = existingItem
        ? existingItem.quantity + quantity
        : quantity;

      await updateQuantity(id, newQuantity);
      toast.success(`${product?.name} added to cart!`);
      setQuantity(1);
    } catch {
      toast.error("Failed to add product to cart");
    }
  };

  if (!product) return null;

  return (
    <div className={css.detailWrapper}>
      <Image
        className={css.img}
        src={imgSrc}
        alt={product.name}
        width={335}
        height={337}
        priority
        onError={() => setImgSrc("/Catalog/Default.jpg")}
      />
      <div className={css.cartWrapper}>
        <div className={css.titleCostWrapper}>
          <h2 className={css.title}>{product.name}</h2>
          <span className={css.cost}>৳{product.price}</span>
        </div>

        <p className={css.brand}>
          Brand: {product.brand || product.suppliers || "Pharmacy Essentials"}
        </p>

        <div className={css.buttonsAdd}>
          <div className={css.counter}>
            <button
              type="button"
              className={css.plusBtn}
              onClick={handleIncrement}
            >
              <CgMathPlus size={20} />
            </button>
            <span className={css.number}>{quantity}</span>
            <button
              type="button"
              className={css.minusBtn}
              onClick={handleDecrement}
            >
              <HiMiniMinus size={20} />
            </button>
          </div>
          <button
            type="button"
            className={css.addCart}
            onClick={handleAddToCart}
          >
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
              recommended to consult a healthcare professional before using{" "}
              {product.name.toLowerCase()}, especially if you&apos;re pregnant,
              nursing, or taking other medications. This balanced approach
              allows for the benefits of {product.name.toLowerCase()} while
              recognizing the importance of proper usage and caution.
            </p>
            <ul className={css.deskList}>
              <li className={css.deskItem}>
                <span className={css.accent}>
                  Medicinal Uses: Antioxidant Properties:
                </span>{" "}
                {product.name} is packed with antioxidants that help fight
                oxidative stress and inflammation in the body.
              </li>
              <li className={css.deskItem}>
                <span className={css.accent}>Anti-Diabetic Effects:</span> Some
                studies have shown that {product.name.toLowerCase()} leaves
                might lower blood sugar levels, making it a valuable supplement
                for managing diabetes.
              </li>
              <li className={css.deskItem}>
                <span className={css.accent}>Heart Health:</span> The plant has
                been linked to reduced cholesterol levels, which is vital for
                heart health.
              </li>
              <li className={css.deskItem}>
                <span className={css.accent}>Anti-Cancer Properties:</span>{" "}
                Certain compounds in {product.name.toLowerCase()}, such as
                niazimicin, have been found to suppress the growth of cancer
                cells in laboratory studies.
              </li>
              <li className={css.deskItem}>
                <span className={css.accent}>Immune Support:</span> With its
                high vitamin C content, {product.name.toLowerCase()} can boost
                the immune system.
              </li>
              <li className={css.deskItem}>
                <span className={css.accent}>Digestive Aid:</span>{" "}
                {product.name} can help in treating digestive disorders due to
                its anti-inflammatory properties.
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
                  src="/DetailInfoImg/Img-1.png"
                  alt="Leroy Jenkins avatar"
                  width={44}
                  height={44}
                  priority
                  onError={(e) => {
                    e.currentTarget.srcset = "";
                    e.currentTarget.src = "/DefaultAvatar.jpg";
                  }}
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
                I&apos;ve been using {product.name} for a few weeks now. My
                energy levels are up, and I feel great. I followed the
                recommended dosage, and it seems to be a perfect addition to my
                daily routine. Highly recommend!
              </p>
            </li>

            <li className={css.reviewItem}>
              <div className={css.reviewTop}>
                <Image
                  className={css.reviewAvatar}
                  src="/DetailInfoImg/Img-2.png"
                  alt="Leroy Jenkins avatar"
                  width={44}
                  height={44}
                  priority
                  onError={(e) => {
                    e.currentTarget.srcset = "";
                    e.currentTarget.src = "/DefaultAvatar.jpg";
                  }}
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
                I tried {product.name} as part of my wellness regimen, and
                I&apos;ve been pleasantly surprised by the results. My skin
                looks healthier, and I&apos;ve noticed an improvement in my
                digestion. A natural and effective supplement!
              </p>
            </li>

            <li className={css.reviewItem}>
              <div className={css.reviewTop}>
                <Image
                  className={css.reviewAvatar}
                  src="/DetailInfoImg/Img-3.png"
                  alt="Leroy Jenkins avatar"
                  width={44}
                  height={44}
                  priority
                  onError={(e) => {
                    e.currentTarget.srcset = "";
                    e.currentTarget.src = "/DefaultAvatar.jpg";
                  }}
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
                I added {product.name} to my routine, and the results are
                amazing. I was skeptical at first, but now I&apos;m a firm
                believer in its benefits.
              </p>
            </li>
          </ul>
        )}
      </div>

      {isAuthModalOpen && (
        <AuthModal
          onClose={() => setIsAuthModalOpen(false)}
          initialView="login"
        />
      )}
    </div>
  );
}
