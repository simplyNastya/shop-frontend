import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isUserLogin } from "../../redux/auth/auth-selectors";
import { logout } from "../../redux/auth/auth-operations";
import {
  BsFillBasket3Fill,
  BsBrightnessHigh,
  // BsFillBrightnessHighFill,
  BsToggleOff,
  // BsToggleOn,
  BsMoon,
  // BsMoonFill,
  BsHeart,
  BsFillPersonFill,
} from "react-icons/bs";
import styles from "./navbar.module.css";

// import LoginPage from "../../pages/LoginPage/LoginPage";
// import RegisterPage from "../../pages/RegisterPage/RegisterPage";

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={styles.headerSection}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <NavLink to="/" className={styles.logoText}>
            E-shop
          </NavLink>
          <div className={styles.themeContainer}>
            <button className={styles.themeBtn}>
              <BsBrightnessHigh className={styles.themeSvg} />
            </button>
            <button className={styles.themeBtn}>
              <BsToggleOff
                className={`${styles.themeSvg} ${styles.toggleSvg}`}
              />
            </button>
            {/* <button className={styles.themeBtn}>
              <BsToggleOn
                className={`${styles.themeSvg} ${styles.toggleSvg}`}
              />
            </button> */}
            <button className={styles.themeBtn}>
              <BsMoon className={styles.themeSvg} />
            </button>
          </div>
          <div className={styles.langContainer}>
            <button className={styles.langBtn}>UKR</button>
            <p className={styles.langMid}>|</p>
            <button className={styles.langBtn}>EN</button>
          </div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <NavLink
                to="/products"
                className={`${styles.link} ${styles.profile}`}
              >
                Products
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="favorites" className={styles.link}>
                <BsHeart />
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="basket" className={styles.link}>
                <BsFillBasket3Fill />
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to="profile"
                className={`${styles.link} ${styles.profile}`}
              >
                <BsFillPersonFill />
                <p>Your profile</p>
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to="add-product"
                className={`${styles.link} ${styles.addProdBtn}`}
              >
                Add notice
              </NavLink>
            </li>
          </ul>
          {!isLogin && (
            <NavLink to="login" className={`${styles.link}`}>
              LogIn
            </NavLink>
          )}
          {isLogin && (
            <button onClick={onLogout} className={styles.btn}>
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
