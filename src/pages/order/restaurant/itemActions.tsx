import { Add, Remove } from "@mui/icons-material";
import { CardActions, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../../store/reducers/order";
import { AppDispatch } from "../../../store";
import { IItem } from "cesieats-service-types/src/item";

interface IItemActionsProps {
  item: IItem;
}

function ItemActions({item}: IItemActionsProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCard = () => {
    dispatch(addItemToCart(item));
  }

  const handleRemoveFromCard = () => {
    dispatch(removeItemFromCart(item))
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

export default ItemActions;






