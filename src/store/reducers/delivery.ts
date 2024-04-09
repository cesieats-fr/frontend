import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IDelivery } from 'cesieats-service-types/src/delivery';
import { deliveryAPI } from '../../api';

interface IDeliveryState {
    deliveries: IDelivery[];
}

const initialState: IDeliveryState = {
    deliveries: [] as IDelivery[],
};

export const getDeliveries = createAsyncThunk('delivery/fetchDelivery', async () => {
    console.log('getDeliveries')
    const response = await deliveryAPI.getDeliveries();
    console.log(response.data);
    return response.data;
});

// Create a reducer for each action using the createSlice function from @reduxjs/toolkit
const deliverySlice = createSlice({
    name: 'restaurantReducer',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getDeliveries.fulfilled, (state, { payload }) => state.deliveries = payload );
    }
});

export default deliverySlice.reducer;
