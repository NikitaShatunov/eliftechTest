import { createSlice } from "@reduxjs/toolkit";
import { Data } from "./cartSlice";
import { Props } from "../../Components/CouponCard";

interface InitialState {
  item: Props;
}

const initialState = {
  item: {
    imageUrl: "",
    title: "",
    price: 0,
    shop: "",
    discont: 0,
  },
};

const cartCouponSlice = createSlice({
  name: "coupons",
  initialState,
  reducers: {
    addCoupon: (state, action) => {
      state.item.title === action.payload.title
        ? (state.item = {
            imageUrl: "",
            title: "",
            price: 0,
            shop: "",
            discont: 0,
          })
        : state.item = { ...action.payload };
      
    },
    clearCoupon: (state) => {
      state.item = { imageUrl: "", title: "", price: 0, shop: "", discont: 0 };
    },
  },
});

export const { addCoupon, clearCoupon } = cartCouponSlice.actions;

export default cartCouponSlice.reducer;
