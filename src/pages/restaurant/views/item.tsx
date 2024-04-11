import Button from "@mui/material/Button";
import { Grid, Stack } from "@mui/material";
import { IItem } from "cesieats-service-types/src/item";
import MenuCard from "../../../components/menu";
import { useState } from "react";
import ItemList from "../../../components/itemList";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { AddItemDialog } from "../../../components/addItem";

function ItemsView() {
    
    const restaurant = useSelector((state: RootState) => state.restaurant.accountRestaurant);

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
        <ItemList idRestaurant={restaurant._id!}/>
        <AddItemDialog onClose={handleClose} open={open} idRestaurant={restaurant._id!}/>
    </Stack>
    );
}

export default ItemsView;
