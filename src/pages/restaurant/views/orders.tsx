import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurantOrders } from "../../../store/reducers/order";
import { RootState, AppDispatch } from "../../../store";
import { useEffect } from "react";

function OrdersView() {
    const dispatch = useDispatch<AppDispatch>();

    const orders = useSelector((state: RootState) => state.order.orders);

    useEffect(() => {
        dispatch(getAllRestaurantOrders());
    }, [dispatch])

    return (
        <div>
            <Typography>
                Bienvenue sur les commandes
            </Typography>
        </div>
    );
}

export default OrdersView;
