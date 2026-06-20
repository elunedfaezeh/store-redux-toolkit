import React from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { BiCategory } from "react-icons/bi";
import { IoPricetagOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./DetailPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../feature/products/ProductSlice";
import { useEffect } from "react";

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productDetail = useSelector((store) =>
    store.product.products.find((i) => i.id == +id),
  );

  if (!productDetail) return <Loader />;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.divImg}>
          <img
            className={styles.img}
            src={productDetail.image}
            alt={productDetail.title}
          />
        </div>
        <div className={styles.seccontainer}>
          <h3 className={styles.title}>{productDetail.title}</h3>
          <p className={styles.description}>{productDetail.description}</p>
          <div className={styles.detailsRow}>
            <div className={styles.infoGroup}>
              <span className={styles.category}>
                <BiCategory />
                <p>{productDetail.category}</p>
              </span>
              <span className={styles.price}>
                <IoPricetagOutline />
                <p>{productDetail.price} $</p>
              </span>
            </div>
            <Link to="/products" className={styles.backLink}>
              <IoIosArrowBack />
              <span>Back to store</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
