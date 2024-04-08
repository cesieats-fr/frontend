import { createSlice } from '@reduxjs/toolkit';

// Define the state shape for your reducers
interface RootState {
    // Add your state properties here
    num: number;
}

// Define the initial state
const initialState: RootState = {
    // Set initial values for your state properties
    num: 0,
};

// Create a reducer for each action using the createSlice function from @reduxjs/toolkit
const numberReducer = createSlice({
    name: 'numberReducer',
    initialState,
    reducers: {
        increment: (state) => {
            // Update the state based on the action
            state.num++;
        },
        decrement: (state) => {
            // Update the state based on the action
            state.num--;
        },
    },
});

// Export the numberReducer
export default numberReducer;
