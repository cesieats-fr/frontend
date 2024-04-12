import DividedMenu, { IDividedMenuPart } from "../../components/dividedMenu";
import WaitingOrders from "./waitingOrders";
import WaitingOrdersTitle from "./waitingOrders/title";
import CurrentOrders from "./currentOrders";
import CurrentOrdersTitle from "./currentOrders/title";
import OldOrders from "./oldOrders";
import OldOrdersTitle from "./oldOrders/title";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getAllRestaurantOrders } from "../../store/reducers/order";
import { IOrder } from "cesieats-service-types/src/order";
import { useEffect } from "react";

function RestaurantOrders() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllRestaurantOrders());
  }, [dispatch])

  const restaurantOrders: IOrder[] = useSelector((state: RootState) => state.order.restaurantOrders);

  const dividedMenuPart: IDividedMenuPart[] = [
    {
      component: <WaitingOrders orders={restaurantOrders} />,
      titleComponent: <WaitingOrdersTitle />,
    },
    {
      component: <CurrentOrders orders={restaurantOrders} />,
      titleComponent: <CurrentOrdersTitle />,
    },
    {
      component: <OldOrders orders={restaurantOrders} />,
      titleComponent: <OldOrdersTitle />,
    },
  ]

  return (
    <DividedMenu dividedMenuParts={dividedMenuPart} />
  );
}

export default RestaurantOrders;