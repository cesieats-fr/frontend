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
    <Card sx={{ minWidth: 275, border: "2px solid black" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          { delivery.restaurantName } 
        </Typography>
        <Typography variant="h4" component="div">
          ADRESSE DU RESTAU
        </Typography>
        <Typography variant="h4" component="div">
          téléphone du restaurant
        </Typography>

        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Photo du restau "
        />

        <Typography variant="h4">
          Adresse client
          <br />
        </Typography>
        <Typography variant="h4">argent gagn</Typography>
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
