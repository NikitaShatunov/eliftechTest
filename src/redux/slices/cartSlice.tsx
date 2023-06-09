import { createSlice } from "@reduxjs/toolkit";
import { calcTotalCount, calcTotalPrice } from "../../utils/getCartTotalPrice";



export type Data = {
    shop: string;
    id: string;
    imageUrl: string;
    title: string;
    price: number;
    count: number;
};

export interface InitialState {
    item: Data[];
    totalPrice: number;
    totalCount: number;
}


const getJSONcartStorage = () => {
    const dataItem = localStorage.getItem('cartItems')
    const item = dataItem ? JSON.parse(dataItem) : []
    const totalCount = calcTotalCount(item)
    const totalPrice = calcTotalPrice(item)
    return {
        item,
        totalCount,
        totalPrice,
    }
}

const { item, totalCount, totalPrice } = getJSONcartStorage()

const initialState: InitialState = {
    item: item,
    totalPrice: totalPrice,
    totalCount: totalCount,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            //if item is already in cart count++
            const sorteditems = state.item.find(obj =>  obj.id === action.payload.id &&  obj.title === action.payload.title)
            if(sorteditems) {
                sorteditems.count++
            }
            else {
                state.item.push({...action.payload});
            }
            state.totalPrice = state.item.reduce((sum, item) => sum + item.price * item.count, 0
            )
            state.totalCount = state.item.reduce((sum, item) => sum + item.count, 0)
        },
        plusItem: (state, action) => {
            const sorteditems = state.item.find(obj => obj.id === action.payload.id && obj.title === action.payload.title)
            if(sorteditems) {
                sorteditems.count++
            }
            state.totalPrice = state.item.reduce((sum, item) => sum + item.price * item.count, 0
            )
            state.totalCount = state.item.reduce((sum, item) => sum + item.count, 0)
        },
        minusItem: (state, action) => {
            const sorteditems = state.item.find(obj => obj.id === action.payload.id && obj.title === action.payload.title)
            if(sorteditems) {
                sorteditems.count--
            }
            state.totalPrice = state.item.reduce((sum, item) => sum + item.price * item.count, 0
            )
            state.totalCount = state.item.reduce((sum, item) => sum + item.count, 0)
        },
        removeItem: (state, action) => {
            state.item = state.item.filter(obj => obj.id !== action.payload.id || obj.title !== action.payload.title)
            state.totalPrice = state.item.reduce((sum, item) => sum + item.price * item.count, 0
            )
            state.totalCount = state.item.reduce((sum, item) => sum + item.count, 0)
        },
        clearCart: (state) => {
            state.item = [];
            state.totalCount = 0;
            state.totalPrice = 0;
        }
    }
})

export const { addItem, plusItem, minusItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

