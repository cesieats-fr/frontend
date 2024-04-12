import { Add, Remove } from "@mui/icons-material";
import { CardActions, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { addMenuToCart, removeMenuFromCart } from "../../../store/reducers/order";
import { AppDispatch } from "../../../store";
import { IMenu } from "cesieats-service-types/src/item";

interface IIMenuActionsProps {
  menu: IMenu;
}

function MenuActions({menu}: IIMenuActionsProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCard = () => {
    dispatch(addMenuToCart(menu));
  }

  const handleRemoveFromCard = () => {
    dispatch(removeMenuFromCart(menu))
  }

  return (
  <CardActions className="flex justify-between">
      <IconButton onClick={handleAddToCard}>
          <Add />
      </IconButton>
      <IconButton onClick={handleRemoveFromCard}>
          <Remove color="error" />
      </IconButton>
  </CardActions>
  );
}

export default MenuActions;






