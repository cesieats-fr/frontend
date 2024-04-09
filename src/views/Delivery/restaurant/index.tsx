import React from "react";
import { IOrder } from "cesieats-service-types/src/order";

interface IDeleveryProps {
  order: IOrder;
}

const Restaurant: React.FC<IDeleveryProps> = ({ order }) => {
  return (
    <div>
      <div className=""></div>
      <div className="border-2 border-black rounded">
        <h1>{order.idRestaurant}</h1>
        <h1>{order.idRestaurant}</h1>
        <h1>{order.idRestaurant}</h1>
        <p>Photo du restaurant si possible</p>
        <h1>{String(order.idClient)}</h1>
        <h1>{String(order.deliveryEarning)}</h1>
      </div>
    </div>
  );
};

export default Restaurant;
