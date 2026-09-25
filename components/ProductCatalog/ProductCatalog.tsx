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
import AuthModal from "@/components/AuthModal";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";
import { MdOutlineSearchOff } from "react-icons/md";

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

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [isMounted, setIsMounted] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [visiblePagesCount, setVisiblePagesCount] = useState(3);

  useEffect(
    function initResize() {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsMounted(true);

      function handleResize() {
        if (window.innerWidth >= 1440) {
          setItemsPerPage(12);
          setVisiblePagesCount(3);
        } else if (window.innerWidth >= 768) {
          setItemsPerPage(9);
          setVisiblePagesCount(3);
        } else {
          setItemsPerPage(9);
          setVisiblePagesCount(2);
        }
      }

      handleResize();
      window.addEventListener("resize", handleResize);

      fetchProducts().catch(function handleError() {
        toast.error("Failed to load products");
      });

      return function cleanup() {
        window.removeEventListener("resize", handleResize);
      };
    },
    [fetchProducts],
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage(1);
  }, [itemsPerPage]);

  const totalPages = Math.ceil(products.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handleAddToCart = async (productId: string) => {
    if (!isLoggedIn) {
      setIsAuthModalOpen(true);
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

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const currentChunk = Math.ceil(currentPage / visiblePagesCount);
    const startPage = (currentChunk - 1) * visiblePagesCount + 1;
    const endPage = Math.min(currentChunk * visiblePagesCount, totalPages);

    // Якщо ми дійшли до останнього блоку (кінець), показуємо крапки тільки спереду
    if (endPage === totalPages && startPage > 1) {
      pages.push("...prev");
    }

    // Додаємо самі номери
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Якщо ми ще НЕ в кінці, показуємо крапки тільки в кінці
    if (endPage < totalPages) {
      pages.push("...next");
    }

    return pages;
  };

  const handlePrevDotsClick = () => {
    const currentChunk = Math.ceil(currentPage / visiblePagesCount);
    const startPage = (currentChunk - 1) * visiblePagesCount + 1;
    setCurrentPage(Math.max(1, startPage - 1));
  };

  const handleNextDotsClick = () => {
    const currentChunk = Math.ceil(currentPage / visiblePagesCount);
    const endPage = currentChunk * visiblePagesCount;
    setCurrentPage(Math.min(totalPages, endPage + 1));
  };

  if (!isMounted) return null;

  if (!isLoading && products.length === 0) {
    return (
      <div className={css.emptyCatalogWrapper}>
        <div className={css.emptyIconBg}>
          <MdOutlineSearchOff className={css.emptyIcon} />
        </div>
        <h3 className={css.emptyTitle}>Nothing was found</h3>
        <p className={css.emptyText}>
          We couldn&apos;t find any products matching your request. Try
          adjusting your filters or search query.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className={css.productsListWrapper}>
        <ul className={css.list}>
          {currentProducts.map((product) => (
            <ProductItem
              key={product._id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </ul>

        {totalPages > 1 && (
          <div className={css.nextPrevBtn}>
            <div className={`${css.arrowWrapper} ${css.left}`}>
              <button
                type="button"
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className={`${css.prev} ${currentPage === 1 ? css.disabled : ""}`}
              >
                <RiArrowLeftDoubleFill size={20} className={css.arrowIcon} />
              </button>

              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={`${css.prev} ${currentPage === 1 ? css.disabled : ""}`}
              >
                <IoIosArrowBack size={20} className={css.arrowIcon} />
              </button>
            </div>

            {getPageNumbers().map((page, index) => {
              if (page === "...prev") {
                return (
                  <button
                    key={`prev-dots-${index}`}
                    type="button"
                    onClick={handlePrevDotsClick}
                    className={`${css.pageNumberBtn} ${css.dots || ""}`}
                  >
                    ...
                  </button>
                );
              }

              if (page === "...next") {
                return (
                  <button
                    key={`next-dots-${index}`}
                    type="button"
                    onClick={handleNextDotsClick}
                    className={`${css.pageNumberBtn} ${css.dots || ""}`}
                  >
                    ...
                  </button>
                );
              }

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentPage(page as number)}
                  className={`${css.pageNumberBtn} ${currentPage === page ? css.activePage : ""}`}
                >
                  {page}
                </button>
              );
            })}

            <div className={`${css.arrowWrapper} ${css.right}`}>
              <button
                type="button"
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className={`${css.next} ${currentPage === totalPages ? css.disabled : ""}`}
              >
                <IoIosArrowForward size={20} className={css.arrowIcon} />
              </button>

              <button
                type="button"
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className={`${css.next} ${currentPage === totalPages ? css.disabled : ""}`}
              >
                <RiArrowRightDoubleFill size={20} className={css.arrowIcon} />
              </button>
            </div>
          </div>
        )}
      </div>

      {isAuthModalOpen && (
        <AuthModal
          onClose={() => setIsAuthModalOpen(false)}
          initialView="login"
        />
      )}
    </>
  );
}
