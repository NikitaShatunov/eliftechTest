import { useAppDispatch, useAppSelector } from "../redux/redux";
import { addCoupon } from "../redux/slices/cartCouponSlice";
import * as React from 'react';
import { setShopName } from "../redux/slices/shopSlice";

export interface Props {
    imageUrl: string;
    title: string;
    price: number;
    shop: string;
    discont: number;
}
const CouponCard = (props: Props) => {
    const dispatch = useAppDispatch()
    const coupon = useAppSelector(state => state.coupon.item)
    const items = useAppSelector(state => state.cart.item)
    React.useEffect(() => {
    },[coupon])
    const onClickCoupon = () => {
        dispatch(addCoupon(props))
        dispatch(setShopName(props.shop))
    }
    const {imageUrl, title, price, shop, discont} = props
    return ( <>
    
<div onClick = {onClickCoupon} className={`coupon__wrapper ${items.length && items[0].shop !== shop ? 'unactive' : ''}`}>
    <div>
    {Boolean(coupon.title) && coupon.title === title ? <img className="selectedCoupon" src="/img/checkmark.svg" alt="checkmark" /> : ''}
    <img src={imageUrl} alt="title"/>
    <div className="title">{title}</div>
    <div className="oldPrice">{price}₴   -   {discont}% = <div className="newPrice">{price - Math.trunc(price*discont/100)}₴</div></div>
    </div>
</div>
    </> );
}
 
export default CouponCard;