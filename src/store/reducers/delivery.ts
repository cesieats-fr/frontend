import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IDelivery } from 'cesieats-service-types/src/delivery';
import { deliveryAPI } from '../../api';

interface IDeliveryState {
    deliveries: IDelivery[];
}

const initialState: IDeliveryState = {
    deliveries: [] as IDelivery[],
};

export const getDeliveries = createAsyncThunk('delivery/getDeliveries', async () => {
    const response = await deliveryAPI.getDeliveries();
    return response.data;
});

export const linkDelivery = createAsyncThunk('delivery/linkDelivery', async (id: string) => {
    const response = await deliveryAPI.linkDelivery(id);    
    return response.data;
});

// Create a reducer for each action using the createSlice function from @reduxjs/toolkit
const deliverySlice = createSlice({
    name: 'restaurantReducer',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getDeliveries.fulfilled, (state, { payload }) => {
            state.deliveries = payload 
        });
        builder.addCase(linkDelivery.fulfilled, (state, { payload }) => {
            state.deliveries = state.deliveries.map((delivery) => delivery._id !== payload._id ? delivery : payload);
        });
    }
});

export default deliverySlice.reducer;
