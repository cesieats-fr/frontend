import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { orderAPI } from '../../api';
import { IOrder } from 'cesieats-service-types/src/order';

// interface IOrderCart {
//     restaurant: IRestaurant;
//     items: {
//         item: IItem;
//         quantity: number;
//     }[];
//     menus: {
//         menu: IMenu;
//         quantity: number;
//     }[];
// }

interface IOrderState {
    orders: IOrder[];
}

const initialState: IOrderState = {
    orders: [] as IOrder[],
};

export const getAllClientOrders = createAsyncThunk(
  "order/getAllClientOrders",
  async () => {
    const response = await orderAPI.getAllClientOrders();
    return response.data;
  }
);

export const getAllRestaurantOrders = createAsyncThunk('order/getAllRestaurantOrders', async () => {
    const response = await orderAPI.getAllRestaurantOrders();
    return response.data;
});

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getAllClientOrders.fulfilled, (state, { payload }) => {
            state.orders = payload;
        });
        builder.addCase(getAllRestaurantOrders.fulfilled, (state, { payload }) => {
            state.orders = payload;
        });
    }
});

export default orderSlice.reducer;
