import css from "./DetailInfo.module.css";
import Image from "next/image";

export default function DetailInfo() {
  return (
    <div className={css.detailWrapper}>
      <div className={css.imgCartWrapper}>
        <Image
          className={css.img}
          src="/Catalog/Default.jpg"
          alt=""
          width={335}
          height={337}
          priority
        />
        <div className={css.cartWrapper}>
          <div className={css.titleCostWrapper}>
            <h2 className={css.title}>Moringa</h2>
            <span>৳470</span>
          </div>
          <div className={css.buttonsAdd}>
            <button type="button">+</button>
            <span>1</span>
            <button type="button">-</button>
          </div>
        </div>
      </div>
      <div className={css.deskWrapper}>
        <ul className={css.buttonsWrapper}>
          <li>
            <button type="button">Description</button>
          </li>
          <li>
            <button type="button">Reviews</button>
          </li>
        </ul>
        <p className={css.mainDesk}>
          Although it&apos;s typically considered safe, excessive consumption
          can lead to side effects. Therefore, it&apos;s recommended to consult
          a healthcare professional before using moringa, especially if
          you&apos;re pregnant, nursing, or taking other medications. This
          balanced approach allows for the benefits of moringa while recognizing
          the importance of proper usage and caution.
        </p>
        <ul>
          <li>
            <span className={css.accent}>Medicinal Uses:</span>
            <span className={css.accent}> Antioxidant Properties:</span> Moringa
            is packed with antioxidants that help fight oxidative stress and
            inflammation in the body.
          </li>
          <li>
            <span className={css.accent}>Anti-Diabetic Effects:</span> Some
            studies have shown that moringa leaves might lower blood sugar
            levels, making it a valuable supplement for managing diabetes.
          </li>
          <li>
            <span className={css.accent}>Anti-Diabetic Effects:</span> Some
            studies have shown that moringa leaves might lower blood sugar
            levels, making it a valuable supplement for managing diabetes.
          </li>
          <li>
            <span className={css.accent}>Heart Health:</span> The plant has been
            linked to reduced cholesterol levels, which is vital for heart
            health.
          </li>
          <li>
            <span className={css.accent}>Anti-Cancer Properties:</span> Certain
            compounds in moringa, such as niazimicin, have been found to
            suppress the growth of cancer cells in laboratory studies.
          </li>
          <li>
            <span className={css.accent}>Immune Support:</span> With its high
            vitamin C content, moringa can boost the immune system.
          </li>
          <li>
            <span className={css.accent}>Digestive Aid:</span> Moringa can help
            in treating digestive disorders due to its anti-inflammatory
            properties.
          </li>
        </ul>
      </div>
    </div>
  );
}
