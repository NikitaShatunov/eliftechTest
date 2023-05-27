import { useAppDispatch } from "../redux/redux";
import { addItem } from "../redux/slices/cartSlice";
interface Item {
  imageUrl: string;
  title: string;
  price: number;
  id: string;
  shop: string
}
const ItemCard = ({id, imageUrl, title, price, shop }: Item) => {
  const props = {id, imageUrl, title, price, shop, count:1}
  const dispatch = useAppDispatch()
  const onClickAddItem = (props: Item) => {
    dispatch(addItem(props))
  }
  return (
    <div className="itemCardBlock">
      <div>
        <img className="itemCardBlock__photo" src={imageUrl} alt="photo" />
        <div className="itemCardBlock__title">{title}</div>
        <div className="itemCardBlock__price">{price}₴</div>
        <img onClick={() => onClickAddItem(props)} className="add" src="/img/addsvg.svg" alt="add" />
      </div>
    </div>
  );
};

export default ItemCard;
