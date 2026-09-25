"use client";

import { useEffect, useState } from "react";
import css from "./ProductCatalog.module.css";
import Link from "next/link";
import Image from "next/image";
import { updateCartItem } from "@/api/requests";
import { Product } from "@/types/api";
import toast from "react-hot-toast";
import { useCartStore } from "@/store/cartStore";
import { useProductsStore } from "@/store/productsStore";
import { useLoaderStore } from "@/store/loaderStore";

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
  const { incrementCart } = useCartStore();

  const isLoading = useLoaderStore((state) => state.isLoading);

  useEffect(() => {
    fetchProducts().catch(() => {
      toast.error("Failed to load products");
    });
  }, [fetchProducts]);

  const handleAddToCart = async (productId: string) => {
    try {
      await updateCartItem(productId, 1);
      incrementCart();
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
    <ul className={css.list}>
      {products.map((product) => (
        <ProductItem
          key={product._id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </ul>
  );
}
