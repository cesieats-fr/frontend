import { Stack } from "@mui/material";
import { IOrder } from "cesieats-service-types/src/order";
import OrdersCard from "../../../components/orders/ordersCard";
import { EOrderState } from "../../../enums";
import WaitingOrdersActions from "./actions";

interface IWaitingOrdersProps {
    orders: IOrder[];
}

function WaitingOrders({ orders }: IWaitingOrdersProps) {

    return (
        <Stack>
            {orders &&
                orders.filter((order) => order.orderState === EOrderState.WaitingForApproval).map((order, index) => (
                    <OrdersCard order={order} actions={<WaitingOrdersActions order={order} />} key={index} />
                ))
            }
        </Stack>
    );
}

export default WaitingOrders;