import Button from "@mui/material/Button";
import { MenuList, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { useEffect, useState } from "react";
import { getMenusByRestaurantId } from "../../../store/reducers/item";
import { AddMenuDialog } from "../../../components/addMenu";


function MenusView() {

  const dispatch = useDispatch<AppDispatch>();
  const restaurant = useSelector((state: RootState) => state.restaurant.accountRestaurant);
  useEffect(() => {
    if (restaurant._id) 
      dispatch(getMenusByRestaurantId(restaurant._id));
  }, [dispatch, restaurant]);
  
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <Stack>
        <Button sx={{width:300, marginBottom:2}} variant="contained" onClick={handleClickOpen}>Ajouter un menu</Button>
        <MenuList idRestaurant={restaurant._id!}/>
        <AddMenuDialog onClose={handleClose} open={open} idRestaurant={restaurant._id!}/>
    </Stack>
    
  );
}

export default MenusView;
