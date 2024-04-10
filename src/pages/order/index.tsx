import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import OrderCard from "../../components/order/orderCard";
import { useEffect } from "react";
import { getAllRestaurants } from "../../store/reducers/restaurant";

function OrderPage() {
  const dispatch = useDispatch<AppDispatch>();

  const account = useSelector((state: RootState) => state.account.account);
  const restaurants = useSelector((state: RootState) => state.restaurant.restaurants);

  useEffect(() => {
    dispatch(getAllRestaurants())
  }, [dispatch]);

  return (
    <div>
      <Typography
        className="p-4 background-color-grey-100 border-b-2 border-black color-black-100" 
        variant="body1"
        color="text.primary"
        gutterBottom
      >
        Livrer à l'adresse : { account.address }
      </Typography>

      <div className="flex flex-wrap justify-center gap-4">
        {
          restaurants && restaurants.map((restaurant, index) => <OrderCard restaurant={restaurant} key={index} />)
        }
      </div>
    </div>
  );
}

export default OrderPage;
