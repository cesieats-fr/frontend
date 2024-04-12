import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderFooter from "../layout";
import Home from "../pages/home";
import OrderPage from "../pages/order/index";
import Orders from "../pages/orders";
import Account from "../pages/account";
import Deliveries from "../pages/deliveries";
import Register from "../pages/register";
import Login from "../pages/login";
import DeliveryPage from "../pages/delivery";
import Restaurant from "../pages/restaurant/index";
import RestrictedPage from "../pages/restricted";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { EAccountType } from "../enums";
import Mangement from "../pages/management";
import Parameters from "../pages/parameters";
import Management from "../pages/management";
import RestaurantOrders from "../pages/restaurantOrders";

interface ProtectedRouteProps {
  element: React.ElementType;
  requiredAccountType?: EAccountType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element: Element,
  requiredAccountType,
  ...rest
}) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.account.isAuthenticated
  );
  const accountType = useSelector(
    (state: RootState) => state.account.account?.accountType
  );

  if (
    isAuthenticated &&
    (requiredAccountType === undefined || accountType === requiredAccountType)
  ) {
    return <Element {...rest} />;
  } else {
    return <RestrictedPage />;
  }
};

const RouterPage: React.FC = () => {
  return (
    <BrowserRouter>
      <HeaderFooter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/order"
            element={
              <ProtectedRoute
                element={OrderPage}
                requiredAccountType={EAccountType.CLIENT}
              />
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute
                element={Orders}
                requiredAccountType={EAccountType.CLIENT}
              />
            }
          />
          <Route
            path="/account"
            element={<ProtectedRoute element={Account} />}
          />
          <Route
            path="/delivery"
            element={<ProtectedRoute element={DeliveryPage} />}
          />
          <Route
            path="/deliveries"
            element={<ProtectedRoute element={Deliveries} />}
          />
          <Route
            path="/restaurant"
            element={<ProtectedRoute element={Restaurant} />}
          />
          <Route
            path="/parameters"
            element={<ProtectedRoute element={Parameters} />}
          />
           <Route
            path="/management"
            element={<ProtectedRoute element={Management} />}
          />
          <Route
            path="/restaurantOrders"
            element={<ProtectedRoute element={RestaurantOrders} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </HeaderFooter>
    </BrowserRouter>
  );
};

export default RouterPage;
