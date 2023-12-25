/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketProducts:
    JSON.parse(window.localStorage.getItem("basketProducts")) || [],
  totalQuantity: JSON.parse(window.localStorage.getItem("totalQuantity")) || 0,
  subTotal: JSON.parse(window.localStorage.getItem("subTotal")) || 0,
};
const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const isExist = state.basketProducts.find((pdt) => pdt.id === newItem.id);
      if (!isExist) {
        state.basketProducts.push({
          id: newItem.id,
          price: newItem.price,
          image: newItem.image,
          category: newItem.category,
          quantity: 1,
          totalPrice: newItem.price / 100,
          title: newItem.name || newItem.title,
          priceId: newItem.priceId,
        });
      } else {
        isExist.quantity++;
        isExist.totalPrice += newItem.price / 100;
      }
      state.subTotal = state.basketProducts.reduce(
        (acc, obj) => acc + obj.totalPrice,
        0
      );
      state.totalQuantity = state.basketProducts.reduce(
        (acc, obj) => acc + obj.quantity,
        0
      );
    },
    removeFromCart(state, action) {
      const isExist = state.basketProducts.find(
        (pdt) => pdt.id === action.payload
      );
      if (isExist.quantity === 1) {
        state.basketProducts = state.basketProducts.filter(
          (pdt) => pdt.id !== action.payload
        );
        isExist.totalPrice -= isExist.price;
        state.subTotal -= isExist.price.toFixed(2) / 100;
        state.totalQuantity--;
      } else {
        isExist.quantity--;
        state.totalQuantity--;
        isExist.totalPrice -= isExist.price / 100;
        state.subTotal -= isExist.price.toFixed(2) / 100;
      }
    },
    removeAllCart(state) {
      (state.basketProducts = []),
        (state.totalQuantity = 0),
        (state.subTotal = 0);
    },
  },
});
export const { addToCart, removeFromCart, removeAllCart } = basketSlice.actions;
export default basketSlice.reducer;
