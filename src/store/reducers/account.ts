import { createSlice } from '@reduxjs/toolkit';
import { IAccount } from 'cesieats-service-types/src/account';

interface IAccountState {
    account: IAccount;
}

const initialState: IAccountState = {
    account: {} as IAccount,
};

const accountSlice = createSlice({
    name: 'accountReducer',
    initialState,
    reducers: {
        setAccount: (state, { payload }) => {
            state.account = payload;
        },
        deleteAccount: (state) => {
            state.account = {} as IAccount
        }
    },
});

export const { setAccount } = accountSlice.actions;

export default accountSlice.reducer;
