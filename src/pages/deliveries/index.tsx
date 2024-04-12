import { useDispatch, useSelector } from "react-redux";

import Deliveries from "../../components/deliveries";
import { IDelivery } from "cesieats-service-types/src/delivery";
import { getDeliveries } from "../../store/reducers/delivery";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../../store";
import { Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { EDeliveryState } from "../../enums";

function DeliveryPage() {
  const dispatch = useDispatch<AppDispatch>();
  const deliveries = useSelector(
    (state: RootState) => state.delivery.deliveries
  );

  useEffect(() => {
    dispatch(getDeliveries());
  }, [dispatch]);

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
        Historiques des livraisons:
      </Typography>

      <div className="flex flex-wrap justify-center gap-4">
        {deliveries &&
          deliveries.filter((delivery) => delivery.state === EDeliveryState.Delivered).map((delivery: IDelivery, index: number) => (
            <Deliveries key={index} delivery={delivery} />
          ))}
      </div>
    </Stack>
  );
}

export default DeliveryPage;
