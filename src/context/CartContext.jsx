import React, { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../helpers/helper";

const CartContext = createContext();

const initialstate = {
  selectedItems: [],
  itemCounter: 0,
  total: 0,
  checkOut: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkOut: false,
      };

    case "REMOVE_PRODUCT":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id,
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumProducts(newSelectedItems),
        checkOut: false,
      };

    case "INCREASE":
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.selectedItems[increaseIndex].quantity++;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };

    case "DECREASE":
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.selectedItems[decreaseIndex].quantity--;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemCounter: 0,
        total: 0,
        checkOut: true,
      };

    default:
      throw new error("invalid data");
  }
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
