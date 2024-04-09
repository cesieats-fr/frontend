import Restaurant from "./restaurant";

import { IOrder } from 'cesieats-service-types/src/order';

const orders: IOrder[] = [
  {
    idRestaurant: "1",
    idClient: Object("507f1f77bcf86cd799439011"),
    idDelivery: Object("507f1f77bcf86cd799439011"),
    orderState: 1,
    price: 100,
    deliveryEarning: 10,
  },
];



function Delivery() {
  return (
    <>      
      <div className="">
        {orders && orders.map((Order, index) => {
            return (
              <Restaurant key={index} order={Order} />
            );
          })}
      </div>
    </>
  );
}

export default Delivery;
