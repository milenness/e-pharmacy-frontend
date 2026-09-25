"use client";

import { useState, useEffect } from "react";
import css from "./CartList.module.css";
import Image from "next/image";
import { CgMathPlus } from "react-icons/cg";
import { HiMiniMinus } from "react-icons/hi2";
import { useCartStore } from "@/store/cartStore";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Product } from "@/types/api";
import { BsCartPlusFill } from "react-icons/bs";

interface CartItemProps {
  item: {
    product: Product;
    quantity: number;
  };
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

const CartItem = ({ item, onUpdateQuantity, onRemoveItem }: CartItemProps) => {
  const [imgSrc, setImgSrc] = useState(
    item.product?.photo || "/Catalog/Default.jpg",
  );

  return (
    <li className={css.cartItem}>
      <Image
        className={css.img}
        src={imgSrc}
        alt={item.product?.name || "Product image"}
        width={120}
        height={120}
        priority
        onError={() => setImgSrc("/Catalog/Default.jpg")}
      />
      <div className={css.infoWrapper}>
        <div className={css.mainCostInfo}>
          <div className={css.mainInfo}>
            <h3 className={css.medName}>
              {item.product?.name || "Unknown Product"}
            </h3>
            <p className={css.medDesk}>{item.product?.category}</p>
          </div>
          <span className={css.cost}>৳ {item.product?.price || 0}</span>
        </div>
        <div className={css.btnWrapper}>
          <div className={css.counter}>
            <button
              type="button"
              className={css.plusBtn}
              onClick={() =>
                onUpdateQuantity(item.product._id, item.quantity + 1)
              }
            >
              <CgMathPlus className={css.plusIcon} size={18} />
            </button>
            <span className={css.number}>{item.quantity}</span>
            <button
              type="button"
              className={css.minusBtn}
              onClick={() => {
                if (item.quantity > 1) {
                  onUpdateQuantity(item.product._id, item.quantity - 1);
                }
              }}
              disabled={item.quantity <= 1}
            >
              <HiMiniMinus className={css.minusIcon} size={18} />
            </button>
          </div>
          <button
            type="button"
            className={css.btnRemove}
            onClick={() => onRemoveItem(item.product._id)}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

export default function CartList() {
  const { items, updateQuantity, removeItem } = useCartStore();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const visiblePagesCount = 3;

  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentPage(totalPages);
    }
  }, [items.length, currentPage, totalPages]);

  if (items.length === 0) {
    return (
      <div className={css.emptyCartWrapper}>
        <div className={css.emptyIconBg}>
          <BsCartPlusFill className={css.emptyIcon} />
        </div>
        <h3 className={css.emptyTitle}>Your cart is empty</h3>
        <p className={css.emptyText}>
          Looks like you haven&apos;t added any medicine to your cart yet.
        </p>
      </div>
    );
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    let startPage = Math.max(
      1,
      currentPage - Math.floor(visiblePagesCount / 2),
    );
    let endPage = startPage + visiblePagesCount - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - visiblePagesCount + 1);
    }

    if (startPage > 1) {
      pages.push("...prev");
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      pages.push("...next");
    }

    return pages;
  };

  const handlePrevDotsClick = () => {
    let startPage = Math.max(
      1,
      currentPage - Math.floor(visiblePagesCount / 2),
    );
    let endPage = startPage + visiblePagesCount - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - visiblePagesCount + 1);
    }
    setCurrentPage(Math.max(1, startPage - 1));
  };

  const handleNextDotsClick = () => {
    let startPage = Math.max(
      1,
      currentPage - Math.floor(visiblePagesCount / 2),
    );
    let endPage = startPage + visiblePagesCount - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - visiblePagesCount + 1);
    }
    setCurrentPage(Math.min(totalPages, endPage + 1));
  };

  return (
    <div className={css.cartListWrapper}>
      <ul className={css.cartList}>
        {currentItems.map((item, index) => (
          <CartItem
            key={item.product?._id || index}
            item={item}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeItem}
          />
        ))}
      </ul>

      {totalPages > 1 && (
        <div className={css.nextPrevBtn}>
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={`${css.prev} ${currentPage === 1 ? css.disabled : ""}`}
          >
            <IoIosArrowBack size={20} className={css.arrowIcon} />
          </button>

          <div className={css.numbersContainer}>
            {getPageNumbers().map((page, index) => {
              if (page === "...prev") {
                return (
                  <button
                    key={`prev-dots-${index}`}
                    type="button"
                    onClick={handlePrevDotsClick}
                    className={`${css.pageNumberBtn} ${css.dots}`}
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
                    className={`${css.pageNumberBtn} ${css.dots}`}
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
                  className={`${css.pageNumberBtn} ${
                    currentPage === page ? css.activePage : ""
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className={`${css.next} ${currentPage === totalPages ? css.disabled : ""}`}
          >
            <IoIosArrowForward size={20} className={css.arrowIcon} />
          </button>
        </div>
      )}
    </div>
  );
}
