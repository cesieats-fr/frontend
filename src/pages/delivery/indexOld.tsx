import { useDispatch, useSelector } from "react-redux";

import Delivery from "../../components/delivery";
import { IDelivery } from "cesieats-service-types/src/delivery";
import { getDeliveries } from "../../store/reducers/delivery";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../../store";

function DeliveryPage() {
  const dispatch = useDispatch<AppDispatch>();
  const deliveries = useSelector((state: RootState) => state.delivery.deliveries);

  useEffect(() => {
    dispatch(getDeliveries());
  }, [dispatch]);

  return (
    <div className="justify-center flex flex-wrap gap-4 flex-col">
            <div className="flex flex-wrap justify-center gap-4">
        {deliveries &&
          deliveries.map((delivery: IDelivery, index: number) => (
            <Delivery key={index} delivery={delivery} />
          ))}
      </div>
    </div>
  );
}

export default DeliveryPage;
