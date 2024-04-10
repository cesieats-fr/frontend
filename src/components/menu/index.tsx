import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { IMenu } from "cesieats-service-types/src/item";

interface IMenuProps {
  menu: IMenu;
}

function MenuCard({ menu }: IMenuProps) {
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
        <Button variant="contained" className="" size="small">
          Editer le menu
        </Button>
      </CardActions>
    </Card>
  );
};

export default MenuCard;
