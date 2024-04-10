import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { IMenu } from "cesieats-service-types/src/item";
// import { getMenuItems } from "../../api/services/item";
import { EditMenuDialog } from "../editMenu";
import { useState } from "react";

interface IMenuProps {
  menu: IMenu;
}

function MenuCard({ menu }: IMenuProps) {

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }
  // const itemsMenu = async () => {
  //   if(menu._id){
  //     const res =  await getMenuItems(menu._id);
  //     return res.data;
  //   }
  // }
  
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom>
          { menu.title }
        </Typography>
        <Typography color="text.secondary">
        { menu.description }
        </Typography>

        <CardMedia
          height={100}
          component="img"
          image="/static/images/cards/paella.jpg"
          alt="Photo du restau"
        />

        <Typography>{ menu.price.toString() + "€"}</Typography>
      </CardContent>
      <CardActions className="flex justify-center">
        <Button variant="contained" className="" size="small" onClick={handleClickOpen}>
          Editer le menu
        </Button>
        <EditMenuDialog menu={menu} open={open} onClose={handleClose} />
      </CardActions>
    </Card>
  );
}

export default MenuCard;
