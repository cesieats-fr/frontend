import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IItem, IMenu } from 'cesieats-service-types/src/item';
import { orderAPI } from '../../api';
import { IRestaurant } from 'cesieats-service-types/src/restaurant';
import { IOrder } from 'cesieats-service-types/src/order';
import { EOrderState } from '../../enums';

interface IOrderCart {
    restaurant: IRestaurant;
    items: IItemAmount[];
    menus: IMenuAmount[];
    price: number
}

export interface IItemAmount {
    item: IItem;
    amount: number;
}

export interface IMenuAmount {
    menu: IMenu;
    amount: number;
}

interface IOrderCartState {
    clientOrders: IOrder[];
    restaurantOrders: IOrder[];
    orderCart: IOrderCart;
}

const initialState: IOrderCartState = {
    clientOrders: [] as IOrder[],
    restaurantOrders: [] as IOrder[],
    orderCart: {
        restaurant: {} as IRestaurant,
        items: [] as IItemAmount[],
        menus: [] as IMenuAmount[],
        price: 0,
    } as IOrderCart,
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

export const updateOrderStateRestaurant = createAsyncThunk('order/updateOrderState', async ({ orderId, orderState }: { orderId: string, orderState: EOrderState }) => {
    const response = await orderAPI.updateOrderState(orderId, orderState);
    return response.data;
});

export const linkDelivery = createAsyncThunk('order/linkDelivery', async ({ orderId, deliveryId }: { orderId: string, deliveryId: string }) => {
    const response = await orderAPI.linkDelivery(orderId, deliveryId);
    return response.data;
});

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItemToCart: (state, { payload }) => {
            const searchItem = state.orderCart.items.find((iA: IItemAmount) => iA.item._id === payload._id);
            if(searchItem) {
                const index = state.orderCart.items.indexOf(searchItem);
                state.orderCart.items[index].amount++;
            } else {
                const itemAmount: IItemAmount = {
                    amount: 1,
                    item: payload,
                }
                state.orderCart.items.push(itemAmount);
            }
            state.orderCart.price += payload.price;
        },
        addMenuToCart: (state, { payload }) => {
            const searchMenu = state.orderCart.menus.find((mA: IMenuAmount) => mA.menu._id === payload._id);
            if(searchMenu) {
                const index = state.orderCart.menus.indexOf(searchMenu);
                state.orderCart.menus[index].amount++;
            } else {
                const menuAmount: IMenuAmount = {
                    amount: 1,
                    menu: payload,
                }
                state.orderCart.menus.push(menuAmount);
            }
            state.orderCart.price += payload.price;
        },
        removeItemFromCart: (state, { payload }) => {
            const searchItem = state.orderCart.items.find((iA: IItemAmount) => iA.item._id === payload._id);
            if(searchItem) {
                const index = state.orderCart.items.indexOf(searchItem);
                if(searchItem.amount === 1) state.orderCart.items.splice(index, 1);
                else state.orderCart.items[index].amount--;
                state.orderCart.price -= payload.price;
            }
        },
        removeMenuFromCart: (state, { payload }) => {
            const searchMenu = state.orderCart.menus.find((iM: IMenuAmount) => iM.menu._id === payload._id);
            if(searchMenu) {
                const index = state.orderCart.menus.indexOf(searchMenu);
                if(searchMenu.amount === 1) state.orderCart.menus.splice(index, 1);
                else state.orderCart.menus[index].amount--;
                state.orderCart.price -= payload.price;
            }
        },
        deleteMenuFromCart: (state, { payload }) => {
            state.orderCart.menus = state.orderCart.menus.filter((m) => m.menu._id !== payload._id)
        },
        deleteItemFromCart: (state, { payload }) => {
            state.orderCart.items = state.orderCart.items.filter((i) => i.item._id !== payload._id)
        },
        emptyCart: (state) => {
            state.orderCart = initialState.orderCart;
        },
        changeRestaurant: (state, { payload }) => {
            state.orderCart = {
                restaurant: {} as IRestaurant,
                items: [] as IItemAmount[],
                menus: [] as IMenuAmount[],
                price: payload.deliveryPrice,
            } as IOrderCart;
            state.orderCart.restaurant = payload;
        },
        addClientOrder: (state, { payload }) => {
            state.clientOrders.push(payload);
        },
        addRestaurantOrder: (state, { payload }) => {
            state.restaurantOrders.push(payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllClientOrders.fulfilled, (state, { payload }) => {
            state.clientOrders = payload;
        });
        builder.addCase(getAllRestaurantOrders.fulfilled, (state, { payload }) => {
            state.restaurantOrders = payload;
        });
        builder.addCase(updateOrderStateRestaurant.fulfilled, (state, { payload }) => {
            state.restaurantOrders = state.restaurantOrders.map((order) => order._id === payload._id ? payload : order);
        });
    }
});

export const { addMenuToCart, addItemToCart, removeItemFromCart, removeMenuFromCart, deleteItemFromCart, deleteMenuFromCart, emptyCart, changeRestaurant, addClientOrder, addRestaurantOrder } = orderSlice.actions;

export default orderSlice.reducer;
