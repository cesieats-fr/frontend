import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { itemAPI } from '../../api';
import { IItem } from 'cesieats-service-types/src/item';

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

interface IItemState {
    // orderCart: IOrderCart;
    items: IItem[];
}

const initialState: IItemState = {
    // orderCart: {} as IOrderCart,
    items: [] as IItem[],
};

interface LinkMenuItem {
    idMenu: string;
    idItem: string;
  }

export const getMenuItems = createAsyncThunk('item/getMenuItems', async (idMenu: string) => {
    const response = await itemAPI.getMenuItems(idMenu);
    return response.data;
});

export const deleteMenuItem = createAsyncThunk<string, LinkMenuItem>('item/deleteMenuItem', async ({idMenu, idItem}) => {
    const response = await itemAPI.deleteMenuItem(idMenu, idItem);
    return response.data;
});

const itemSlice = createSlice({
    name: 'item',
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
        builder.addCase(getMenuItems.fulfilled, (state, { payload }) => {
            state.items = payload;
        });
        builder.addCase(deleteMenuItem.fulfilled, (state, { payload }) => {
            const linkPayload: LinkMenuItem = JSON.parse(payload);
            state.items = state.items.filter( (item) => {
                item._id !== linkPayload.idItem
            })
        });
    }
});

export default itemSlice.reducer;
