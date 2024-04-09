import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_RESTAURANT_URL;

export const fetchRestaurants = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/getAllRestaurants`);
        return response.data;
    } catch (error) {
        console.error('Error fetching account data:', error);
        throw error;
    }
};
