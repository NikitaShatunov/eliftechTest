import ChooseShop from "../Components/ChooseShop";
import React from 'react';
import { useAppDispatch, useAppSelector } from "../redux/redux";
import { fetchData } from "../redux/slices/dataSlice";
import ItemCard from "../Components/ItemCard";

const shopsArray = ['Пузата хата', "Піца Дей", "Суші Вей"]

const HomePage = () => {
    const shopName = useAppSelector((state) => state.shop.shopName)
    const data = useAppSelector((state) => state.data.data)
    const item = useAppSelector(state => state.cart.item)
    const [shopButon, setShopButon] = React.useState(['Пузата хата', "Піца Дей", "Суші Вей"])
    const dispatch = useAppDispatch()
    React.useEffect(() => {
      if(item.length)
      setShopButon([item[0].shop]);
        dispatch(fetchData(shopName));
      }, [shopName, item]);
  return (
    <div className="home__wrapper">
      <div className="left__container">
       <div style={{textAlign:'center'}}> <div className="titleOfBlock">Shops:</div>
        <div>{shopsArray.map((name, id): any => shopButon.includes(name) ? <ChooseShop key = {id} name={name}/> : '')}</div></div>
      </div>
      <div className="right__container">
       <div className="cardContainer"> {data.map(item => <ItemCard shop={item.shop} id={item.id} key={item.id} imageUrl={item.imageUrl} title={item.title}  price={item.price}/>)}</div>
      </div>
    </div>
  );
};

export default HomePage;
