import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IRestaurant } from 'cesieats-service-types/src/restaurant';
import { restaurantAPI } from '../../api';

// Define the state shape for your reducers
interface IRestaurantState {
    restaurants: IRestaurant[];
    accountRestaurant: IRestaurant;
}

// Define the initial state
const initialState: IRestaurantState = {
    restaurants: [] as IRestaurant[],
    accountRestaurant: {} as IRestaurant,
};

const getRestaurantByAccountId = createAsyncThunk('restaurant/getRestaurantByAccountId', async () => {
    const response = await restaurantAPI.getRestaurantByAccountId();
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
        setAccountRestaurant: (state, { payload }) => {
            state.accountRestaurant = payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getRestaurantByAccountId.fulfilled, (state, { payload }) => state.accountRestaurant = payload );
    }
});

// Export the numberReducer
export default restaurantSlice.reducer;
