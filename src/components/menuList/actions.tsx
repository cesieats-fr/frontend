import { Add, Delete, Edit } from "@mui/icons-material";
import { CardActions, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteMenu } from "../../store/reducers/item";
import { AppDispatch } from "../../store";
import { useState } from "react";
import { EditMenuDialog } from "../editMenu";
import { IMenu } from "cesieats-service-types/src/item";

interface IIMenuListActionsProps {
  menu: IMenu;
}

function MenuListActions({menu}: IIMenuListActionsProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
  setOpen(true);
  };

  const handleClose = () => {
  setOpen(false);
  };

  const handleDelete = () => {
    if(menu._id)
      dispatch(deleteMenu(menu._id))
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
      <EditMenuDialog menu={menu} open={open} onClose={handleClose} />
  </CardActions>
  );
}

export default MenuListActions;






