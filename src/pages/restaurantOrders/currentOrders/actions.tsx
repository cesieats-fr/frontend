import { CardActions, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { IOrder } from "cesieats-service-types/src/order";
import { EOrderState } from "../../../enums";
import { updateOrderStateRestaurant } from "../../../store/reducers/order";

interface IWaitingOrdersActionsProps {
    order: IOrder;
}

function CurrentOrdersActions({ order }: IWaitingOrdersActionsProps) {
    const dispatch = useDispatch<AppDispatch>();

    const handleCompleteOrder = async () => {
        dispatch(updateOrderStateRestaurant({ orderId: order._id!, orderState: EOrderState.WaitingForDelivery }));
    };

    return (
        <CardActions className="flex justify-center">
            {order && order.orderState === EOrderState.Approved &&
                <Button variant="contained" onClick={handleCompleteOrder}>Commande prête</Button>
            }
        </CardActions>
    )
}

export default CurrentOrdersActions;