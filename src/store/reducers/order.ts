import { createSlice } from '@reduxjs/toolkit';
import { IItem, IMenu } from 'cesieats-service-types/src/item';
import { IRestaurant } from 'cesieats-service-types/src/restaurant';

interface IOrderCart {
    restaurant: IRestaurant;
    items: {
        item: IItem;
        quantity: number;
    }[];
    menus: {
        menu: IMenu;
        quantity: number;
    }[];
}

interface IOrderState {
    orderCart: IOrderCart;
}

const initialState: IOrderState = {
    orderCart: {} as IOrderCart,
};

const orderReducer = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItem: (state, payload) => {
            // Update the state based on the action
            const item: IItem = payload.payload;
            if(state.orderCart.restaurant !== item.idRestaurant) {
                state.orderCart = {} as IOrderCart;
            }
            if(state.orderCart.items.find(i => i.item.title === item.title)) {
                state.orderCart.items.push({
                    item,
                    quantity: 1
                });
            }
        },
        resetCart: (state) => {
            state.orderCart = {} as IOrderCart;
        }
    },
});

export default orderReducer;
