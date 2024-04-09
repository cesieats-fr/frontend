import axios from 'axios';
import { ISponsor } from 'cesieats-service-types/src/sponsor';

const BASE_URL = import.meta.env.VITE_API_RESTAURANT_URL;

export const addSponsor = async (idSponsor: string, idSponsored: string) => {
    try {
        const response = await axios.post(`${BASE_URL}/addSponsor`, {
            idSponsor, idSponsored
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

export const getSponsor = async (id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/getSponsor/${id}`,{
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

export const getAllSponsor = async (idSponsor: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/getAllSponsor`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                idSponsor: idSponsor
            }
        });
        return response;
    } catch (error) {
        console.error('Error fetching account data:', error);
        throw error;
    }
};

export const deleteSponsor = async (id: number) => {
    try {
        const response = await axios.delete(`${BASE_URL}/deleteSponsor`,{
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