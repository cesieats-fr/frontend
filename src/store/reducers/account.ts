import { createSlice } from '@reduxjs/toolkit';
import { IAccount } from 'cesieats-service-types/src/account';

interface IAccountState {
    account: IAccount;
    isLogged: boolean;
}

const initialState: IAccountState = {
    account: {} as IAccount,
    isLogged: false,
};

const accountSlice = createSlice({
    name: 'accountReducer',
    initialState,
    reducers: {
        setAccount: (state, { payload }) => {
            state.account = payload;
            state.isLogged = true;
        },
        removeAccount: (state) => {
            state.account = {} as IAccount
            state.isLogged = false;
        }
    },
});

export const { setAccount, removeAccount } = accountSlice.actions;

export default accountSlice.reducer;
