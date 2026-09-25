"use client";

import { useState, useEffect } from "react";
import css from "./CartList.module.css";
import Image from "next/image";
import { CgMathPlus } from "react-icons/cg";
import { HiMiniMinus } from "react-icons/hi2";
import { useCartStore } from "@/store/cartStore";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function CartList() {
  const { items, updateQuantity, removeItem } = useCartStore();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentPage(totalPages);
    }
  }, [items.length, currentPage, totalPages]);

  if (items.length === 0) {
    return (
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        Your cart is empty.
      </p>
    );
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className={css.cartListWrapper}>
      <ul className={css.cartList}>
        {currentItems.map((item) => (
          <li key={item.product._id} className={css.cartItem}>
            <Image
              className={css.img}
              src={item.product.photo || "/Catalog/Default.jpg"}
              alt={item.product.name}
              width={120}
              height={120}
              priority
            />
            <div className={css.infoWrapper}>
              <div className={css.mainCostInfo}>
                <div className={css.mainInfo}>
                  <h3 className={css.medName}>{item.product.name}</h3>
                  <p className={css.medDesk}>{item.product.category}</p>
                </div>
                <span className={css.cost}>৳ {item.product.price}</span>
              </div>
              <div className={css.btnWrapper}>
                <div className={css.counter}>
                  <button
                    type="button"
                    className={css.plusBtn}
                    onClick={() =>
                      updateQuantity(item.product._id, item.quantity + 1)
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
                        updateQuantity(item.product._id, item.quantity - 1);
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
                  onClick={() => removeItem(item.product._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
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
            <IoIosArrowBack size={24} className={css.arrowIcon} />
          </button>

          <span style={{ fontSize: "16px", fontWeight: "500" }}>
            {currentPage} / {totalPages}
          </span>

          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className={`${css.next} ${currentPage === totalPages ? css.disabled : ""}`}
          >
            <IoIosArrowForward size={24} className={css.arrowIcon} />
          </button>
        </div>
      )}
    </div>
  );
}
