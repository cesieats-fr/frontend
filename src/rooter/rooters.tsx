import { createBrowserRouter } from 'react-router-dom'
import HeaderFooter from '../layout/headerFooter'
import Home from '../views/home'
import Order from '../views/order'
import Orders from '../views/orders'
import Favorites from '../views/favorites'
import Account from '../views/account'
import Parameters from '../views/parameters'
import Delivery from '../views/Delivery';
import Register from '../views/register';
import Login from '../views/login';

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
        {
          path: "/delivery",
          element: <Delivery />,
        },
        {
            path: "/deliveries",
            element: <Deliveries />,
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/login',
          element: <Login />
        }
      ]
    },
  ]);

export default router;