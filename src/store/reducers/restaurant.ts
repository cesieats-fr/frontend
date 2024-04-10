import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IRestaurant } from 'cesieats-service-types/src/restaurant';
import { restaurantAPI } from '../../api';

// Define the state shape for your reducers
interface IRestaurantState {
    restaurants: IRestaurant[];
    accountRestaurant: IRestaurant;
    restaurantSelected: IRestaurant;
}

// Define the initial state
const initialState: IRestaurantState = {
    restaurants: [] as IRestaurant[],
    accountRestaurant: {} as IRestaurant,
    restaurantSelected: {} as IRestaurant,
};

export const getRestaurantByAccountId = createAsyncThunk('restaurant/getRestaurantByAccountId', async () => {
    const response = await restaurantAPI.getRestaurantByAccountId();
    return response.data;
});

export const addRestaurant = createAsyncThunk('restaurant/addRestaurant', async (restaurant: IRestaurant) => {
    const response = await restaurantAPI.addRestaurant(restaurant);
    return response.data;
});

export const editAccountRestaurant = createAsyncThunk('restaurant/editRestaurant', async (restaurant: IRestaurant) => {
    const response = await restaurantAPI.editRestaurant(restaurant);
    return response.data;
});

export const getAllRestaurants = createAsyncThunk('restaurant/getAllRestaurants', async () => {
    const response = await restaurantAPI.getAllRestaurants();
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
        },
        setRestaurantSelected: (state, { payload }) => {
            state.restaurantSelected = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getRestaurantByAccountId.fulfilled, (state, { payload }) => {
            state.accountRestaurant = payload
        });
        builder.addCase(addRestaurant.fulfilled, (state, { payload }) =>{
            state.accountRestaurant = payload;
        });
        builder.addCase(editAccountRestaurant.fulfilled, (state, { payload }) =>{
            state.accountRestaurant = payload;
        });
        builder.addCase(getAllRestaurants.fulfilled, (state, { payload }) => {
            state.restaurants = payload;
        });
    }
});

export const { setRestaurants, setAccountRestaurant, setRestaurantSelected } = restaurantSlice.actions;

// Export the numberReducer
export default restaurantSlice.reducer;
