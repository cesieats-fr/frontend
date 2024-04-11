import { createSlice } from '@reduxjs/toolkit';
import { IItem, IMenu } from 'cesieats-service-types/src/item';

interface IOrderCart {
    idRestaurant: string;
    items: IItemAmount[];
    menus: IMenuAmount[];
}

interface IItemAmount {
    item: IItem;
    amount: number;
}

interface IMenuAmount {
    menu: IMenu;
    amount: number;
}

interface IItemState {
    orderCart: IOrderCart;
}

const initialState: IItemState = {
    orderCart: {
        idRestaurant: "",
        items: [] as IItemAmount[],
        menus: [] as IMenuAmount[],
    } as IOrderCart,
};

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItemToCart: (state, { payload }) => {
            const item: IItem = JSON.parse(payload);
            const searchItem = state.orderCart.items.find((iA: IItemAmount) => iA.item._id === item._id);
            if(searchItem) {
                const index = state.orderCart.items.indexOf(searchItem);
                state.orderCart.items[index].amount++;
            } else {
                const itemAmount: IItemAmount = {
                    amount: 1,
                    item,
                }
                state.orderCart.items.push(itemAmount);
            }
        },
        addMenuToCart: (state, { payload }) => {
            const menu: IMenu = JSON.parse(payload);
            const searchMenu = state.orderCart.menus.find((mA: IMenuAmount) => mA.menu._id === menu._id);
            if(searchMenu) {
                const index = state.orderCart.menus.indexOf(searchMenu);
                state.orderCart.menus[index].amount++;
            } else {
                const menuAmount: IMenuAmount = {
                    amount: 1,
                    menu,
                }
                state.orderCart.menus.push(menuAmount);
            }
        },
        removeItemFromCart: (state, { payload }) => {
            const item: IItem = JSON.parse(payload);
            const searchItem = state.orderCart.items.find((iA: IItemAmount) => iA.item._id === item._id);
            if(searchItem) {
                const index = state.orderCart.items.indexOf(searchItem);
                if(searchItem.amount === 1) state.orderCart.items.splice(index, 1);
                else state.orderCart.items[index].amount--;
            }
        },
        removeMenuFromCart: (state, { payload }) => {
            const menu: IMenu = JSON.parse(payload);
            const searchMenu = state.orderCart.menus.find((iM: IMenuAmount) => iM.menu._id === menu._id);
            if(searchMenu) {
                const index = state.orderCart.menus.indexOf(searchMenu);
                if(searchMenu.amount === 1) state.orderCart.menus.splice(index, 1);
                else state.orderCart.menus[index].amount--;
            }
        }
    },
});

export default itemSlice.reducer;
