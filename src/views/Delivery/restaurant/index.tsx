import React from "react";
import { IOrder } from "cesieats-service-types/src/order";
interface IDeleveryProps {
  order: IOrder;
}

const Restaurant: React.FC<IDeleveryProps> = ({ order }) => {
  return (
    <div>

<div>{/* Deuxième div ici */}</div>
      <div className="border-2 border-black rounded">
        <h1>{order.idRestaurant}</h1>
        <p>petite photo en modo full chill</p>
      </div>  
    </div>
  );
};

export default Restaurant;
