import * as React from "react";
import Card from "@mui/material/Card";
import { IDelivery } from "cesieats-service-types/src/delivery";
import{CardContent,Typography,Stack,Divider} from "@mui/material";

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
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Delivery;
