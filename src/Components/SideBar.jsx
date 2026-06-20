import React from "react";
import { createQueryObject } from "../helpers/helper";
import { FaTags } from "react-icons/fa";
import styles from "./SideBar.module.css";
import { categories } from "../../public/Constant/constant";

const SideBar = ({ setQuery, query }) => {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText;
    if (tagName !== "LI") return;
    console.log(category);
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className={styles.SideBar}>
      <div>
        <FaTags />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
       {categories.map((item)=><li className={item.type === query.category ? styles.selected : null} key={item.id}>{item.type}</li>)}
      </ul>
    </div>
  );
};

export default SideBar;
