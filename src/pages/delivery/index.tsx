import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { Divider, Stack } from "@mui/material";
import DividedMenu, { IDividedMenuPart } from "../../components/dividedMenu";
import Deliveries from "./deliveries";
import DeliveriesList from "./deliveries/title";
import DeliveryDriver from "./delivery";
import DeliveryList from "./delivery/title";
import { AppDispatch, RootState } from "../../store";
import { getDeliveries } from "../../store/reducers/delivery";
import { useEffect } from "react";

function OrderPage() {
  const dispatch = useDispatch<AppDispatch>();
  const deliveries = useSelector(
    (state: RootState) => state.delivery.deliveries
  );

  useEffect(() => {
    dispatch(getDeliveries());
  }, [dispatch]);

  const dividedMenuParts: IDividedMenuPart[] = [
    {
      titleComponent: <DeliveriesList />,
      component: <Deliveries />,
    },
    {
      titleComponent: <DeliveryList />,
      component: <DeliveryDriver />,
    },
  ];
  return (
    <Stack
      spacing={5}
      direction="column"
      divider={<Divider orientation="horizontal" flexItem />}
      alignItems="center"
      className="h-full"
    >
      <Typography variant="body1" color="text.primary" gutterBottom>
        Argent gagné:{" "}
        {deliveries.length > 0
          ? deliveries.reduce(
              (acc, delivery) =>
                acc + (typeof delivery.price === "number" ? delivery.price : 0),
              0
            ) + "€"
          : "0€"}
      </Typography>
      <DividedMenu dividedMenuParts={dividedMenuParts} />
    </Stack>
  );
}

export default OrderPage;
