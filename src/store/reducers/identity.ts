import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IRestaurant } from 'cesieats-service-types/src/restaurant';
import { restaurantAPI } from '../../api';

interface IRestaurantState {
    restaurants: IRestaurant[];
}

const initialState: IRestaurantState = {
    restaurants: [] as IRestaurant[],
};

const fetchRestaurants = createAsyncThunk('restaurant/fetchRestaurants', async () => {
    const response = await restaurantAPI.fetchRestaurants();
    return response.data;
});

const restaurantReducer = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurants: (state, { payload }) => {
            state.restaurants = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurants.fulfilled, (state, { payload }) => state.restaurants = payload );
    }
});

// Export the numberReducer
export default restaurantReducer;
