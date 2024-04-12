import axios from 'axios';
import { IDelivery, EDeliveryState } from 'cesieats-service-types/src/delivery';

const BASE_URL = import.meta.env.VITE_API_DELIVERY_URL;

// Private
export const addDelivery = async (delivery: IDelivery) => {
    const response = await axios.post(`${BASE_URL}/addDelivery`, {
        ...delivery
    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
    });
    return response;
};

export const updateDeliveryState = async (orderId: string, state: EDeliveryState) => {
    const response = await axios.put(`${BASE_URL}/updateDeliveryState`, {
        state,
        orderId,
    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
    });
    return response;
};

export const linkDeliver = async (id: string) => {
    const response = await axios.put(`${BASE_URL}/linkDeliver`, {
        id
    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
    });
    return response;
};

export const getDelivery = async (idDelivery: string) => {
    const response = await axios.get(`${BASE_URL}/getDelivery/${idDelivery}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
    });
    return response.data;

}

export const getDeliveries = async () => {
    const response = await axios.get(`${BASE_URL}/getDeliveries`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
    });
    return response;
};

export const deleteDelivery = async (idDelivery: string) => {
    const response = await axios.delete(`${BASE_URL}/deleteDelivery`, {
        data: {
            id: idDelivery
        },
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
    });
    return response.data;
}