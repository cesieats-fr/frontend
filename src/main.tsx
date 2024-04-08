import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import HeaderFooter from './layout/HeaderFooter'
import Home from './layout/home'
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
        path: '/livreur',
        element: <div>Livreur</div>,
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