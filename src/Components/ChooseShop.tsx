import { useAppDispatch, useAppSelector } from "../redux/redux";
import { setShopName } from "../redux/slices/shopSlice";
import React from "react";
export type Name = {
  name: string;
};

const ChooseShop = ({ name }: Name) => {
  const shopName = useAppSelector((state) => state.shop.shopName);
  const dispatch = useAppDispatch();

  const handleClick = (name: string) => {
    dispatch(setShopName(name));
  };
  return (
    <div
      onClick={() => handleClick(name)}
      className={`shopBlock ${shopName === name ? "shopBlock__active" : ""}`}
    >
      {name}
    </div>
  );
};

export default ChooseShop;
