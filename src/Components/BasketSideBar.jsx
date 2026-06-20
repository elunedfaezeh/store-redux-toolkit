import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { ImAttachment } from "react-icons/im";
import { LuLoader } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import styles from './BasketSideBar.module.css'
import { useDispatch } from "react-redux";
import { checkOut } from "../feature/cart/CartSlice";

const BasketSideBar = ({ state }) => {
  const dispatch = useDispatch()
  const getStatusIcon = () => {
    if (state.itemCounter === 0) return <LuLoader className={styles.statusIcon} />;
    return <FaCheckCircle className={styles.statusIcon} />;
  };

  const getStatusText = () => {
    if (state.itemCounter === 0) return "Empty";
    return "Ready to checkout";
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h3 className={styles.title}>Order Summary</h3>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.iconWrapper}>
            <RiMoneyDollarCircleLine />
          </div>
          <div className={styles.infoContent}>
            <p>Total Amount</p>
            <span className={styles.price}>{state.total} $</span>
          </div>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.iconWrapper}>
            <ImAttachment />
          </div>
          <div className={styles.infoContent}>
            <p>Total Items</p>
            <span className={styles.quantity}>{state.itemCounter}</span>
          </div>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.iconWrapper}>
            {getStatusIcon()}
          </div>
          <div className={styles.infoContent}>
            <p>Order Status</p>
            <span className={styles.status}>{getStatusText()}</span>
          </div>
        </div>

        <button 
          className={styles.checkoutBtn}
          onClick={() => dispatch(checkOut())}
          disabled={state.itemCounter === 0}
        >
          {state.itemCounter === 0 ? "Add items to cart" : "Checkout →"}
        </button>
      </div>
    </div>
  );
};

export default BasketSideBar;