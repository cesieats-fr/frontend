import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { IDelivery } from "cesieats-service-types/src/delivery";
import { Stack, Divider } from "@mui/material";

interface IDeliveryProps {
  delivery: IDelivery;
}

const Delivery: React.FC<IDeliveryProps> = ({ delivery }) => {
  return (   
    <Card>
    <CardContent>
      <Stack
        direction="column"
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <Stack direction="column" spacing={2}>
          <Typography variant="body1" gutterBottom>
            {delivery.restaurantName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Adresse: {delivery.restaurantAddress}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Téléphone: {delivery.restaurantTelephone}
          </Typography>
        </Stack>
        <Stack direction="column" spacing={2}>
          <Typography variant="body1">
            {delivery.clientAddress}             
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Typography variant="body1">{delivery.price}€</Typography>
        </Stack>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" className="" size="small">
          Accepter la livraison
        </Button>
        </Stack>
      </Stack>
    </CardContent>
  </Card>
  );
};

export default Delivery;
