import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import styles from "./ProductPage.module.css";
import { createQueryObject, searchProduct } from "../helpers/helper";
import { filterProducts } from "../helpers/helper";
import { useSearchParams } from "react-router-dom";
import { getInitialQuery } from "../helpers/helper";
import SearchBox from "../Components/searchBox";
import SideBar from "../Components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../feature/products/ProductSlice";
const ProductPage = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.product);

  console.log(products);

  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchPrams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setDisplayed(products);

    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchPrams(query);
    setSearch(query.search || "");
    let finalProducts = searchProduct(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {loading && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <SideBar query={query} setQuery={setQuery} />
      </div>
    </>
  );
};

export default ProductPage;
