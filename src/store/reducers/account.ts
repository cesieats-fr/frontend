import { createSlice } from '@reduxjs/toolkit';
import { IAccount } from 'cesieats-service-types/src/account';

interface IAccountState {
    account: IAccount;
    isAuthenticated: boolean;
}

const initialState: IAccountState = {
    account: {} as IAccount,
    isAuthenticated: false,
};

const accountSlice = createSlice({
    name: 'accountReducer',
    initialState,
    reducers: {
        setAccount: (state, { payload }) => {
            state.account = payload;
            state.isAuthenticated = true;
        },
        removeAccount: (state) => {
            state.account = {} as IAccount
            state.isAuthenticated = false;
        }
    },
});

export const { setAccount, removeAccount } = accountSlice.actions;

export default accountSlice.reducer;
