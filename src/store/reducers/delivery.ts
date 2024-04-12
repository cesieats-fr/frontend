import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IDelivery } from 'cesieats-service-types/src/delivery';
import { deliveryAPI } from '../../api';
import { EDeliveryState } from '../../enums';

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

export const linkDeliver = createAsyncThunk('delivery/linkDeliver', async (id: string) => {
    const response = await deliveryAPI.linkDeliver(id);    
    return response.data;
});

export const updateDeliveryState = createAsyncThunk('delivery/updateDeliveryState', async ({ deliveryId, deliveryState }: { deliveryId: string, deliveryState: EDeliveryState }) => {
    const response = await deliveryAPI.updateDeliveryState(deliveryId, deliveryState);    
    return response.data;
});

// Create a reducer for each action using the createSlice function from @reduxjs/toolkit
const deliverySlice = createSlice({
    name: 'restaurantReducer',
    initialState,
    reducers: {
        addDelivery: (state, { payload }) => {
            state.deliveries.push(payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getDeliveries.fulfilled, (state, { payload }) => {
            state.deliveries = payload ;
        });
        builder.addCase(linkDeliver.fulfilled, (state, { payload }) => {
            state.deliveries = state.deliveries.map((delivery) => delivery._id !== payload._id ? delivery : payload);
        });
        builder.addCase(updateDeliveryState.fulfilled, (state, { payload }) => {
            state.deliveries = state.deliveries.map((delivery) => delivery._id !== payload._id ? delivery : payload);
        });
    }
});

export const { addDelivery } = deliverySlice.actions;

export default deliverySlice.reducer;
