import { useState } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { IMenu } from "cesieats-service-types/src/item";
import { editMenu } from "../../api/services/item";
import { TextField } from "@mui/material";

export interface editMenuDialogProps {
  menu: IMenu;
  open: boolean;
  onClose: (menu: IMenu) => void;
}

export function EditMenuDialog(props: editMenuDialogProps) {
  const { onClose, menu, open } = props;

  const [title, setTitle] = useState(menu.title);
  const [price, setPrice] = useState(menu.price);
  const [description, setDescription] = useState(menu.description);
  
  const handleClose = () => {
    onClose(menu);
  };

  const handleValidate = () => {
    editMenu(
      menu.title,
      menu.price,
      menu.idRestaurant,
      menu.description
    );
    onClose(menu);
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Edition du menu {menu.title}</DialogTitle>
      <TextField label="Titre"          variant="outlined" className="w-full" required margin="dense" value={title}         onChange={(e) => setTitle(e.target.value)}              />
      <TextField label="Description"    variant="outlined" className="w-full" required margin="dense" value={description}   onChange={(e) => setDescription(e.target.value)}        />
      <TextField label="Prix"           variant="outlined" className="w-full" required margin="dense" value={price}         onChange={(e) => setPrice(parseInt(e.target.value))}    type="number"/>
      <Button onClick={handleValidate}>Valider</Button>
    </Dialog>
  );
}
