// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { IDelivery } from 'cesieats-service-types/src/delivery';
// import { deliveryAPI } from '../../api';

// interface IDeliveryState {
//     deliveries: IDelivery[];
// }

// const initialState: IDeliveryState = {
//     deliveries: [] as IDelivery[],
// };

// const fetchDeliveries = createAsyncThunk('delivery/fetchDelivery', async () => {
//     const response = await deliveryAPI.fetchRestaurants();
//     return response.data;
// });

// // Create a reducer for each action using the createSlice function from @reduxjs/toolkit
// const deliveryReducer = createSlice({
//     name: 'restaurantReducer',
//     initialState,
//     reducers: {
//         setRestaurants: (state, { payload }) => {
//             state.restaurants = payload;
//         },
//     },
//     // extraReducers: (builder) => {
//     //     builder.addCase(fetchRestaurantsWithFilter.fulfilled, (state, { payload }) => state.restaurants = payload );
//     // }
// });

// export default deliveryReducer;
