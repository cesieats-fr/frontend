import { useDispatch } from "react-redux";
import { Divider, Stack } from "@mui/material";
import DividedMenu, { IDividedMenuPart } from "../../components/dividedMenu";
import Deliveries from "./deliveries";
import DeliveriesList from "./deliveries/title";
import DeliveryDriver from "./delivery";
import DeliveryList from "./delivery/title";
import { AppDispatch } from "../../store";
import { getDeliveries } from "../../store/reducers/delivery";
import { useEffect } from "react";

function OrderPage() {
  const dispatch = useDispatch<AppDispatch>();

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
      <DividedMenu dividedMenuParts={dividedMenuParts} />
    </Stack>
  );
}

export default OrderPage;
