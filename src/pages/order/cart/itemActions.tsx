import { Delete } from "@mui/icons-material";
import { CardActions, IconButton, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { IItemAmount, deleteItemFromCart } from "../../../store/reducers/order";
import { AppDispatch } from "../../../store";

interface IItemActionsProps {
  item: IItemAmount;
}

function ItemActions({item}: IItemActionsProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteFromCard = () => {
    dispatch(deleteItemFromCart(item.item))
  }

  return (
  <CardActions className="flex justify-between">
      <Typography>
        Quantité : { item.amount }
      </Typography>
      <IconButton onClick={handleDeleteFromCard}>
          <Delete color="error" />
      </IconButton>
  </CardActions>
  );
}

export default ItemActions;






