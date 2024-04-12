import { configureStore, combineReducers } from '@reduxjs/toolkit';

import accountReducer from './reducers/account';
import deliveryReducer from './reducers/delivery';
import orderReducer from './reducers/order';
import restaurantReducer from './reducers/restaurant';
import itemReducer from './reducers/item';

const rootReducer = combineReducers({
    account: accountReducer,
    delivery: deliveryReducer,
    order: orderReducer,
    restaurant: restaurantReducer,
    item: itemReducer
});

const store = configureStore({
    reducer: rootReducer,
    // Add any middleware or enhancers here
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;