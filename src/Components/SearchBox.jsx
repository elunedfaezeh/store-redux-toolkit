import React from "react";
import { IoIosSearch } from "react-icons/io";
import { createQueryObject, searchProduct } from "../helpers/helper";
import styles from "./SearchBox.module.css";

const SearchBox = ({ search, setSearch, setQuery }) => {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={search}
        placeholder="search what you want"
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <IoIosSearch />
      </button>
    </div>
  );
};

export default SearchBox;
