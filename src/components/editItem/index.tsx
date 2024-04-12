import { useState } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { IItem } from "cesieats-service-types/src/item";
import { editItem } from "../../store/reducers/item"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { TextField } from "@mui/material";

export interface editItemDialogProps {
  item: IItem;
  open: boolean;
  onClose: () => void;
}

export function EditItemDialog({ onClose, item, open }: editItemDialogProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [title, setTitle] = useState(item.title);
  const [price, setPrice] = useState(item.price);
  const [description, setDescription] = useState(item.description);
  
  const handleClose = () => {
    onClose();
  };
  const handleValidate = () => {
    dispatch(editItem({ title, price, description }));
    onClose();
  }


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
