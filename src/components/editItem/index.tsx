import { useEffect } from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { IItem, IMenu } from "cesieats-service-types/src/item";
import { editMenu } from "../../api/services/item";
import { getMenuItems, deleteMenuItem } from "../../store/reducers/item";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { Title } from "@mui/icons-material";

export interface editItemDialogProps {
  menu: IItem;
  open: boolean;
  onClose: (menu: IItem) => void;
}

export function EditItemDialog(props: editItemDialogProps) {
  const { onClose, menu, open } = props;

  const handleClose = () => {
    edit(
      menu.title,
      menu.price,
      menu.idRestaurant,
      menu.description
    );
    onClose(menu);
  };

  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.item.items);
  useEffect(() => {
    if (menu._id) dispatch(getMenuItems(menu._id));
  }, [dispatch, menu._id]);

  let idMenu: string;
  if (menu._id) {
    idMenu = menu._id;
  }

  const handleDeleteItem = (idItem: string | undefined) => {
    if (menu._id && idItem)
      dispatch(deleteMenuItem({ idMenu, idItem }));
  };

  const handleAddItem = () => {
    
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Edition de l'article {menu.title}</DialogTitle>
    </Dialog>
  );
}
