
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import shop from './slices/shopSlice';
import data from "./slices/dataSlice";
import cart from "./slices/cartSlice";
import coupon from "./slices/cartCouponSlice";
const rootReducer = combineReducers({
  shop,
  data,
  cart,
  coupon
});
export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;