import { useState } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { TextField } from "@mui/material";
import { addItem } from "../../store/reducers/item";

export interface addItemDialogProps {
  open: boolean;
  onClose: () => void;
}

export function AddItemDialog({ onClose, open}: addItemDialogProps) {
  const restaurant = useSelector((state: RootState) => state.restaurant.accountRestaurant);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  const handleClose = () => {
    onClose();
  };

  const handleValidate = () => {
    dispatch(addItem({title, price, idRestaurant: restaurant._id!, description}));
    onClose();
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Ajout d'un article</DialogTitle>
      <TextField label="Titre"          variant="outlined" className="w-full" required margin="dense" value={title}         onChange={(e) => setTitle(e.target.value)}              />
      <TextField label="Description"    variant="outlined" className="w-full" required margin="dense" value={description}   onChange={(e) => setDescription(e.target.value)}        />
      <TextField label="Prix"           variant="outlined" className="w-full" required margin="dense" value={price}         onChange={(e) => setPrice(parseInt(e.target.value))}    type="number"/>
      <Button onClick={handleValidate}>Ajouter l'article</Button>
    </Dialog>
  );
}
