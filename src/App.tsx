import React from 'react'
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux'
import store from './store'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { accountAPI } from './api';
import { useEffect } from 'react';
import { setAccount } from './store/reducers/account';

const theme = createTheme({
  typography: {
    fontFamily: [
      'lexend',
      'calibri',
    ].join(','),
  },
});

function App(): React.ReactElement {
  const dispatch = useDispatch();
  useEffect(() => {
    accountAPI.login(localStorage.getItem('token'))
      .then((response) => {
        dispatch(setAccount(response.account));
        localStorage.setItem('token', response.token);
      });
    }, [dispatch]);
  
    return (
      <ThemeProvider theme={theme}>
        <React.StrictMode>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </React.StrictMode>
      </ThemeProvider>
    );
  }

  export default App;