"use client";

import { useEffect, useState } from "react";
import css from "./StoreList.module.css";
import { FaStar } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";
import { getStores } from "@/api/requests";
import { Store } from "@/types/api";

export default function StoreList() {
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const data = await getStores();
        setStores(data || []);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };

    fetchStores();
  }, []);

  return (
    <ul className={css.list}>
      {stores.slice(0, 9).map((store) => {
        const statusClass = store.status === "OPEN" ? css.open : css.close;
        const statusText = store.status.toLowerCase();

        return (
          <li key={store._id} className={css.item}>
            <div className={css.wrapper}>
              <h3 className={css.cardTitle}>{store.name}</h3>
              <div className={css.leftBlock}>
                <span className={css.star}>
                  <FaStar className={css.starIcon} size={16} />
                  {store.rating}
                </span>
                <span className={statusClass}>{statusText}</span>
              </div>
            </div>

            <div className={css.location}>
              <GrLocation className={css.locationIcon} size={18} />
              <p className={css.address}>{store.address}</p>
              <p className={css.addAddress}>{store.city}</p>
            </div>

            <div className={css.tel}>
              <BsTelephone className={css.telIcon} size={18} />
              <p className={css.telNumber}>{store.phone}</p>
            </div>

            <div className={css.bottomBlock}>
              <Link
                href="/medicine"
                className={css.storeLink}
                aria-label={`Go to ${store.name} page to buy medicine`}
              >
                Visit Store
              </Link>
              <div className={css.bottomLeft}>
                <span className={css.star}>
                  <FaStar className={css.starIcon} size={16} />
                  {store.rating}
                </span>
                <span className={statusClass}>{statusText}</span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
