import { useEffect } from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { IItem, IMenu } from "cesieats-service-types/src/item";
import { editItem } from "../../api/services/item";
import { getMenuItems, deleteMenuItem } from "../../store/reducers/item";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { Title } from "@mui/icons-material";

export interface editItemDialogProps {
  item: IItem;
  open: boolean;
  onClose: (menu: IItem) => void;
}

export function EditItemDialog(props: editItemDialogProps) {
  const { onClose, item, open } = props;

  const handleClose = () => {
    editItem(
        item.title,
        item.price,
        item.idRestaurant,
        item.description
    );
    onClose(item);
  };

  const dispatch = useDispatch<AppDispatch>();


  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Edition de l'article {item.title}</DialogTitle>
    </Dialog>
  );
}
