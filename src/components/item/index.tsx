import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia, Grid } from "@mui/material";
// import { getMenuItems } from "../../api/services/item";
import { EditMenuDialog } from "../editMenu";
import { useState } from "react";
import { IItem } from "cesieats-service-types/src/item";
import { EditItemDialog } from "../editItem";

interface IItemProps {
  item: IItem;
  onDelete: (itemId: string) => void;
}

function ItemCard({ item, onDelete }: IItemProps) {

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    if(item._id)
      onDelete(item._id)
  };
  
  return (
    <Grid item xs={4}>
      <Card>
        <CardContent>
          <Typography gutterBottom>
            { item.title }
          </Typography>
          <Typography color="text.secondary">
          { item.description }
          </Typography>

          <CardMedia
            height={100}
            component="img"
            image="/static/images/cards/paella.jpg"
            alt="Photo du restau"
          />

        <Typography>{ item.price.toString() + "€"}</Typography>
      </CardContent>
      <CardActions className="flex justify-center">
        <Button variant="contained" className="" size="small" onClick={handleClickOpen}>
          Editer l'article
        </Button>
        <Button variant="contained" className="" size="small" onClick={handleDelete}>
          Supprimer l'article
        </Button>
        <EditItemDialog item={item} open={open} onClose={handleClose} />
      </CardActions>
    </Card>
    </Grid>
  );
}

export default ItemCard;
