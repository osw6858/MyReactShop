import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/ProductsType";
import { asyncSetProducts } from "./Thunk";

interface ProductState {
  products: Product[];
  loading: string;
}

const initialState: ProductState = {
  products: [],
  loading: "",
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    //reducers는 동기적으로 관리할때
    // setProducts: (state, action) => {
    //   state.products = action.payload;
    // },
  },
  //extraReducers는 비동기적으로 관리할때
  extraReducers: (builder) => {
    //대기
    builder.addCase(asyncSetProducts.pending, (state) => {
      state.loading = "loading";
    });
    //완료
    builder.addCase(asyncSetProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = "complete";
    });
    //실패
    builder.addCase(asyncSetProducts.rejected, (state) => {
      state.loading = "fail";
    });
  },
});

//export const { setProducts } = ProductSlice.actions;

export { asyncSetProducts };

export default ProductSlice.reducer;
