import { useSelector } from "react-redux";
import Delivery from "../../../components/delivery";
import { IDelivery } from "cesieats-service-types/src/delivery";
import { RootState } from "../../../store";
import { EDeliveryState } from "../../../enums";

function DeliveryPage() {
  const deliveries = useSelector(
    (state: RootState) => state.delivery.deliveries
  );

  return (
    <div className="justify-center flex flex-wrap gap-4 flex-col">
      <div className="flex flex-wrap justify-center gap-4">
        {deliveries &&
          deliveries
            .filter(
              (delivery) =>
                delivery.state === EDeliveryState.Delivering ||
                delivery.state === EDeliveryState.GoingToRestaurant
            )
            .map((delivery: IDelivery, index: number) => (
              <Delivery key={index} delivery={delivery} />
            ))}
      </div>
    </div>
  );
}

export default DeliveryPage;
