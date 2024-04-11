import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import OrderCard from "../../../components/order/orderCard";

function Restaurants() {
  const restaurants = useSelector((state: RootState) => state.restaurant.restaurants);

  return (
    <Stack spacing={3} direction="row" useFlexGap flexWrap="wrap" justifyContent="space-around">
      { restaurants && 
        restaurants.map((restaurant, index) => <OrderCard restaurant={restaurant} key={index} />)
      }
    </Stack>
  )
}

export default Restaurants;