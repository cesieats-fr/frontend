import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IIdentity } from 'cesieats-service-types/src/identity';
import { accountAPI } from '../../api';

interface IIdentityState {
    identity: IIdentity;
}

interface ICredentials {
    email: string;
    password: string;
    forname?: string;
    name?: string;
}

const initialState: IIdentityState = {
    identity: {} as IIdentity,
};

const register = createAsyncThunk('account/register', async ({email, password, forname, name}: ICredentials) => {
    const response = await accountAPI.register(email, password, forname, name);
    return response.data;
});

export const login = createAsyncThunk('account/login', async ({email, password}: ICredentials) => {
    const response = await accountAPI.login(email, password);
    return response.data;
});

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        // setRestaurants: (state, { payload }) => {
        //     state.restaurants = payload;
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (_state, { payload }) => {
            localStorage.setItem('token', payload);
        });
        builder.addCase(login.fulfilled, (_state, { payload }) => {
            localStorage.setItem('token', payload);
        });
    }
});

// Export the numberReducer
export default accountSlice.reducer;
