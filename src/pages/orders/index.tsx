// import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
// import { useState } from 'react';
// import { login } from "../../api/services/account";
// import { setAccount } from "../../store/reducers/account";
// import { NavLink, redirect } from "react-router-dom";
// import { RootState } from "../../store";
import { AppDispatch } from "../../store";
import { getAllClientOrders } from "../../store/reducers/order";
import { useEffect } from "react";

import { Stack, Divider } from "@mui/material";
import OrderCards from "../../components/orders/ordersCard";
import { Typography } from "@mui/material";

function Orders() {
  const dispatch = useDispatch<AppDispatch>();
  const orders = useSelector((state: RootState) => state.order.orders);

  useEffect(() => {
    dispatch(getAllClientOrders());
  }, [dispatch]);

  // // Nécessite l'id du compte
  // const resultListeOrders = async () => {
  //     const {status, data} = await getAllClientOrders(1, undefined, undefined);

  //     if(status === 200) {
  //         return(
  //             <div className="w-full items-center flex flex-col">
  //             </div>
  //         );
  //     }else {
  //         return(
  //             <h2 className="m-2">Vous n'avez pas de commandes</h2>
  //         );
  //     }
  // };
  return (
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

      <div className="flex flex-wrap justify-center gap-4">
        {orders && orders.map((order, index) => (           
            <OrderCards order={order} key={index} />
          ))}
      </div>
    </Stack>
  );
}

export default Orders;
