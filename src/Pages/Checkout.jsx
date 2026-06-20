import React from "react";
// import { useCart } from "../context/CartContext";
import BasketCard from "../Components/BasketCard";
import BasketSideBar from "../Components/BasketSideBar";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import styles from "./Checkout.module.css";
import { useDispatch, useSelector } from "react-redux";
import store from "../app/store";

const Checkout = () => {
  const state= useSelector((store)=>store.cart)
 

if (!state.itemCounter) {
  return (
    <div className={styles.emptyContainer}>
      <div className={styles.emptyBox}>
        <span>🛒</span>
        <h3>No items in cart</h3>
        <Link to="/products">Browse Products</Link>
      </div>
    </div>
  );
}
  return (
    <div className={styles.container}>
      <BasketSideBar  state={state} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Checkout;
