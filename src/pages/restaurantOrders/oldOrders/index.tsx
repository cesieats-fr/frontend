import { Stack } from "@mui/material";
import { IOrder } from "cesieats-service-types/src/order";
import { EOrderState } from "../../../enums";
import OrdersCard from "../../../components/orders/ordersCard";

interface IOldOrdersProps {
    orders: IOrder[];
}

function OldOrders({ orders }: IOldOrdersProps) {
    return (
        <Stack>
            {orders &&
                orders.filter((order) => order.orderState === EOrderState.Delivered).map((order, index) => <OrdersCard order={order} key={index} />)
            }
        </Stack>
    );
}

export default OldOrders;