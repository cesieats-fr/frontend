import { Card, CardContent, Typography } from "@mui/material";
import { IOrder } from "cesieats-service-types/src/order";

interface IOrderCardProps {
  order: IOrder;
}

function OrdersCard({ order }: IOrderCardProps) {
  return (
    <Card variant="elevation" className="min-w-64">
      <CardContent>
        <Typography variant="h6" color="text.primary" gutterBottom>
          {order.orderState}
        </Typography>
        <Typography variant="body2" color="text.primary" gutterBottom>
          {order.price}
        </Typography>
        <Typography variant="body2" color="text.primary" gutterBottom>
          {order.clientName}
        </Typography>
        <Typography variant="body2" color="text.primary" gutterBottom>
          {order.clientAddress}
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
      </CardContent>
    </Card>
  );
}

export default OrdersCard;
