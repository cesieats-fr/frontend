// import axios from 'axios';

// // Define the base URL of your API
// const BASE_URL = process.env.API_ACCOUNT_URL;

// // Function to fetch account data
// export const fetchAccountData = async (accountId: string) => {
//     try {
//         const response = await axios.get(`${BASE_URL}/accounts/${accountId}`);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching account data:', error);
//         throw error;
//     }
// };

// // Function to create a new account
// export const createAccount = async (accountData: any) => {
//     try {
//         const response = await axios.post(`${BASE_URL}/accounts`, accountData);
//         return response.data;
//     } catch (error) {
//         console.error('Error creating account:', error);
//         throw error;
//     }
// };

// // Function to update an existing account
// export const updateAccount = async (accountId: string, accountData: any) => {
//     try {
//         const response = await axios.put(`${BASE_URL}/accounts/${accountId}`, accountData);
//         return response.data;
//     } catch (error) {
//         console.error('Error updating account:', error);
//         throw error;
//     }
// };

// // Function to delete an account
// export const deleteAccount = async (accountId: string) => {
//     try {
//         const response = await axios.delete(`${BASE_URL}/accounts/${accountId}`);
//         return response.data;
//     } catch (error) {
//         console.error('Error deleting account:', error);
//         throw error;
//     }
// };