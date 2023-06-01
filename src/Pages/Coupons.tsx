import CouponCard from "../Components/CouponCard";

const Coupons = () => {

  const props = [
    {
      imageUrl:
        "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
      title: "Пепероні Фреш із перцем",
      price: 100,
      shop: "Піца Дей",
      discont: 15,
    },
    {
      shop: "Суші Вей",
      discont: 25,
      imageUrl:
        "https://sushiwok.ua/img/68c3343bcad817a00e4251083e544450/350x350",
      title: "Набір Травня",
      price: 499,
    },
    {
      shop: "Пузата хата",
      imageUrl:
        "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/tpvghaln5agqj9ucvqia",
      title: "Биточок з курки в сирі",
      price: 98,
      discont: 10,
    },
  ];

  return (
    <div className="couponPage"> <h3>Ви можете обрати будь-який купон:</h3>
    <div className="couponPageBlock">
      {props.map((obj, id) => (
        <CouponCard key={id} {...obj} />
      ))}
    </div>
    </div>
  );
};

export default Coupons;
