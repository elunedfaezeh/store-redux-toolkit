import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../../helpers/helper";

const initialState = {
  selectedItems: [],
  itemCounter: 0,
  total: 0,
  checkOut: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((i) => i.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.total = sumPrice(state.selectedItems);
        state.itemCounter = sumQuantity(state.selectedItems);
        state.checkOut = false;
      }
    },
    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (i) => i.id !== action.payload.id,
      );
      state.selectedItems = newSelectedItems;
      state.total = sumPrice(state.selectedItems);
      state.itemCounter = sumQuantity(state.selectedItems);
    },

    increase: (state, action) => {
      const increaseIndex = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id,
      );
      state.selectedItems[increaseIndex].quantity++;
      state.total = sumPrice(state.selectedItems);
      state.itemCounter = sumQuantity(state.selectedItems);
    },
    decrease: (state, action) => {
      const increaseIndex = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id,
      );
      state.selectedItems[increaseIndex].quantity--;
      state.total = sumPrice(state.selectedItems);
      state.itemCounter = sumQuantity(state.selectedItems);
    },
    checkOut: (state) => {
      state.selectedItems = [];
      state.itemCounter = 0;
      state.total = 0;
      state.checkOut = true;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, increase, decrease, checkOut } =
  cartSlice.actions;
