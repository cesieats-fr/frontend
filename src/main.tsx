import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux'
import store from './store'
import HeaderFooter from './layout/headerFooter'
import Home from './views/home'
import Order from './views/order'
import Orders from './views/orders'
import Favorites from './views/favorites'
import Account from './views/account'
import Parameters from './views/parameters'

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
        path: '/order',
        element: <Order />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
      {
        path: '/account',
        element: <Account />,
      },
      {
        path: '/parameters',
        element: <Parameters />,
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
      <React.StrictMode>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </React.StrictMode>
  </ThemeProvider>
);