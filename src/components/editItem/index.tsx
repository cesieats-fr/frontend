import { useEffect, useState } from "react";
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
import { TextField } from "@mui/material";

export interface editItemDialogProps {
  item: IItem;
  open: boolean;
  onClose: (menu: IItem) => void;
}

export function EditItemDialog(props: editItemDialogProps) {
  const { onClose, item, open } = props;

  const [title, setTitle] = useState(item.title);
  const [price, setPrice] = useState(item.price);
  const [description, setDescription] = useState(item.description);
  
  const handleClose = () => {
    onClose(item);
  };
  const handleValidate = () => {
    editItem(
      item.title,
      item.price,
      item.idRestaurant,
      item.description
  );
    onClose(item);
  }

  const dispatch = useDispatch<AppDispatch>();


  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Edition de l'article {item.title}</DialogTitle>
      <TextField label="Titre"          variant="outlined" className="w-full" required margin="dense" value={title}         onChange={(e) => setTitle(e.target.value)}              />
      <TextField label="Description"    variant="outlined" className="w-full" required margin="dense" value={description}   onChange={(e) => setDescription(e.target.value)}        />
      <TextField label="Prix"           variant="outlined" className="w-full" required margin="dense" value={price}         onChange={(e) => setPrice(parseInt(e.target.value))}    type="number"/>
      <Button onClick={handleValidate}>Valider</Button>
    </Dialog>
  );
}
