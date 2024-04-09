import { createSlice } from '@reduxjs/toolkit';
import { IRestaurant } from 'cesieats-service-types/src/restaurant';
// import { restaurantAPI } from '../../api';

// Define the state shape for your reducers
interface IRestaurantState {
    restaurants: IRestaurant[];
}

// Define the initial state
const initialState: IRestaurantState = {
    restaurants: [] as IRestaurant[],
};

// const fetchRestaurantsWithFilter = createAsyncThunk('restaurant/fetchRestaurantsWithFilter', async (filter: null) => {
//     const response = await restaurantAPI.fetchRestaurantsWithFilter(filter);
//     return response.data;
// });

// Create a reducer for each action using the createSlice function from @reduxjs/toolkit
const sponsorSlice = createSlice({
    name: 'sponsor',
    initialState,
    reducers: {
        setRestaurants: (state, { payload }) => {
            state.restaurants = payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchRestaurantsWithFilter.fulfilled, (state, { payload }) => state.restaurants = payload );
    // }
});

// Export the numberReducer
export default sponsorSlice.reducer;
