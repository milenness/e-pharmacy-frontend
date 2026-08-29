import css from "./ProductCatalog.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ProductCatalog() {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <Image
          className={css.img}
          src="/Catalog/Default.jpg"
          alt=""
          width={335}
          height={300}
          priority
        />
        <div className={css.wrapper}>
          <div className={css.titleCost}>
            <h2 className={css.name}>Antimonium</h2>
            <span className={css.cost}>৳24</span>
          </div>
          <p className={css.text}>Structural (Fabrication)</p>
          <div className={css.buttonsWrapper}>
            <button type="button" className={css.cartButton}>
              Add to cart
            </button>
            <Link href={`/medicine/1`} className={css.detailsLink}>
              Details
            </Link>
          </div>
        </div>
      </li>
      <li className={css.item}>
        <Image
          className={css.img}
          src="/Catalog/Default.jpg"
          alt=""
          width={335}
          height={300}
          priority
        />
        <div className={css.wrapper}>
          <div className={css.titleCost}>
            <h2 className={css.name}>Antimonium</h2>
            <span className={css.cost}>৳24</span>
          </div>
          <p className={css.text}>Structural (Fabrication)</p>
          <div className={css.buttonsWrapper}>
            <button type="button" className={css.cartButton}>
              Add to cart
            </button>
            <Link href={`/medicine/1`} className={css.detailsLink}>
              Details
            </Link>
          </div>
        </div>
      </li>
      <li className={css.item}>
        <Image
          className={css.img}
          src="/Catalog/Default.jpg"
          alt=""
          width={335}
          height={300}
          priority
        />
        <div className={css.wrapper}>
          <div className={css.titleCost}>
            <h2 className={css.name}>Antimonium</h2>
            <span className={css.cost}>৳24</span>
          </div>
          <p className={css.text}>Structural (Fabrication)</p>
          <div className={css.buttonsWrapper}>
            <button type="button" className={css.cartButton}>
              Add to cart
            </button>
            <Link href={`/medicine/1`} className={css.detailsLink}>
              Details
            </Link>
          </div>
        </div>
      </li>
      <li className={css.item}>
        <Image
          className={css.img}
          src="/Catalog/Default.jpg"
          alt=""
          width={335}
          height={300}
          priority
        />
        <div className={css.wrapper}>
          <div className={css.titleCost}>
            <h2 className={css.name}>Antimonium</h2>
            <span className={css.cost}>৳24</span>
          </div>
          <p className={css.text}>Structural (Fabrication)</p>
          <div className={css.buttonsWrapper}>
            <button type="button" className={css.cartButton}>
              Add to cart
            </button>
            <Link href={`/medicine/1`} className={css.detailsLink}>
              Details
            </Link>
          </div>
        </div>
      </li>
      <li className={css.item}>
        <Image
          className={css.img}
          src="/Catalog/Default.jpg"
          alt=""
          width={335}
          height={300}
          priority
        />
        <div className={css.wrapper}>
          <div className={css.titleCost}>
            <h2 className={css.name}>Antimonium</h2>
            <span className={css.cost}>৳24</span>
          </div>
          <p className={css.text}>Structural (Fabrication)</p>
          <div className={css.buttonsWrapper}>
            <button type="button" className={css.cartButton}>
              Add to cart
            </button>
            <Link href={`/medicine/1`} className={css.detailsLink}>
              Details
            </Link>
          </div>
        </div>
      </li>
    </ul>
  );
}
