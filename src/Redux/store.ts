import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./ThemeSlice";
import ProductSlice from "./ProductSlice";
import thunk from "redux-thunk";
import CartSlice from "./CartSlice";
//import saveToLocalStorageMiddleware from "../middleWare/TestMiddleWare";

const store = configureStore({
  reducer: { theme: ThemeSlice, product: ProductSlice, cartList: CartSlice },
  middleware: [thunk /*, TestMiddleWare*/],
});

export default store;
//각각의 Slice를 모아 configureStore()함수의 인자에 객체로 전달
//하나의 큰 store을 구성
//만들어진 store을 Provider를 통해 app컴포넌트를 감싸 state공급
