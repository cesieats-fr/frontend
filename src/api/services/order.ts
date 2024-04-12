import axios from "axios";
import { IOrderItems, IOrderMenus } from "cesieats-service-types/src/order";

const BASE_URL = import.meta.env.VITE_API_ORDER_URL;

export const addOrder = async (
  idRestaurant: string,
  price: number,
  restaurantName: string,
  restaurantAddress: string,
  restaurantTelephone: string,
  idAccountRestaurant: string,
  clientAddress: string,
  clientName: string,
) => {
  const response = await axios.post(
    `${BASE_URL}/addOrder`,
    {
      idRestaurant,
      price,
      restaurantName,
      restaurantAddress,
      restaurantTelephone,
      idAccountRestaurant,
      clientAddress,
      clientName,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};

export const addOrderItems = async (
  orderItems: IOrderItems[]
) => {
  const response = await axios.post(`${BASE_URL}/addOrderItems`, 
    {
      orderItems
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    }
  );
  return response;
}

export const addOrderMenus = async (
  orderMenus: IOrderMenus[]
) => {
  const response = await axios.post(`${BASE_URL}/addOrderMenus`, 
    {
      orderMenus
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    }
  );
  return response;
}

export const updateOrderState = async (id: string, orderState: number) => {
  const response = await axios.post(
    `${BASE_URL}/updateOrderState`,
    {
      id,
      orderState,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};

export const getOrder = async (id: number) => {
  const response = await axios.get(`${BASE_URL}/getOrder/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const getAllClientOrders = async () => {
  const response = await axios.get(`${BASE_URL}/getAllClientOrders`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const getAllRestaurantOrders = async () => {
  const response = await axios.get(`${BASE_URL}/getAllRestaurantOrders`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const deleteOrder = async (idOrder: number) => {
  const response = await axios.delete(`${BASE_URL}/deleteOrder`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: {
      id: idOrder,
    },
  });
  return response.data;
};

export const linkDelivery = async (orderId: string, deliveryId: string) => {
  const response = await axios.post(`${BASE_URL}/linkDelivery`, {
    orderId,
    deliveryId,
  }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};


