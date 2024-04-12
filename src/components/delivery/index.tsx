import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IDelivery } from "cesieats-service-types/src/delivery";
import { Stack, Divider, CardActions } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { linkDeliver } from "../../store/reducers/delivery";

interface IDeliveryProps {
  delivery: IDelivery;
}

const Delivery: React.FC<IDeliveryProps> = ({ delivery }) => {

  const dispatch = useDispatch<AppDispatch>();
  const handleAcceptDelivery = () => {
    dispatch(linkDeliver(delivery._id!));    
  }

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
    <CardActions>
      <Stack direction="row" justifyContent="center" className="min-w-full">
        <Button variant="contained" size="small" onClick={handleAcceptDelivery}>
          Accepter la livraison
        </Button>
      </Stack>
    </CardActions>
  </Card>
  );
};

export default Delivery;
