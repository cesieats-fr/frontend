import { Divider, Stack, Typography } from "@mui/material";
import DividedMenu, { IDividedMenuPart } from "../../components/dividedMenu";
import Items from "./items";
import ItemsTitle from "./items/title";
import Menus from "./menus";
import MenusTitle from "./menus/title"
import MenuItems from "./menuItems";
import MenuItemsTitle from "./menuItems/title";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { getItemsByRestaurantId, getMenusByRestaurantId } from "../../store/reducers/item";

const dividedMenuParts: IDividedMenuPart[] = [
  {
    titleComponent: <MenusTitle />,
    component: <Menus />,
  },
  {
    titleComponent: <ItemsTitle />,
    component: <Items />,
  },
  {
    titleComponent: <MenuItemsTitle />,
    component: <MenuItems />,
  }
]

function Restaurant() {
  const dispatch = useDispatch<AppDispatch>();

  const restaurant = useSelector((state: RootState) => state.restaurant.accountRestaurant);

  useEffect(() => {
    dispatch(getItemsByRestaurantId(restaurant._id!));
    dispatch(getMenusByRestaurantId(restaurant._id!))
  }, [dispatch, restaurant]);

  return (
    <Stack spacing={5} direction="column" divider={<Divider orientation="horizontal" flexItem />} alignItems="center" >
    <Typography
      variant="h5"
      color="text.primary"
      gutterBottom
    >
      Gestion du restaurant
    </Typography>
    <DividedMenu dividedMenuParts={dividedMenuParts} />
  </Stack>
  );
}

export default Restaurant;