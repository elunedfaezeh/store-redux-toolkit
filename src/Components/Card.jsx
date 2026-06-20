import React from "react";
import { BiDetail } from "react-icons/bi";
import { IoBagAddOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { productQuantity, shortenText } from "../helpers/helper";
import styles from "./Card.module.css";
import { color } from "three/tsl";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decrease, increase, removeItem } from "../feature/cart/CartSlice";

const Card = ({ data }) => {
  const { id, title, price, image } = data;
  const state = useSelector((store) => store.cart);
  const dispatch = useDispatch()
  console.log(state)

  const quantity = productQuantity(state, id);

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <div className={styles.buttonContainer}>
          <button>
            <Link to={`/products/${id}`}>
              {" "}
              {/* اصلاح شد */}
              <BiDetail />
            </Link>
          </button>

          {quantity === 1 && (
            <button onClick={() => dispatch(removeItem(data))}>
              <MdOutlineDelete />
            </button>
          )}

          {quantity > 1 && (
            <button onClick={() => dispatch(decrease(data))}>-</button>
          )}

          {!!quantity && <span>{quantity}</span>}

          {quantity === 0 ? (
            <button onClick={() => dispatch(addItem(data))}>
              <IoBagAddOutline />
            </button>
          ) : (
            <button onClick={() => dispatch(increase(data))}>+</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
