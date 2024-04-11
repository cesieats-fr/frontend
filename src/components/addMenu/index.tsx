import { useState } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { addMenu } from "../../store/reducers/item";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { TextField } from "@mui/material";

export interface addMenuDialogProps {
  open: boolean;
  onClose: () => void;
}

export function AddMenuDialog({ onClose, open }: addMenuDialogProps) {
  const restaurant = useSelector((state: RootState) => state.restaurant.accountRestaurant);
  
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  const handleClose = () => {
    onClose();
  };

  const handleValidate = () => {
    dispatch(addMenu({title, price, idRestaurant: restaurant._id!, description}));
    onClose();
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Ajout d'un menu</DialogTitle>
      <TextField label="Titre"          variant="outlined" className="w-full" required margin="dense" value={title}         onChange={(e) => setTitle(e.target.value)}              />
      <TextField label="Description"    variant="outlined" className="w-full" required margin="dense" value={description}   onChange={(e) => setDescription(e.target.value)}        />
      <TextField label="Prix"           variant="outlined" className="w-full" required margin="dense" value={price}         onChange={(e) => setPrice(parseInt(e.target.value))}    type="number"/>
      <Button onClick={handleValidate}>Ajouter le menu</Button>
    </Dialog>
  );
}
