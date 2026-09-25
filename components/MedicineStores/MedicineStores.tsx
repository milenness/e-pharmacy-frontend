"use client";

import { useEffect, useState } from "react";
import css from "./MedicineStores.module.css";
import { FaStar } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { getNearestStores } from "@/api/requests";
import { Store } from "@/types/api";

export default function MedicineStores() {
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const data = await getNearestStores();
        setStores(data || []);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };

    fetchStores();
  }, []);

  return (
    <section className={css.section}>
      <div className="container">
        <h2 className={css.title}>Your Nearest Medicine Store</h2>
        <p className={css.text}>Search for Medicine, Filter by your location</p>
        <ul className={css.list}>
          {stores.slice(0, 6).map((store) => (
            <li key={store._id} className={css.item}>
              <div className={css.wrapper}>
                <h3 className={css.cardTitle}>{store.name}</h3>
                <span className={css.star}>
                  <FaStar className={css.starIcon} size={16} />
                  {store.rating}
                </span>

                <span
                  className={store.status === "OPEN" ? css.open : css.close}
                >
                  {store.status.toLowerCase()}
                </span>
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
