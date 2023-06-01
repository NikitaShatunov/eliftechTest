import { useAppDispatch, useAppSelector } from "../redux/redux";
import { addCoupon } from "../redux/slices/cartCouponSlice";
import * as React from 'react';

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
    React.useEffect(() => {

    },[coupon])
    const onClickCoupon = () => {
        dispatch(addCoupon(props))
    }
    const {imageUrl, title, price, shop, discont} = props
    return ( <>
<div onClick = {onClickCoupon} className={`coupon__wrapper ${Boolean(coupon.title) && coupon.title !== title ? 'unactive' : ''}`}>
    <div>
    <img src={imageUrl} alt="title"/>
    <div className="title">{title}</div>
    <div className="oldPrice">{price}₴   -   {discont}% = <div className="newPrice">{price - Math.trunc(price*discont/100)}₴</div></div>
    </div>
</div>
    </> );
}
 
export default CouponCard;