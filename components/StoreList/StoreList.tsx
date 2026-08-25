import css from "./StoreList.module.css";
import { FaStar } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";

export default function MedicineStores() {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <div className={css.wrapper}>
          <h3 className={css.cardTitle}>Tremblay and Schiller</h3>
          <div className={css.leftBlock}>
            <span className={css.star}>
              <FaStar className={css.starIcon} size={16} />2
            </span>
            <span className={css.open}>open</span>
          </div>
        </div>
        <div className={css.location}>
          <GrLocation className={css.locationIcon} size={18} />
          <p className={css.address}>Kretoria 11007</p>
          <p className={css.addAddress}>Champerico</p>
        </div>
        <div className={css.tel}>
          <BsTelephone className={css.telIcon} size={18} />
          <p className={css.telNumber}>132-90-3868</p>
        </div>
        <div className={css.bottomBlock}>
          <Link
            href="/medicine-store"
            className={css.storeLink}
            aria-label="Go to medicine store page to buy medicine"
          >
            Visit Store
          </Link>
          <div className={css.bottomLeft}>
            <span className={css.star}>
              <FaStar className={css.starIcon} size={16} />2
            </span>
            <span className={css.open}>open</span>
          </div>
        </div>
      </li>

      <li className={css.item}>
        <div className={css.wrapper}>
          <h3 className={css.cardTitle}>Williamson-Gerlach</h3>
          <div className={css.leftBlock}>
            <span className={css.star}>
              <FaStar className={css.starIcon} size={16} />1
            </span>
            <span className={css.close}>close</span>
          </div>
        </div>
        <div className={css.location}>
          <GrLocation className={css.locationIcon} size={18} />
          <p className={css.address}>Porto 4785-103</p>
          <p className={css.addAddress}>Abelheira</p>
        </div>
        <div className={css.tel}>
          <BsTelephone className={css.telIcon} size={18} />
          <p className={css.telNumber}>279-16-6959</p>
        </div>
        <div className={css.bottomBlock}>
          <Link
            href="/medicine-store"
            className={css.storeLink}
            aria-label="Go to medicine store page to buy medicine"
          >
            Visit Store
          </Link>
          <div className={css.bottomLeft}>
            <span className={css.star}>
              <FaStar className={css.starIcon} size={16} />1
            </span>
            <span className={css.close}>close</span>
          </div>
        </div>
      </li>

      <li className={css.item}>
        <div className={css.wrapper}>
          <h3 className={css.cardTitle}>Fahey-Batz</h3>
          <div className={css.leftBlock}>
            <span className={css.star}>
              <FaStar className={css.starIcon} size={16} />1
            </span>
            <span className={css.close}>close</span>
          </div>
        </div>
        <div className={css.location}>
          <GrLocation className={css.locationIcon} size={18} />
          <p className={css.address}>Porto 4785-103</p>
          <p className={css.addAddress}>Abelheira</p>
        </div>
        <div className={css.tel}>
          <BsTelephone className={css.telIcon} size={18} />
          <p className={css.telNumber}>279-16-6959</p>
        </div>
        <div className={css.bottomBlock}>
          <Link
            href="/medicine-store"
            className={css.storeLink}
            aria-label="Go to medicine store page to buy medicine"
          >
            Visit Store
          </Link>
          <div className={css.bottomLeft}>
            <span className={css.star}>
              <FaStar className={css.starIcon} size={16} />1
            </span>
            <span className={css.close}>close</span>
          </div>
        </div>
      </li>

      <li className={css.item}>
        <div className={css.wrapper}>
          <h3 className={css.cardTitle}>Fahey-Batz</h3>
          <div className={css.leftBlock}>
            <span className={css.star}>
              <FaStar className={css.starIcon} size={16} />1
            </span>
            <span className={css.close}>close</span>
          </div>
        </div>
        <div className={css.location}>
          <GrLocation className={css.locationIcon} size={18} />
          <p className={css.address}>Porto 4785-103</p>
          <p className={css.addAddress}>Abelheira</p>
        </div>
        <div className={css.tel}>
          <BsTelephone className={css.telIcon} size={18} />
          <p className={css.telNumber}>279-16-6959</p>
        </div>
        <div className={css.bottomBlock}>
          <Link
            href="/medicine-store"
            className={css.storeLink}
            aria-label="Go to medicine store page to buy medicine"
          >
            Visit Store
          </Link>
          <div className={css.bottomLeft}>
            <span className={css.star}>
              <FaStar className={css.starIcon} size={16} />1
            </span>
            <span className={css.close}>close</span>
          </div>
        </div>
      </li>
    </ul>
  );
}
