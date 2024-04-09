import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { accountAPI } from './api';
import { useEffect } from 'react';
import { setAccount } from './store/reducers/account';
import RouterPage from './routers';
import './index.css';

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
    if(localStorage.getItem('token') === null) return;
    accountAPI.loginWithToken()
    .then((response) => {
      dispatch(setAccount(response));
    })
    .catch(() => {
      localStorage.removeItem('token');
    });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <RouterPage />
    </ThemeProvider>
  );
}

export default App;