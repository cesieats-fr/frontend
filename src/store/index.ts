import { configureStore, combineReducers } from '@reduxjs/toolkit';
import numberReducer from './reducers/number';
import secondReducer from './reducers/second';

const rootReducer = combineReducers({
    number: numberReducer,
    second: secondReducer,
});

const store = configureStore({
    reducer: rootReducer,
    // Add any middleware or enhancers here
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;