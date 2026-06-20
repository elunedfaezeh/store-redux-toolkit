import Layout from "./Layout/Layout";

import { Navigate, Route, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import DetailsPage from "./Pages/DetailsPage";
import Checkout from "./Pages/Checkout";
import NotFound from "./Pages/NotFound";
// import ProductsProvider from "./context/ProductContext";
// import CartProvider from "./context/CartContext";
const App = () => {
  return (
    // <CartProvider>
    //   <ProductsProvider>
        <Layout>
          <Routes>
            <Route
              index
              path="/"
              element={<Navigate to="/products" replace />}
            />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Layout>
    //   </ProductsProvider>
    // </CartProvider>
  );
};

export default App;
