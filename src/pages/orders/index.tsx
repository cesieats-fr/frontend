import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getAllClientOrders } from "../../store/reducers/order";
import { useEffect } from "react";

import { Stack, Divider, Typography } from "@mui/material";
import OrdersCard from "../../components/orders/ordersCard";
import { EOrderState } from "../../enums";

function Orders() {
  const dispatch = useDispatch<AppDispatch>();
  const orders = useSelector((state: RootState) => state.order.orders);

  useEffect(() => {
    dispatch(getAllClientOrders());
  }, [dispatch]);

  return (
    <Stack>
      <Stack
        spacing={5}
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <Typography
          className="m-2"
          variant="body1"
          color="text.primary"
          gutterBottom
        >
          Historiques des commandes en cours:
        </Typography>

        <div className="flex flex-wrap justify-center gap-4 min-h-64">
          {orders &&
            orders
              .filter((order) => order.orderState !== EOrderState.Delivered)
              .map((order, index) => <OrdersCard order={order} key={index} />)}
        </div>
      </Stack>
      <Stack
        spacing={5}
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <Typography
          className="m-2"
          variant="body1"
          color="text.primary"
          gutterBottom
        >
          Historiques des commandes :
        </Typography>

        <div className="flex flex-wrap justify-center gap-4 ">
          {orders &&
            orders
              .filter((order) => order.orderState === EOrderState.Delivered)
              .map((order, index) => <OrdersCard order={order} key={index} />)}
        </div>
      </Stack>
    </Stack>
  );
}

export default Orders;
