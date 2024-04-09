import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IRestaurant } from 'cesieats-service-types/src/restaurant';
import { restaurantAPI } from '../../api';

// Define the state shape for your reducers
interface IRestaurantState {
    restaurants: IRestaurant[];
}

// Define the initial state
const initialState: IRestaurantState = {
    restaurants: [] as IRestaurant[],
};

const fetchRestaurantsWithFilter = createAsyncThunk('restaurant/fetchRestaurants', async () => {
    const response = await restaurantAPI.fetchRestaurants();
    return response.data;
});

// Create a reducer for each action using the createSlice function from @reduxjs/toolkit
const restaurantSlice = createSlice({
    name: 'restaurantReducer',
    initialState,
    reducers: {
        setRestaurants: (state, { payload }) => {
            state.restaurants = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurantsWithFilter.fulfilled, (state, { payload }) => state.restaurants = payload );
    }
});

// Export the numberReducer
export default restaurantSlice.reducer;
