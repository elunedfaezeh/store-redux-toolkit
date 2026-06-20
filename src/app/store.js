import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../feature/products/ProductSlice'
import cartReducer from '../feature/cart/CartSlice'

const store = configureStore({
    reducer:{
        product:productReducer,
        cart:cartReducer
    }
})

export default store