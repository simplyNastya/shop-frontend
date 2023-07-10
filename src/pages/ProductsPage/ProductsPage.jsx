import ProductsList from "../../components/ProductsList/ProductsList";
import styles from "./productsPage.module.css";

const ProductsPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Product page</h1>
        {/* <ProductsList products={products} className={styles.list} /> */}
      </div>
    </section>
  );
};

export default ProductsPage;
