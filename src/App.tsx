import React from 'react'
import { RouterProvider } from 'react-router';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useDispatch } from 'react-redux';
// import { accountAPI } from './api';
// import { useEffect } from 'react';
// import { setAccount } from './store/reducers/account';
import router from './routers';
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
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   accountAPI.login()
  //     .then((response) => {
  //       dispatch(setAccount(response.account));
  //       localStorage.setItem('token', response.token);
  //     });
  //   }, [dispatch]);
  
    return (
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    );
  }

  export default App;