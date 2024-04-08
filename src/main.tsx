import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeaderFooter from './layout/headerFooter'
import Home from './layout/home'
import Order from './layout/order'
import Orders from './layout/orders'
import Favorites from './layout/favorites'
import Account from './layout/account'
import Parameters from './layout/parameters'

const theme = createTheme({
  typography: {
    fontFamily: [
      'lexend',
      'calibri',
    ].join(','),
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderFooter />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Order',
        element: <Order />,
      },
      {
        path: '/Orders',
        element: <Orders />,
      },
      {
        path: '/Favorite',
        element: <Favorites />,
      },
      {
        path: '/Account',
        element: <Account />,
      },
      {
        path: '/Parameters',
        element: <Parameters />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
   <ThemeProvider theme={theme}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
  </ThemeProvider>
);