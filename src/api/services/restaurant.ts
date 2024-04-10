import axios from 'axios';
import { IRestaurant } from 'cesieats-service-types/src/restaurant';

const BASE_URL = import.meta.env.VITE_API_RESTAURANT_URL;

export const fetchRestaurants = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/getAllRestaurants`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching account data:', error);
        throw error;
    }
};

export const addRestaurant = async (title: string, description: string, address: string, closingTime: string, openingTime: string, deliveryPrice: number, telephone: number) => {
    try {
        const response = await axios.post(`${BASE_URL}/addRestaurant`, {
            title, description, address, closingTime, openingTime, deliveryPrice, telephone
        },{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response;
    } catch (error) {
        console.error('Error fetching account data:', error);
        throw error;
    }
};

export const editRestaurant = async (restaurant: IRestaurant) => {
    try {
        const response = await axios.post(`${BASE_URL}/editRestaurant`, {
            ...restaurant
        },{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response;
    } catch (error) {
        console.error('Error fetching account data:', error);
        throw error;
    }
};

export const getRestaurantByAccountId = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/getRestaurant`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response;
    } catch (error) {
        console.error('Error fetching account data:', error);
        throw error;
    }
};
export const deleteRestaurant = async (id: number) => {
    try {
        const response = await axios.delete(`${BASE_URL}/deleteRestaurant`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                id: id
            }
        });
        return response;
    } catch (error) {
        console.error('Error fetching account data:', error);
        throw error;
    }
};