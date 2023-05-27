import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    shopName: "Піца Дей",
}

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        setShopName(state, action) {
            state.shopName = action.payload;
        },
    }
})

export const { setShopName } = shopSlice.actions;

export default shopSlice.reducer;