import { configureStore, combineReducers } from '@reduxjs/toolkit';

import accountReducer from './reducers/account';
import orderReducer from './reducers/order';
// import restaurantReducer from './reducers/restaurant';

const rootReducer = combineReducers({
    account: accountReducer,
    order: orderReducer,
    // restaurant: restaurantReducer,
});

const store = configureStore({
    reducer: rootReducer,
    // Add any middleware or enhancers here
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;