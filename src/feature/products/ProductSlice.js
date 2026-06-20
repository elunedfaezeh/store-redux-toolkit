import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/config";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await api.get("/products");
    return response.data;
  }
);
const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
export { fetchProducts };
