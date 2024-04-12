import { Delete } from "@mui/icons-material";
import { CardActions, IconButton, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { IMenuAmount, deleteMenuFromCart } from "../../../store/reducers/order";
import { AppDispatch } from "../../../store";

interface IIMenuActionsProps {
  menu: IMenuAmount;
}

function MenuActions({menu}: IIMenuActionsProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteFromCard = () => {
    dispatch(deleteMenuFromCart(menu.menu))
  }

  return (
  <CardActions className="flex justify-between">
      <Typography>
        Quantité : { menu.amount }
      </Typography>
      <IconButton onClick={handleDeleteFromCard}>
          <Delete color="error" />
      </IconButton>
  </CardActions>
  );
}

export default MenuActions;






