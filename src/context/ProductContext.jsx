import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const ProductContext = createContext();

const ProdcutsProvider = ({ children }) => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/products");
        setProduct(response.data);
        // console.log(response)
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

const useProductDetails = (id) => {
  const products = useContext(ProductContext);
  const result = products.find((product) => product.id == id);
  return result
};

export default ProdcutsProvider;
export { useProducts,useProductDetails };
