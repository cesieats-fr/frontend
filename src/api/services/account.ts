import axios from 'axios';
import { IIdentity } from 'cesieats-service-types/src/identity';

const BASE_URL = import.meta.env.VITE_API_ACCOUNT_URL;

// Public
export const register = async (forname: string, name: string, idIdentity: string) => {
    const response = await axios.post(`${BASE_URL}/register`, {
        data: {
            forname, name, idIdentity
        },
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
};

export const login = async (email: string, password: string) => {
    const response = await axios.post(`${BASE_URL}/login`, {
        data: {
            email, password
        },
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
};

// Private
export const edit = async (identity: IIdentity) => {
    const response = await axios.post(`${BASE_URL}/edit`, {
        data: {
            ...identity
        },
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
};

export const createApiKey = async () => {
    const response = await axios.post(`${BASE_URL}/createApiKey`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
};