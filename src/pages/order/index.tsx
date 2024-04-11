import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { getAllRestaurants } from "../../store/reducers/restaurant";
import { Divider, Stack } from "@mui/material";
import DividedMenu, { IDividedMenuPart } from "../../components/dividedMenu";
import Restaurants from "./restaurants";
import RestaurantsTitle from "./restaurants/title";
import Restaurant from "./restaurant";
import RestaurantTitle from "./restaurant/title";
import Cart from "./cart";
import CartTitle from "./cart/title";

function OrderPage() {
  const dispatch = useDispatch<AppDispatch>();

  const account = useSelector((state: RootState) => state.account.account);

  const dividedMenuParts: IDividedMenuPart[] = [
    {
      titleComponent: <RestaurantsTitle />,
      component: <Restaurants />,
    },
    {
      titleComponent: <RestaurantTitle />,
      component: <Restaurant />,
    },
    {
      titleComponent: <CartTitle />,
      component: <Cart />,
    }
  ]

  useEffect(() => {
    dispatch(getAllRestaurants())
  }, [dispatch]);

  return (
    <Stack spacing={5} direction="column" divider={<Divider orientation="horizontal" flexItem />} alignItems="center" >
      <Typography
        variant="body1"
        color="text.primary"
        gutterBottom
      >
        Livrer à l'adresse : { account.address }
      </Typography>
      <DividedMenu dividedMenuParts={dividedMenuParts} />
    </Stack>
  );
}

export default OrderPage;
