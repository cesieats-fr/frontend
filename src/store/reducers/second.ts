import { combineReducers, createSlice } from '@reduxjs/toolkit';

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
const reducerNumber = createSlice({
    name: 'reducerNumber',
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

// Combine all reducers into a single rootReducer using combineReducers
const rootReducer = combineReducers({
    reducer1: reducerNumber.reducer,
    // Add more reducers here if needed
});

// Export the rootReducer
export default rootReducer;
