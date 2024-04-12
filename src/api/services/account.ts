import axios from "axios";
import { IAccount } from "cesieats-service-types/src/account";

const BASE_URL = import.meta.env.VITE_API_ACCOUNT_URL;

// Public
export const register = async (account: IAccount) => {
  const response = await axios.post(
    `${BASE_URL}/register`,
    {
      ...account,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};

export const login = async (email: string, password: string) => {
  const response = await axios.post(
    `${BASE_URL}/login`,
    {
      email,
      password,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};

export const loginWithToken = async () => {
  const response = await axios.post(
    `${BASE_URL}/loginWithToken`,
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};

// Private
export const edit = async (account: IAccount) => {
  const response = await axios.put(
    `${BASE_URL}/edit`,
    {
      ...account,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};

export const editAccountByID = async (account: IAccount, idAccount: string) => {
  const response = await axios.put(
    `${BASE_URL}/editAccountByID`,
    {
      ...account,
      idAccount,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};

export const deleteAccount = async () => {
  const response = await axios.delete(`${BASE_URL}/delete`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const deleteAccountById = async (idAccount: string) => {
  const response = await axios.delete(`${BASE_URL}/deleteAccountById`, {
    data: { idAccount },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const getAllClientAccounts = async () => {
  const response = await axios.get(`${BASE_URL}/getAllClientAccounts`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const createApiKey = async () => {
  const response = await axios.post(
    `${BASE_URL}/createApiKey`,
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};
