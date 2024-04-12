import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IDelivery } from "cesieats-service-types/src/delivery";
import { Stack, Divider } from "@mui/material";


interface IDeliveryProps {
  delivery: IDelivery;
}

const AcceptedDelivery: React.FC<IDeliveryProps> = ({ delivery }) => {  
 
  const deliveriesState = ["En Attente", "En route vers le restaurant", "Livraison en cours", "Livraison terminée"]
  
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
          <Typography variant="body1">{deliveriesState[delivery.state]}</Typography>
        </Stack>     
      </Stack>
    </CardContent>
  </Card>
  );
};

export default AcceptedDelivery;
