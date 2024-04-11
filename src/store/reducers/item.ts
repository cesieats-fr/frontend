import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { itemAPI } from '../../api';
import { IItem, IMenu } from 'cesieats-service-types/src/item';

interface IItemState {
    items: IItem[];
    menus: IMenu[];
    // currentRestaurantItems: IItem[];
    // currentRestaurantMenus: IMenu[];
    // currentRestaurantAccountMenus: IMenu[];
}

const initialState: IItemState = {
    items: [] as IItem[],
    menus: [] as IMenu[],
    // currentRestaurantItems: [] as IItem[],
    // currentRestaurantMenus: [] as IMenu[],
    // currentRestaurantAccountMenus: [] as IMenu[],
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

export const deleteItem = createAsyncThunk('item/deletItem', async (idItem: string) => {
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
    const response = await itemAPI.addMenu(menu.title, menu.price, menu.idRestaurant, menu.description, menu.imageUrl);
    return response.data;
});

export const addItem = createAsyncThunk('item/addItem', async (item: IItem) => {
    const response = await itemAPI.addItem(item.title, item.price, item.idRestaurant, item.description, item.imageUrl);
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
            state.items = payload;
        });
        builder.addCase(deleteItem.fulfilled, (state, { payload }) => {
            const itemPayload: IItem = JSON.parse(payload);
            state.items = state.items.filter( (item) => {
                item._id !== itemPayload._id
            });
        });
        builder.addCase(getMenusByRestaurantId.fulfilled, (state, { payload }) => {
            state.menus = payload;
        });
        builder.addCase(deleteMenu.fulfilled, (state, { payload }) => {
            const menuPayload: IMenu = JSON.parse(payload);
            state.menus = state.menus.filter( (menu) => {
                menu._id !== menuPayload._id
            });
        });
        builder.addCase(addMenu.fulfilled, (state, { payload }) => {
            state.menus.push(payload);
        });
        builder.addCase(addItem.fulfilled, (state, { payload }) => {
            state.items.push(payload);
        });
    }
});

export default itemSlice.reducer;
