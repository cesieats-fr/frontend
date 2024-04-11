import { Add, Delete, Edit } from "@mui/icons-material";
import { CardActions, IconButton } from "@mui/material";
import { EditItemDialog } from "../editItem";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../store/reducers/item";
import { AppDispatch } from "../../store";
import { useState } from "react";
import { IItem } from "cesieats-service-types/src/item";

interface IItemListActionsProps {
  item: IItem;
}

function ItemListActions({item}: IItemListActionsProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    if(item._id)
      dispatch(deleteItem(item._id))
  };

  return (
    <CardActions className="flex justify-between">
      <IconButton>
        <Add color="primary" />
      </IconButton>
      <IconButton onClick={handleClickOpen}>
        <Edit />
      </IconButton>
      <IconButton onClick={handleDelete}>
        <Delete color="error" />
      </IconButton>
      <EditItemDialog item={item} open={open} onClose={handleClose} />
    </CardActions>
  );
}

export default ItemListActions;