import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_ORDER_URL;


export const addOrder = async (idClient: number, idRestaurant: number, idDelivery?: number) => {
    const response = await axios.post(`${BASE_URL}/addOrder`, {
        idClient,
        idRestaurant,
        idDelivery
    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
};

export const updateOrderState = async (id: number, orderState: number) => {
    const response = await axios.post(`${BASE_URL}/updateOrderState`, {
        id, orderState
    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response;
};

export const getOrder = async (id: number) => {
    const response = await axios.get(`${BASE_URL}/getOrder/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
};

export const getAllClientOrders = async () => {
    const response = await axios.get(`${BASE_URL}/getAllClientOrders`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
};

export const getAllRestaurantOrders = async () => {
    const response = await axios.get(`${BASE_URL}/getAllRestaurantOrders`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
};

export const deleteOrder = async (idOrder: number) => {
    const response = await axios.delete(`${BASE_URL}/deleteOrder`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        data:{
            id: idOrder
        }
    });
    return response.data;

}