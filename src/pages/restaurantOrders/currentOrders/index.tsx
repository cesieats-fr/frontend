import { Stack } from "@mui/material";
import { IOrder } from "cesieats-service-types/src/order";
import { EOrderState } from "../../../enums";
import OrdersCard from "../../../components/orders/ordersCard";
import CurrentOrdersActions from "./actions";

interface ICurrentOrdersProps {
    orders: IOrder[];
}

function CurrentOrders({ orders }: ICurrentOrdersProps) {
    return (
        <Stack>
            {orders &&
                orders.filter((order) => order.orderState === EOrderState.Approved || order.orderState === EOrderState.WaitingForDelivery).map((order, index) => (
                    <OrdersCard order={order} key={index} actions={<CurrentOrdersActions order={order} />} />
                ))
            }
        </Stack>
    );
}

export default CurrentOrders;