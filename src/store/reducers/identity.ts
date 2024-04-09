import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IIdentity } from 'cesieats-service-types/src/identity';
import { identityAPI } from '../../api';

interface IIdentityState {
    identity: IIdentity;
}

interface ICredentials {
    email: string;
    password: string;
}

const initialState: IIdentityState = {
    identity: {} as IIdentity,
};

const register = createAsyncThunk('identity/register', async ({email, password}: ICredentials) => {
    const response = await identityAPI.register(email, password);
    return response.data;
});

export const login = createAsyncThunk('identity/login', async ({email, password}: ICredentials) => {
    console.log('login')
    const response = await identityAPI.login(email, password);
    console.log(response);
    return response.data;
});

const identitySlice = createSlice({
    name: 'identity',
    initialState,
    reducers: {
        // setRestaurants: (state, { payload }) => {
        //     state.restaurants = payload;
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, { payload }) => {
            console.log('payload :', payload)
            state.identity = payload 
        });
        builder.addCase(login.fulfilled, (state, { payload }) => {
            console.log('payload :', payload)
            state.identity = payload
        });
    }
});

// Export the numberReducer
export default identitySlice.reducer;
