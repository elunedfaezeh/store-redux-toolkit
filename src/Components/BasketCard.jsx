import React from "react";
import { shortenText } from "../helpers/helper";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import styles from './BasketCard.module.css'
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, removeItem } from "../feature/cart/CartSlice";

const BasketCard = ({ data }) => {
  const { image, title, quantity } = data;
  const dispatch= useDispatch()

  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={image} alt={title} />
      </div>
      
      <p className={styles.title}>{shortenText(data.title)}</p>
      
      <div className={styles.quantityControl}>
        {quantity === 1 ? (
          <button 
            className={`${styles.qtyBtn} ${styles.deleteBtn}`}
            onClick={() => dispatch(removeItem(data))}
          >
            <MdOutlineDelete />
          </button>
        ) : (
          <button 
            className={styles.qtyBtn}
            onClick={() => dispatch(decrease(data))}
          >
            <AiOutlineMinus />
          </button>
        )}
        
        <span className={styles.quantity}>{quantity}</span>
        
        <button 
          className={styles.qtyBtn}
          onClick={() => dispatch(increase(data))}
        >
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default BasketCard;