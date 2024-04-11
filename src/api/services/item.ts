import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_ITEM_URL;


export const addItem = async ( title: string, price: number, idRestaurant: string, description?: string, imageUrl?: string) => {
    const response = await axios.post(`${BASE_URL}/addItem`, {
        title,
        description,
        imageUrl,
        price,
        idRestaurant
    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response;
};

export const editItem = async ( title: string, price: number, idRestaurant: string, description?: string, imageUrl?: string) => {
    const response = await axios.post(`${BASE_URL}/editItem`, {
        title,
        description,
        imageUrl,
        price,
        idRestaurant
    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response;
};

export const getItem = async (id: number) => {
    const response = await axios.get(`${BASE_URL}/getItem/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
};

export const getAllItems = async (idRestaurant?: string) => {
    const response = await axios.get(`${BASE_URL}/getAllItems`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        data: {
            idRestaurant: idRestaurant
        }
    });
    return response.data;
};

export const deleteItem = async (idItem: string) => {
    const response = await axios.delete(`${BASE_URL}/deleteItem`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        data:{
            id: idItem
        }
    });
    return response;
}

export const addMenu = async (title: string, price: number, idRestaurant: string, description?: string, imageUrl?: string) => {
    const response = await axios.post(`${BASE_URL}/addMenu`, {
        title,
        description,
        imageUrl,
        price,
        idRestaurant
    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response;
};

export const editMenu = async ( title: string, price: number, idRestaurant: string, description?: string, imageUrl?: string) => {
    const response = await axios.post(`${BASE_URL}/editMenu`, {
        title,
        description,
        imageUrl,
        price,
        idRestaurant
    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response;
};

export const getMenu = async (id: number) => {
    const response = await axios.get(`${BASE_URL}/getMenu/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
};

export const getAllMenus = async (idRestaurant?: string) => {
    const response = await axios.get(`${BASE_URL}/getAllMenus`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        data: {
            idRestaurant: idRestaurant
        }
    });
    return response.data;
};

export const getMenuItems = async (idMenu: string) => {
    const response = await axios.get(`${BASE_URL}/getMenuItems/${idMenu}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
};

export const deleteMenu = async (idMenu: string) => {
    const response = await axios.delete(`${BASE_URL}/deleteMenu`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        data:{
            id: idMenu
        }
    });
    return response;
}

export const deleteMenuItem = async (idMenu: string, idItem: string) => {
    const response = await axios.delete(`${BASE_URL}/deleteMenuItem`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        data:{
            idMenu: idMenu,
            idItem: idItem
        }
    });
    return response.data;
}

export const linkMenuItem = async (idMenu: string, idItem: string) => {
    const response = await axios.post(`${BASE_URL}/linkMenuItem`, {
        idItem,
        idMenu
    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
};

export const getMenusByRestaurantId = async (idRestaurant: string) => {
    const response = await axios.get(`${BASE_URL}/getMenusByRestaurantId/${idRestaurant}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response;
}

export const getItemsByRestaurantId = async (idRestaurant: string) => {
    const response = await axios.get(`${BASE_URL}/getItemsByRestaurantId/${idRestaurant}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response;
}
