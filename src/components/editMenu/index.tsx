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

export interface editMenuDialogProps {
  menu: IMenu;
  open: boolean;
  onClose: (menu: IMenu) => void;
}

export function EditMenuDialog(props: editMenuDialogProps) {
  const { onClose, menu, open } = props;

  const handleClose = () => {
    editMenu(
      menu.title,
      menu.price,
      menu.idRestaurant,
      menu.description,
      menu.imageUrl
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
      <DialogTitle>Edition du menu {menu.title}</DialogTitle>
      <Title>Liste des items :</Title>
      <List className="pt-0">
        {items.map((item: IItem) => (
          <ListItem
            key={menu._id}
            onClick={() => {
              handleDeleteItem(item._id);
            }}
            secondaryAction={<Button>Delete</Button>}
          >
            <ListItemText primary={menu.title} />
          </ListItem>
        ))}
      </List>
      <Button onClick={() => handleAddItem}>Ajouter un élément</Button>
    </Dialog>
  );
}
