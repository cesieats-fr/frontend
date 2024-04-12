import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAccount } from 'cesieats-service-types/src/account';
import { accountAPI } from '../../api';

interface IAccountState {
    account: IAccount;
    isAuthenticated: boolean;
    accounts: IAccount[];
}

const initialState: IAccountState = {
    account: {} as IAccount,
    isAuthenticated: false,
    accounts: [] as IAccount[]
};

export const editAccount = createAsyncThunk('account/editAccount', async (account: IAccount) => {
    const response = await accountAPI.edit(account);
    return response.data;
});

export const editAccountByID = createAsyncThunk('account/editAccountByID', async (account: IAccount)   => {
    const response = await accountAPI.editAccountByID(account,account._id!);
    return response.data;
});
export const getAllClientAccounts = createAsyncThunk('account/getAllClientAccounts', async () => {
    const response = await accountAPI.getAllClientAccounts();
    console.log('response.data : ', response);
    return response.data;
});

export const deleteAccountById = createAsyncThunk('account/deleteAccountById', async (idAccount : string)   => {
    const response = await accountAPI.deleteAccountById(idAccount);
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
        builder.addCase(getAllClientAccounts.fulfilled, (state, { payload }) => {
            state.accounts = payload;
        });
        builder.addCase(deleteAccountById.fulfilled, (state, { payload }) => {
            state.accounts = state.accounts.filter((account) => account._id !== payload._id);
        });
        builder.addCase(editAccountByID.fulfilled, (state, { payload }) => {
            console.log('payload : ', payload);
            state.accounts = state.accounts.map((account) => {
                if (account._id === payload._id) {
                    return payload;
                }
                return account;
            });
        });
    }

});

export const { setAccount, removeAccount } = accountSlice.actions;

export default accountSlice.reducer;
