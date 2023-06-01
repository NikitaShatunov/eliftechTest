import { Link, useLocation } from "react-router-dom";
import * as React from "react";
import { useAppSelector } from "../redux/redux";

const Header = () => {
  const location = useLocation();
  const items = useAppSelector((state) => state.cart.item);
  React.useEffect(() => {
    const json = JSON.stringify(items);
    localStorage.setItem("cartItems", json);
  }, [items, location]);
  return (
    <header>
      <div className="leftPartHeader">
        <Link to="/">
          <div className="logo">ELIFTECH</div>
        </Link>
        <Link
          className={`shopLink ${location.pathname === "/" && "active"}`}
          to="/"
        >
          Shop
        </Link>
        <Link
          className={`cartLink  ${
            location.pathname === "/coupons" && "active"
          }`}
          to="/coupons"
        >
          Coupons
        </Link>
      </div>
      <div>
        <Link
          className={`cartLink  ${location.pathname === "/cart" && "active"}`}
          to="/cart"
        >
          Cart
        </Link>
      </div>
    </header>
  );
};

export default Header;
