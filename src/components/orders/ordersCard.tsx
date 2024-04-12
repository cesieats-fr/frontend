import { Card, CardContent, Divider, Stack, Typography } from "@mui/material";
import { IOrder } from "cesieats-service-types/src/order";
import { ReactElement } from "react";

interface IOrderCardProps {
  order: IOrder;
  actions?: ReactElement;
}

const orderState = [ "En attente du restaurant", "Validé", "En livraison", "Livré" ];

function OrdersCard({ order, actions }: IOrderCardProps) {
  return (
    <Card variant="elevation" className="min-w-64">
      <CardContent>
        <Stack spacing={2} divider={<Divider orientation="horizontal" />}>
          <Stack>
            <Typography variant="h6" color="text.primary" gutterBottom>
              État: {orderState[order.orderState]}
            </Typography>
            <Typography variant="body2" color="text.primary" gutterBottom>
              Prix: {order.price}€
            </Typography>
          </Stack>
          
          <Stack>
          <Typography variant="body1" gutterBottom className="text-primaryDark">
              Client
            </Typography>
            <Typography variant="body2" color="text.primary" gutterBottom>
              {order.clientName}
            </Typography>
            <Typography variant="body2" color="text.primary" gutterBottom>
              {order.clientAddress}
            </Typography>
          </Stack>

          <Stack>
            <Typography variant="body1" gutterBottom className="text-primaryDark">
              Restaurant
            </Typography>
            <Typography variant="body2" color="text.primary" gutterBottom>
              {order.restaurantName}
            </Typography>
            <Typography variant="body2" color="text.primary" gutterBottom>
              {order.restaurantAddress}
            </Typography>
            <Typography variant="body2" color="text.primary" gutterBottom>
              {order.restaurantTelephone}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      { actions }
    </Card>
  );
}

export default OrdersCard;
