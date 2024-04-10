import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { itemAPI } from '../../api';
import { IItem, IMenu } from 'cesieats-service-types/src/item';

interface IItemState {
    items: IItem[];
    currentRestaurantItems: IItem[];
    currentRestaurantsMenus: IMenu[];
}

const initialState: IItemState = {
    items: [] as IItem[],
    currentRestaurantItems: [] as IItem[],
    currentRestaurantsMenus: [] as IMenu[],
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

export const getItemsByRestaurantId = createAsyncThunk('item/getItemsByRestaurantId', async (idRestaurant: string) => {
    const response = await itemAPI.getItemsByRestaurantId(idRestaurant);
    return response.data;
});

export const getMenusByRestaurantId = createAsyncThunk('item/getMenusByRestaurantId', async (idRestaurant: string) => {
    const response = await itemAPI.getMenusByRestaurantId(idRestaurant);
    return response.data;
});

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
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
        builder.addCase(getItemsByRestaurantId.fulfilled, (state, { payload }) => {
            state.currentRestaurantItems = payload;
        });
        builder.addCase(getMenusByRestaurantId.fulfilled, (state, { payload }) => {
            state.currentRestaurantsMenus = payload;
        });
    }
});

export default itemSlice.reducer;
