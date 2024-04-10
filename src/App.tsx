import React from 'react'
import { useDispatch } from 'react-redux';
import { accountAPI, restaurantAPI } from './api';
import { useEffect } from 'react';
import { setAccount } from './store/reducers/account';
import { setAccountRestaurant } from './store/reducers/restaurant';
import RouterPage from './routers';
import './index.css';



function App(): React.ReactElement {
  const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.getItem('token') === null) return;
    accountAPI.loginWithToken()
    .then((response) => {
      dispatch(setAccount(response));
      if(response.accountType === 2) {
        restaurantAPI.getRestaurantByAccountId()
        .then((response) => {
          dispatch(setAccountRestaurant(response.data))
        })
      }
    })
    .catch(() => {
      localStorage.removeItem('token');
    });
  }, [dispatch]);

  return (
    <RouterPage />
  );
}

export default App;