import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IDelivery } from "cesieats-service-types/src/delivery";
import { Stack, Divider, CardActions, Button } from "@mui/material";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { updateDeliveryState } from "../../store/reducers/delivery";
import { EDeliveryState, EOrderState } from "../../enums";
import { updateOrderStateRestaurant } from "../../store/reducers/order";


interface IDeliveryProps {
  delivery: IDelivery;
}

const AcceptedDelivery: React.FC<IDeliveryProps> = ({ delivery }) => {
  const deliveriesState = ["En Attente", "En route vers le restaurant", "Livraison en cours", "Livraison terminée"]

  const dispatch = useDispatch<AppDispatch>();
  const handlePickupDelivery = () => {
    dispatch(updateDeliveryState({ deliveryId: delivery._id!, deliveryState: EDeliveryState.Delivering }));    
  };

  const handleFinishDelivery = () => {
    dispatch(updateDeliveryState({ deliveryId: delivery._id!, deliveryState: EDeliveryState.Delivered }));  
    dispatch(updateOrderStateRestaurant({ orderId: delivery.idOrder!, orderState: EOrderState.Delivered }));    
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
        <Stack direction="row" spacing={2} justifyContent="center">
          <Typography variant="body1">{deliveriesState[delivery.state]}</Typography>
        </Stack>
      </Stack>
    </CardContent>
    <CardActions>
      <Stack direction="row" justifyContent="center" className="min-w-full">
        {delivery && delivery.state === EDeliveryState.GoingToRestaurant &&
          <Button variant="contained" size="small" onClick={handlePickupDelivery}>
            Commande récupérée
          </Button>
        }
        {delivery && delivery.state === EDeliveryState.Delivering &&
          <Button variant="contained" size="small" onClick={handleFinishDelivery}>
            Commande livrée
          </Button>
        }
      </Stack>
    </CardActions>
  </Card>
  );
};

export default AcceptedDelivery;
