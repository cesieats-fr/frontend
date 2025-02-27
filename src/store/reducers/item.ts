import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { itemAPI } from '../../api';
import { IItem, IMenu } from 'cesieats-service-types/src/item';

interface IItemState {
    items: IItem[];
    menus: IMenu[];
}

const initialState: IItemState = {
    items: [] as IItem[],
    menus: [] as IMenu[],
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

export const deleteMenu = createAsyncThunk('item/deleteMenu', async (idMenu: string) => {
    const response = await itemAPI.deleteMenu(idMenu);
    return response.data;
});

export const deleteItem = createAsyncThunk('item/deleteItem', async (idItem: string) => {
    const response = await itemAPI.deleteItem(idItem);
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

export const addMenu = createAsyncThunk('item/addMenu', async (menu: IMenu) => {
    const response = await itemAPI.addMenu(menu.title, menu.price, menu.idRestaurant!, menu.description);
    return response.data;
});

export const addItem = createAsyncThunk('item/addItem', async (item: IItem) => {
    const response = await itemAPI.addItem(item.title, item.price, item.idRestaurant!, item.description);
    return response.data;
});

export const editItem = createAsyncThunk('item/editItem', async (item: IItem) => {
    const response = await itemAPI.editItem(item.title, item.price, item.description);
    return response.data;
});

export const editMenu = createAsyncThunk('item/editMenu', async (menu: IMenu) => {
    const response = await itemAPI.editMenu(menu.title, menu.price, menu.description);
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
            state.items = state.items.filter( (item) => item._id !== linkPayload.idItem)
        });
        builder.addCase(getItemsByRestaurantId.fulfilled, (state, { payload }) => {
            state.items = payload;
        });
        builder.addCase(deleteItem.fulfilled, (state, { payload }) => {
            state.items = state.items.filter((item) => item._id !== payload.resultItem._id);
        });
        builder.addCase(getMenusByRestaurantId.fulfilled, (state, { payload }) => {
            state.menus = payload;
        });
        builder.addCase(deleteMenu.fulfilled, (state, { payload }) => {
            state.menus = state.menus.filter((menu) => menu._id !== payload.resultMenu._id);
        });
        builder.addCase(addMenu.fulfilled, (state, { payload }) => {
            state.menus.push(payload);
        });
        builder.addCase(addItem.fulfilled, (state, { payload }) => {
            state.items.push(payload);
        });
        builder.addCase(editItem.fulfilled, (state, { payload }) => {
            state.items.map((i: IItem) => i._id !== payload._id ? i : payload);
        });
        builder.addCase(editMenu.fulfilled, (state, { payload }) => {
            state.menus.map((m: IMenu) => m._id !== payload._id ? m : payload);
        });
    }
});

export default itemSlice.reducer;
