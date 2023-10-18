import { useState, useEffect } from "react";
import ProductsList from "../../components/ProductsList/ProductsList";
import { getAllProducts } from "../../services/API/products";
import styles from "./productsPage.module.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsAll = await getAllProducts();
        console.log(productsAll);
        setProducts(productsAll.data);
      } catch (error) {
        console.log(error.name);
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Product page</h1>
        <ProductsList products={products} className={styles.list} />
      </div>
    </section>
  );
};

export default ProductsPage;
