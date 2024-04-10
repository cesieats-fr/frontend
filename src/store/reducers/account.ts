import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAccount } from 'cesieats-service-types/src/account';
import { accountAPI } from '../../api';

interface IAccountState {
    account: IAccount;
    isAuthenticated: boolean;
}

const initialState: IAccountState = {
    account: {} as IAccount,
    isAuthenticated: false,
};

export const editAccount = createAsyncThunk('account/editAccount', async (account: IAccount) => {
    const response = await accountAPI.edit(account);
    return response.data;
});

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
            localStorage.removeItem('token');
        }
    },
    extraReducers: (builder) => {
        builder.addCase(editAccount.fulfilled, (state, { payload }) => {
            state.account = payload;
        });
    }
});

export const { setAccount, removeAccount } = accountSlice.actions;

export default accountSlice.reducer;
