import { createSlice } from "@reduxjs/toolkit";

interface ProductInfo {
  id: number;
  count: number;
}

type ProductList = ProductInfo[];

interface Cart {
  cart: ProductList;
}

const cartItems: string | null = localStorage.getItem("cartItems");

const initialState: Cart = {
  cart: cartItems ? JSON.parse(cartItems) : [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const newId = action.payload;
      const isExist = state.cart.findIndex((e) => e.id === newId);
      if (isExist > -1) {
        state.cart = state.cart.map((item, index) => {
          if (index === isExist) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
        //  console.log(state.cart[0].count);
      } else {
        state.cart.push({ id: newId, count: 1 });
        //console.log(state.cart[0].count);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    removeCart: (state) => {
      state.cart = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    changCount: (state, action) => {
      const { itemId, changeAmount } = action.payload;

      const updatedCart = state.cart.map((item) => {
        if (item.id === itemId) {
          const newCount = item.count + changeAmount;
          return { ...item, count: newCount };
        }
        return item;
      });

      state.cart = updatedCart.filter((item) => item.count > 0);
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
  },
});

export const { addCart, removeCart, changCount } = CartSlice.actions;

export default CartSlice.reducer;

//상품 갯수가 -가 되면 자동으로 지워짐
//갯수 조절 리듀셔를 따로 만들어야할듯
