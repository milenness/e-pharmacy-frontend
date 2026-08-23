import css from "./MedicineStores.module.css";
import { FaStar } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";

export default function MedicineStores() {
    return (
      <section className={css.section}>
        <div className="container">
          <h2 className={css.title}>Your Nearest Medicine Store</h2>
          <p className={css.text}>
            Search for Medicine, Filter by your location
          </p>
          <ul className={css.list}>
            <li className={css.item}>
              <div className={css.wrapper}>
                <h3 className={css.cardTitle}>Tremblay and Schiller</h3>
                <span className={css.star}>
                  <FaStar className={css.starIcon} size={16} />2
                </span>
                <span className={css.open}>open</span>
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
            </li>
            <li className={css.item}>
              <div className={css.wrapper}>
                <h3 className={css.cardTitle}>Williamson-Gerlach</h3>
                <span className={css.star}>
                  <FaStar className={css.starIcon} size={16} />1
                </span>
                <span className={css.close}>close</span>
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
            </li>
            <li className={css.item}>
              <div className={css.wrapper}>
                <h3 className={css.cardTitle}>Fahey-Batz</h3>
                <span className={css.star}>
                  <FaStar className={css.starIcon} size={16} />1
                </span>
                <span className={css.close}>close</span>
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
            </li>

            <li className={css.item}>
              <div className={css.wrapper}>
                <h3 className={css.cardTitle}>Fahey-Batz</h3>
                <span className={css.star}>
                  <FaStar className={css.starIcon} size={16} />1
                </span>
                <span className={css.close}>close</span>
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
            </li>
          </ul>
        </div>
      </section>
    );
}