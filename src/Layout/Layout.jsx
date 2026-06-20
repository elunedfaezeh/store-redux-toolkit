import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaShoppingBasket } from "react-icons/fa";
// import { useCart } from "../context/CartContext";
import styles from "./Layout.module.css"
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const state= useSelector((store)=> store.cart)
  return (
    <>
     <div className={styles.layout}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>🍋</Link>
        <div className={styles.headerRight}>
          <Link to="/products" className={styles.productsLink}>Products</Link>
          <Link to="/checkout" className={styles.cartIcon}>
            <FaShoppingBasket />
            {!!state?.itemCounter && <span className={styles.badge}>{state.itemCounter}</span>}
          </Link>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>© 2026 🍋. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default Layout;
