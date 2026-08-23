import css from "./Features.module.css"
import { IoFlashOutline } from "react-icons/io5";

export default function Features() {
  return (
    <section id="features" className={css.section}>
      <div className="container">
        <ul className={css.list}>
          <li className={css.item}>
            <IoFlashOutline className={css.flash} size={20} />
            Take user orders form online
          </li>
          <li className={css.item}>
            <IoFlashOutline className={css.flash} size={20} />
            Create your shop profile
          </li>
          <li className={css.item}>
            <IoFlashOutline className={css.flash} size={20} />
            Manage your store
          </li>
          <li className={css.item}>
            <IoFlashOutline className={css.flash} size={20} />
            Get more orders
          </li>
          <li className={css.item}>
            <IoFlashOutline className={css.flash} size={20} />
            Storage shed
          </li>
        </ul>
      </div>
    </section>
  );
}