import ModalWindow from "../Components/modalWindow";
import { useAppDispatch, useAppSelector } from "../redux/redux";
import { clearCoupon } from "../redux/slices/cartCouponSlice";
import {
  Data,
  clearCart,
  minusItem,
  plusItem,
  removeItem,
} from "../redux/slices/cartSlice";
import React from "react";
const Cart = () => {
  const item = useAppSelector((state) => state.cart.item);
  const coupon = useAppSelector((state) => state.coupon.item);
  //ref to modal window
  const ref = React.useRef<HTMLDivElement>(null);
  //ref to button
  const ref2 = React.useRef<HTMLDivElement>(null);
  const totalCount = useAppSelector((state) => state.cart.totalCount);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const [isModalShown, setIsModalShown] = React.useState(false);
  const dispatch = useAppDispatch();
  const onClickPlus = (obj: Data) => {
    dispatch(plusItem(obj));
  };
  const onClickMinus = (obj: Data) => {
    dispatch(minusItem(obj));
  };
  const onClickRemove = (obj: Data) => {
    if (window.confirm("Видалити товар?")) dispatch(removeItem(obj));
  };
  const onClickRemoveCoupon = () => {
    if (window.confirm("Видалити товар?")) dispatch(clearCoupon());
  };
  const onClickClearCart = () => {
    if (window.confirm("Очистити кошик?")) {
      dispatch(clearCart());
      dispatch(clearCoupon());
    }
  };
  React.useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      let path = event.composedPath().includes(ref.current as Node);
      let path2 = event.composedPath().includes(ref2.current as Node);
      if (!path && !path2) {
        setIsModalShown(false);
      }
    };
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, []);

  return (
    <div>
      {isModalShown && (
        <div className="modal__wrapper" ref={ref}>
          <ModalWindow totalPrice={totalPrice} />
        </div>
      )}
      <div className="container">
        {item.length > 0 || Boolean(coupon.title) ? (
          <>
            {" "}
            <img
              onClick={() => onClickClearCart()}
              className="trashCart"
              src="/img/trash.svg"
              alt="trash"
            />{" "}
            <div className="header">
              <div>Товар</div>
              <div>Назва</div>
              <div>Кількість</div>
              <div>Ціна</div>
              <div>Видалити</div>
            </div>
            <div className="items">
              {item.map((obj) => (
                <div key={obj.title} className="main">
                  <div className="containerimg">
                    <img className="imgInCart" src={obj.imageUrl} alt="img" />
                  </div>
                  <div className="name">{obj.title}</div>
                  <div className="count">
                    <button
                      disabled={obj.count === 1}
                      onClick={() => onClickMinus(obj)}
                      className="minus"
                    >
                      -
                    </button>
                    <div className="input">{obj.count}</div>
                    <button onClick={() => onClickPlus(obj)} className="plus">
                      +
                    </button>
                  </div>
                  <div>{obj.price * obj.count}₴</div>
                  <div className="forSvg">
                    {" "}
                    <svg
                      onClick={() => onClickRemove(obj)}
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Layer_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 50 50"
                      enableBackground="new 0 0 50 50"
                      xmlSpace="preserve"
                    >
                      <path
                        fill="#231F20"
                        d="M9.016,40.837c0.195,0.195,0.451,0.292,0.707,0.292c0.256,0,0.512-0.098,0.708-0.293l14.292-14.309  l14.292,14.309c0.195,0.196,0.451,0.293,0.708,0.293c0.256,0,0.512-0.098,0.707-0.292c0.391-0.39,0.391-1.023,0.001-1.414  L26.153,25.129L40.43,10.836c0.39-0.391,0.39-1.024-0.001-1.414c-0.392-0.391-1.024-0.391-1.414,0.001L24.722,23.732L10.43,9.423  c-0.391-0.391-1.024-0.391-1.414-0.001c-0.391,0.39-0.391,1.023-0.001,1.414l14.276,14.293L9.015,39.423  C8.625,39.813,8.625,40.447,9.016,40.837z"
                      />
                    </svg>
                  </div>
                </div>
              ))}
              {Boolean(coupon.title) && (
                <div key={coupon.title} className="main">
                  <div className="containerimg">
                    <img
                      className="imgInCart"
                      src={coupon.imageUrl}
                      alt="img"
                    />
                  </div>
                  <div className="name">{coupon.title}</div>
                  <div className="count">
                    <img src="/img/coupon.png" alt="coupon" /> 1
                  </div>
                  <div className="price">
                    <p style={{ textDecoration: "line-through", marginTop: 0 }}>
                      {coupon.price}₴
                    </p>{" "}
                    {coupon.price -
                      Math.trunc((coupon.price * coupon.discont) / 100)}
                    ₴
                  </div>
                  <div className="forSvg">
                    {" "}
                    <svg
                      onClick={() => onClickRemoveCoupon()}
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Layer_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 50 50"
                      enableBackground="new 0 0 50 50"
                      xmlSpace="preserve"
                    >
                      <path
                        fill="#231F20"
                        d="M9.016,40.837c0.195,0.195,0.451,0.292,0.707,0.292c0.256,0,0.512-0.098,0.708-0.293l14.292-14.309  l14.292,14.309c0.195,0.196,0.451,0.293,0.708,0.293c0.256,0,0.512-0.098,0.707-0.292c0.391-0.39,0.391-1.023,0.001-1.414  L26.153,25.129L40.43,10.836c0.39-0.391,0.39-1.024-0.001-1.414c-0.392-0.391-1.024-0.391-1.414,0.001L24.722,23.732L10.43,9.423  c-0.391-0.391-1.024-0.391-1.414-0.001c-0.391,0.39-0.391,1.023-0.001,1.414l14.276,14.293L9.015,39.423  C8.625,39.813,8.625,40.447,9.016,40.837z"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className="footerCart">
              <h3>
                Всього: {+totalCount + (Boolean(coupon.title) ? 1 : 0)} товарів
                на{" "}
                {+totalPrice +
                  (Boolean(coupon.title)
                    ? coupon.price -
                      Math.trunc((coupon.price * coupon.discont) / 100)
                    : 0)}
                ₴
              </h3>
              <div
                ref={ref2}
                onClick={() => setIsModalShown(!isModalShown)}
                className="orderButton"
              >
                Замовити
              </div>
            </div>
          </>
        ) : (
          <h2>Кошик порожній.</h2>
        )}
      </div>
    </div>
  );
};

export default Cart;
