import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";

// import styles from './productDetailsPage.module.css'

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const goBack = () => navigate(from);

  return (
    <main>
      <section className={styles.productDetailsSection}>
        <div className={styles.productDetailsContainer}>
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
        </div>
      </section>
    </main>
  );
};

export default ProductDetailsPage;
