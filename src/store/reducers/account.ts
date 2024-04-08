import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IAccount } from 'cesieats-service-types/src/account';
import { accountAPI } from '../../api';

interface IAccountState {
    account: IAccount;
}

interface ICredentials {
    email: string;
    password: string;
}

const initialState: IAccountState = {
    account: {} as IAccount,
};

const registerAccount = createAsyncThunk('account/registerAccount', async ({email, password}: ICredentials) => {
    const response = await accountAPI.register(email, password);
    return response.data;
});

const loginAccount = createAsyncThunk('account/loginAccount', async ({email, password}: ICredentials) => {
    const response = await accountAPI.login(email, password);
    return response.data;
});

const deleteAccount = createAsyncThunk('account/deleteAccount', async () => {
    const response = await accountAPI.deleteAccount();
    return response.data;
});

const editAccount = createAsyncThunk('account/editAccount', async ({...values}: IAccount) => {
    const response = await accountAPI.editAccount(values);
    return response.data;
});

const accountReducer = createSlice({
    name: 'accountReducer',
    initialState,
    reducers: {
        setAccount: (state, { payload }) => {
            state.account = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerAccount.fulfilled, (state, { payload }) => state.account = payload );
        builder.addCase(loginAccount.fulfilled, (state, { payload }) => state.account = payload );
        builder.addCase(editAccount.fulfilled, (state, { payload }) => state.account = payload );
        builder.addCase(deleteAccount.fulfilled, (state) => {
            state.account = {} as IAccount
        });
    }
});

export default accountReducer;
