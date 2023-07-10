import { BsFillBasket3Fill, BsHeart } from "react-icons/bs";

import styles from "./productsList.module.css";
import { Link } from "react-router-dom";

const ProductsList = ({ products }) => {
  const elements = products.map(
    ({
      _id,
      category,
      created_at,
      price,
      status,
      title,
      subtitle,
      vendor_id,
    }) => (
      <li key={_id} className={styles.item}>
        <Link to={`/products/${_id}`}>
          {/* <img href="" src="" className={styles.img} /> */}
          <div className={styles.img}></div>
        </Link>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <div className={styles.categoryWrapper}>
          <p className={styles.category}>{category}</p>
        </div>
        {status && (
          <div className={styles.statusWrapper}>
            <p className={styles.status}>{status}</p>
          </div>
        )}
        <p className={styles.price}>Price: {price} UAH</p>
        <div className={styles.styleWrapper}>
          <div className={styles.vendorWrapper}>
            <a
              href={vendor_id}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.vendor}
            >
              <span className={styles.fields}>Saler:</span> {vendor_id.name}
            </a>
            <p> +{vendor_id.phone}</p>
            <p> {vendor_id.email}</p>
          </div>
          <ul className={styles.btnWrapper}>
            <li>
              <button type="button" className={styles.btn}>
                <BsFillBasket3Fill />
              </button>
            </li>
            <li>
              <button type="button" className={styles.btn}>
                <BsHeart />
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.infoWrapper}>
          <p className={styles.info}>{vendor_id.location}</p>
          <p className={styles.info}>
            {created_at.slice(0, 10).replace(/-/g, "/")}
          </p>
        </div>
      </li>
    )
  );
  return <ul className={styles.list}>{elements}</ul>;
};

export default ProductsList;
