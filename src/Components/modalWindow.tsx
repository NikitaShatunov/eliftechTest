import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/redux";
import { clearCart } from "../redux/slices/cartSlice";
import axios from "axios";
type totalPrice = { totalPrice: number };
const ModalWindow = ({ totalPrice }: totalPrice) => {
  const [adress, setAdress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [name, setName] = React.useState("");
  const [isWarningShow, setIsWarningShow] = React.useState(false);
  const [isOrderDone, setIsOrderDone] = React.useState(false);
  const item = useAppSelector(state => state.cart.item)
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
 
  React.useEffect(() => {
    setIsOrderDone(false)
  },[])
  const onClickSubmit = () => {
    if (Boolean(adress) && Boolean(email) && Boolean(phone) && Boolean(name)) {
      setIsWarningShow(false);
      const newOrder = {
        email,
        phone,
        adress,
        name,
        item,
      };
      //set in db a new order
      axios.post("https://6470e8b73de51400f7251979.mockapi.io/order", newOrder)
        .then((order) => {
            setIsOrderDone(true)
            setTimeout(() => navigate("/"), 2000)
          dispatch(clearCart());
        })
        .catch((error) => {});
    } else {
      setIsWarningShow(true);
    }
  };
  return (
    <div className="modal__container">
      {!isOrderDone ? (
        <>
          {" "}
          <h2>Замовлення</h2>
          <div className="modal__container__map"></div>
          <div className="label">
            <div>
              Adress: <br />
              <input onChange={(e) => setAdress(e.target.value)} type="text" />
            </div>
          </div>
          <div className="label">
            <div>
              Email: <br />
              <input onChange={(e) => setEmail(e.target.value)} type="text" />
            </div>
          </div>
          <div className="label">
            <div>
              Phone: <br />
              <input onChange={(e) => setPhone(e.target.value)} type="text" />
            </div>
          </div>
          <div className="label">
            <div>
              Name: <br />
              <input onChange={(e) => setName(e.target.value)} type="text" />
            </div>
          </div>
          {isWarningShow && <div className="warning">Заповніть всі поля!</div>}
          <div className="footer">
            <div>Всього: {totalPrice} ₴</div>
           <button onClick={() => onClickSubmit()} className="modal__container__button" >Підвердити</button>
          </div>
        </>
      ) : (
        <>
        <h2 className="afterOrderDone">Дякуємо за замовлення! Чекайте на курьера</h2>
        </>
      )}
    </div>
  );
};

export default ModalWindow;
