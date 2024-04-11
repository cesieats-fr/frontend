import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { useEffect, useState } from "react";
import { getMenusByRestaurantId } from "../../../store/reducers/item";
import { AddMenuDialog } from "../../../components/addMenu";
import MenuList from "../../../components/menuList";


function MenusView() {
  const dispatch = useDispatch<AppDispatch>();
  const restaurant = useSelector((state: RootState) => state.restaurant.accountRestaurant);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (restaurant._id) {
      dispatch(getMenusByRestaurantId(restaurant._id));

    }
  }, [dispatch, restaurant]);

  return (
    <Stack padding={5} direction="column">
        <Button sx={{width:300, marginBottom:2}} variant="contained" onClick={() => setOpen(true)}>Ajouter un menu</Button>
        <MenuList/>
        <AddMenuDialog onClose={() => setOpen(false)} open={open} idRestaurant={restaurant._id!}/>
    </Stack>
    
  );
}

export default MenusView;
