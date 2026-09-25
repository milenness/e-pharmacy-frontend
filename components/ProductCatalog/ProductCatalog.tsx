"use client";

import { useEffect, useState } from "react";
import css from "./ProductCatalog.module.css";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/api";
import toast from "react-hot-toast";
import { useCartStore } from "@/store/cartStore";
import { useProductsStore } from "@/store/productsStore";
import { useLoaderStore } from "@/store/loaderStore";
import { useAuthStore } from "@/store/authStore";
import LoginModal from "@/components/LoginModal";
import RegisterModal from "@/components/RegisterModal"; // Додано імпорт

const ProductItem = ({
  product,
  onAddToCart,
}: {
  product: Product;
  onAddToCart: (id: string) => void;
}) => {
  const [imgSrc, setImgSrc] = useState(product.photo || "/Catalog/Default.jpg");

  return (
    <li className={css.item}>
      <Image
        className={css.img}
        src={imgSrc}
        alt={product.name}
        width={335}
        height={300}
        priority
        onError={() => setImgSrc("/Catalog/Default.jpg")}
      />
      <div className={css.wrapper}>
        <div className={css.titleCost}>
          <h2 className={css.name}>{product.name}</h2>
          <span className={css.cost}>৳{product.price}</span>
        </div>
        <p className={css.text}>{product.category}</p>
        <div className={css.buttonsWrapper}>
          <button
            type="button"
            className={css.cartButton}
            onClick={() => onAddToCart(product._id)}
          >
            Add to cart
          </button>
          <Link href={`/medicine/${product._id}`} className={css.detailsLink}>
            Details
          </Link>
        </div>
      </div>
    </li>
  );
};

export default function ProductCatalog() {
  const { products, fetchProducts } = useProductsStore();
  const { items, updateQuantity } = useCartStore();
  const isLoading = useLoaderStore((state) => state.isLoading);

  const { isLoggedIn } = useAuthStore();

  // Стани для керування обома модалками
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  useEffect(() => {
    fetchProducts().catch(() => {
      toast.error("Failed to load products");
    });
  }, [fetchProducts]);

  const handleAddToCart = async (productId: string) => {
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }

    try {
      const existingItem = items.find((item) => item.product._id === productId);
      const newQuantity = existingItem ? existingItem.quantity + 1 : 1;

      await updateQuantity(productId, newQuantity);
      toast.success("Product successfully added to cart!");
    } catch {
      toast.error("Failed to add product to cart");
    }
  };

  if (!isLoading && products.length === 0) {
    return (
      <p style={{ textAlign: "center", marginTop: "40px", fontSize: "18px" }}>
        Nothing was found for your request
      </p>
    );
  }

  return (
    <>
      <ul className={css.list}>
        {products.map((product) => (
          <ProductItem
            key={product._id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </ul>

      {isLoginModalOpen && (
        <LoginModal
          onClose={() => setIsLoginModalOpen(false)}
          onSwitchToRegister={() => {
            setIsLoginModalOpen(false);
            setIsRegisterModalOpen(true); // Тепер відкривається модалка, а не сторінка
          }}
        />
      )}

      {isRegisterModalOpen && (
        <RegisterModal
          onClose={() => setIsRegisterModalOpen(false)}
          onSwitchToLogin={() => {
            setIsRegisterModalOpen(false);
            setIsLoginModalOpen(true);
          }}
        />
      )}
    </>
  );
}
