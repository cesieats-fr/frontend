import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { orderAPI } from '../../api';
// import { IItem, IMenu } from 'cesieats-service-types/src/item';
// import { IRestaurant } from 'cesieats-service-types/src/restaurant';
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
    // orderCart: IOrderCart;
    orders: IOrder[];
}

const initialState: IOrderState = {
    // orderCart: {} as IOrderCart,
    orders: [] as IOrder[],
};

export const getAllClientOrders = createAsyncThunk('order/getAllClientOrders', async () => {
    const response = await orderAPI.getAllClientOrders();
    return response.data;
});

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        // addItem: (state, payload) => {
        //     // Update the state based on the action
        //     const item: IItem = payload.payload;
        //     if(state.orderCart.restaurant !== item.idRestaurant) {
        //         state.orderCart = {} as IOrderCart;
        //     }
        //     if(state.orderCart.items.find(i => i.item.title === item.title)) {
        //         state.orderCart.items.push({
        //             item,
        //             quantity: 1
        //         });
        //     }
        // },
        // resetCart: (state) => {
        //     state.orderCart = {} as IOrderCart;
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllClientOrders.fulfilled, (state, { payload }) => {
            state.orders = payload;
        });
    }
});

export default orderSlice.reducer;
