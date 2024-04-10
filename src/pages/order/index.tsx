import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import OrderCard from "../../components/order/orderCard";
import { useEffect } from "react";
import { getAllRestaurants } from "../../store/reducers/restaurant";
import { Divider, Stack } from "@mui/material";

function OrderPage() {
  const dispatch = useDispatch<AppDispatch>();

  const account = useSelector((state: RootState) => state.account.account);
  const restaurants = useSelector((state: RootState) => state.restaurant.restaurants);
  const restaurantSelected = useSelector((state: RootState) => state.restaurant.restaurantSelected);
  const currentRestaurantItems = useSelector((state: RootState) => state.item.currentRestaurantItems);
  const currentRestaurantsMenus = useSelector((state: RootState) => state.item.currentRestaurantsMenus);

  useEffect(() => {
    dispatch(getAllRestaurants())
  }, [dispatch]);

  useEffect(() => {
    console.log(currentRestaurantItems, currentRestaurantsMenus);
  }, [currentRestaurantItems, currentRestaurantsMenus]);

  return (
    <Stack spacing={5} direction="column" divider={<Divider orientation="horizontal" flexItem />} alignItems="center" >
      <Typography
        variant="body1"
        color="text.primary"
        gutterBottom
      >
        Livrer à l'adresse : { account.address }
      </Typography>

      <Stack spacing={5} direction="row" divider={<Divider orientation="vertical" flexItem />} className="h-full">
        <Stack spacing={5} direction="row" useFlexGap flexWrap="wrap">
          {
            restaurants && restaurants.map((restaurant, index) => <OrderCard restaurant={restaurant} key={index} />)
          }
        </Stack>
        <Stack>
          <Typography>
            Restaurant { restaurantSelected &&  restaurantSelected.name }
          </Typography>
        </Stack>
        <Stack>
          <Typography>
            Panier
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default OrderPage;
