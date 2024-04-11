import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import OrderCard from "../../components/order/orderCard";
import { useEffect } from "react";
import { getAllRestaurants } from "../../store/reducers/restaurant";
import { Button, Divider, Stack } from "@mui/material";

function OrderPage() {
  const dispatch = useDispatch<AppDispatch>();

  const account = useSelector((state: RootState) => state.account.account);
  const restaurants = useSelector((state: RootState) => state.restaurant.restaurants);
  const restaurantSelected = useSelector((state: RootState) => state.restaurant.restaurantSelected);
  const currentRestaurantItems = useSelector((state: RootState) => state.item.items);
  const currentRestaurantMenus = useSelector((state: RootState) => state.item.menus);

  const orderCart = [];

  useEffect(() => {
    dispatch(getAllRestaurants())
  }, [dispatch]);

  useEffect(() => {
    console.log(currentRestaurantItems, currentRestaurantMenus);
  }, [currentRestaurantItems, currentRestaurantMenus]);

  return (
    <Stack spacing={5} direction="column" divider={<Divider orientation="horizontal" flexItem />} alignItems="center" >
      <Typography
        variant="body1"
        color="text.primary"
        gutterBottom
      >
        Livrer à l'adresse : { account.address }
      </Typography>

      <Stack spacing={5} direction="row" divider={<Divider orientation="vertical" flexItem />} className="w-full">
        <Stack spacing={4} alignItems="center" direction="column" className="w-1/3">
          <Typography variant="h5">
            Restaurants
          </Typography>
          <Stack spacing={3} direction="row" useFlexGap flexWrap="wrap" justifyContent="space-around">
            {
              restaurants && restaurants.map((restaurant, index) => <OrderCard restaurant={restaurant} key={index} />)
            }
        </Stack>
        </Stack>
        
        <Stack className="w-1/3">
          <Typography variant="h5">
            Restaurant { restaurantSelected &&  restaurantSelected.name }
          </Typography>
        </Stack>
        <Stack className="w-1/3">
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h5">
              Panier
            </Typography>
            { orderCart.length > 0 &&
              <Button variant="contained">
                Vider le panier
              </Button>
            }
          </Stack>
          
        </Stack>
      </Stack>
    </Stack>
  );
}

export default OrderPage;
