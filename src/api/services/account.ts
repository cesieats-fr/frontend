import axios from 'axios';
import { IAccount } from 'cesieats-service-types/src/account';

const BASE_URL = process.env.API_ACCOUNT_URL;

// Public
export const register = async (email: string, password: string) => {
    const response = await axios.post(`${BASE_URL}/registerAccount`, {
        data: {
            email, password
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
export const deleteAccount = async () => {
    const response = await axios.post(`${BASE_URL}/delete`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
};

export const editAccount = async (account: IAccount) => {
    const response = await axios.post(`${BASE_URL}/login`, {
        data: {
            ...account
        },
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
};