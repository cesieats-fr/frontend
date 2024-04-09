import { useDispatch, useSelector } from "react-redux";

import Delivery from "../../components/delivery";
import Chip from "@mui/material/Chip";
import { IDelivery } from "cesieats-service-types/src/delivery";
import { getDeliveries } from "../../store/reducers/delivery";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../../store";

function DeliveryView() {
  const dispatch = useDispatch<AppDispatch>();
  const deliveries = useSelector((state: RootState) => state.delivery.deliveries);

  useEffect(() => {
    dispatch(getDeliveries());
  }, [dispatch]);

  return (
    <>
      <div>
        <div className="justify-center flex flex-wrap gap-4 flex-col">
          <Chip
            label={
              <span>
                <span>10,0</span>
                <span className="text-primaryLighter font-bold"> €</span>
              </span>
            }
            variant="outlined"
            style={{ backgroundColor: "black", color: "white" }}
          />
          <div className="flex flex-wrap justify-center gap-4">
            {deliveries &&
              deliveries.map((delivery: IDelivery, index: number) => (
                <Delivery key={index} delivery={delivery} />
              ))}
          </div>
        </div>
        {/* // <Restaurant key={index} order={Order} /> */}
      </div>
    </>
  );
}

export default DeliveryView;
