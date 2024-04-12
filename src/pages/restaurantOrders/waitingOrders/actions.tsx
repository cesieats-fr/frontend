import { CardActions, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { IOrder } from "cesieats-service-types/src/order";
import { EOrderState } from "../../../enums";
import { updateOrderStateRestaurant } from "../../../store/reducers/order";

interface IWaitingOrdersActionsProps {
    order: IOrder;
}

function WaitingOrdersActions({ order }: IWaitingOrdersActionsProps) {
    const dispatch = useDispatch<AppDispatch>();

    const handleApproveOrder = async () => {
        dispatch(updateOrderStateRestaurant({ orderId: order._id!, orderState: EOrderState.Approved }));
    };

    return (
        <CardActions className="flex justify-center">
            <Button variant="contained" onClick={handleApproveOrder}>Approuver la commande</Button>
        </CardActions>
    )
}

export default WaitingOrdersActions;