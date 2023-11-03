import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const asyncSetProducts = createAsyncThunk(
  "ProductSilce/setProduct", //액션타입
  async () => {
    //전체 상품 불러옴
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

export { asyncSetProducts };
