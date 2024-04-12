import { CardActions, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { IOrder } from "cesieats-service-types/src/order";
import { EOrderState, EDeliveryState } from "../../../enums";
import { linkDelivery, updateOrderStateRestaurant } from "../../../store/reducers/order";
import { addDelivery } from "../../../api/services/delivery";
import { IDelivery } from "cesieats-service-types/src/delivery";
import { addDelivery as addDeliveryReducer } from "../../../store/reducers/delivery";

interface IWaitingOrdersActionsProps {
    order: IOrder;
}

function CurrentOrdersActions({ order }: IWaitingOrdersActionsProps) {
    const dispatch = useDispatch<AppDispatch>();

    const handleCompleteOrder = async () => {
        dispatch(updateOrderStateRestaurant({ orderId: order._id!, orderState: EOrderState.WaitingForDelivery }));
        const delivery: IDelivery = {
            clientAddress: order.clientAddress,
            idClient: order.idClient,
            idOrder: order._id!,
            idRestaurant: order.idRestaurant,
            restaurantAddress: order.restaurantAddress,
            restaurantName: order.restaurantName,
            restaurantTelephone: order.restaurantTelephone,
            state: EDeliveryState.Waiting,
        }
        const response = await addDelivery(delivery);
        const newDelivery: IDelivery = response.data;
        dispatch(addDeliveryReducer(newDelivery));
        dispatch(linkDelivery({ deliveryId: newDelivery._id!, orderId: order._id! }));
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