import css from "./CartList.module.css";
import Image from "next/image";
import { CgMathPlus } from "react-icons/cg";
import { HiMiniMinus } from "react-icons/hi2";

export default function CartList() {
  return (
    <ul className={css.cartList}>
      <li className={css.cartItem}>
        <Image
          className={css.img}
          src="/Catalog/Default.jpg"
          alt=""
          width={120}
          height={120}
          priority
        />
        <div className={css.infoWrapper}>
          <div className={css.mainCostInfo}>
            <div className={css.mainInfo}>
              <h3 className={css.medName}>Vitamin C Medicine</h3>
              <p className={css.medDesk}>Antioxidant Aid for Heart Health</p>
            </div>
            <span className={css.cost}>৳ 90.00</span>
          </div>
          <div className={css.btnWrapper}>
            <div className={css.counter}>
              <button type="button" className={css.plusBtn}>
                <CgMathPlus className={css.plusIcon} size={18} />
              </button>
              <span className={css.number}>1</span>
              <button type="button" className={css.minusBtn}>
                <HiMiniMinus className={css.minusIcon} size={18} />
              </button>
            </div>
            <button type="button" className={css.btnRemove}>
              Remove
            </button>
          </div>
        </div>
      </li>

      <li className={css.cartItem}>
        <Image
          className={css.img}
          src="/Catalog/Default.jpg"
          alt=""
          width={120}
          height={120}
          priority
        />
        <div className={css.infoWrapper}>
          <div className={css.mainCostInfo}>
            <div className={css.mainInfo}>
              <h3 className={css.medName}>Stomach Medicine</h3>
              <p className={css.medDesk}>
                Soothes Indigestion, Eases Stomach Pain
              </p>
            </div>
            <span className={css.cost}>৳ 32.00</span>
          </div>
          <div className={css.btnWrapper}>
            <div className={css.counter}>
              <button type="button" className={css.plusBtn}>
                <CgMathPlus className={css.plusIcon} size={18} />
              </button>
              <span className={css.number}>1</span>
              <button type="button" className={css.minusBtn}>
                <HiMiniMinus className={css.minusIcon} size={18} />
              </button>
            </div>
            <button type="button" className={css.btnRemove}>
              Remove
            </button>
          </div>
        </div>
      </li>
    </ul>
  );
}
