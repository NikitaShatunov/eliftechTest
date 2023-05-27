import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//get data from different stores
export const fetchData = createAsyncThunk('data/fetchData', async (shopName: string) => {
  const { data } = await axios.get(`https://6470e8b73de51400f7251979.mockapi.io/shops?shop=${shopName}`)
  return data;
});

type Data = {
    shop: string;
    id: string;
    imageUrl: string;
    title: string;
    price: number
};

interface DataState {
    data: Data[];
    loading: boolean;
    error: null | string;
}
const initialState: DataState = {
    data: [],
    loading: false,
    error: null,
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setItems(state, action) {
      state.data = action.payload;
  },
  resetItems(state) {
    state.data = []
},
 removeItems(state, action) {
 state.data = []
 }
},
  
extraReducers: (builder) => {
    builder
    .addCase(fetchData.pending, (state: DataState) => {
    state.loading = true;
    })
    .addCase(fetchData.fulfilled, (state: DataState, action) => {
    state.data = action.payload;
    state.loading = false;
    state.error = null;
    })
    .addCase(fetchData.rejected, (state: DataState, action) => {
    state.loading = false;
    state.error = action.error.message || 'Error fetching data';
    });
    },
});

export const { setItems, resetItems, removeItems } = dataSlice.actions;
export default dataSlice.reducer;