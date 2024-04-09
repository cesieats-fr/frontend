import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { IDelivery } from "cesieats-service-types/src/delivery";

interface IDeliveryProps {
  delivery: IDelivery;
}

const Delivery: React.FC<IDeliveryProps> = ({ delivery }) => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom>
          { delivery.restaurantName }
        </Typography>
        <Typography color="text.secondary">
        { delivery.restaurantAddress }
        </Typography>
        <Typography color="text.secondary">
        { delivery.restaurantTelephone }
        </Typography>

        <CardMedia
          height={100}
          component="img"
          image="/static/images/cards/paella.jpg"
          alt="Photo du restau"
        />

        <Typography variant="h4">
        { delivery.clientAddress }
          <br />
        </Typography>
        <Typography>0€</Typography>
      </CardContent>
      <CardActions className="flex justify-center">
        <Button variant="contained" className="" size="small">
          Accepter la livraison
        </Button>
      </CardActions>
    </Card>
  );
};

export default Delivery;
