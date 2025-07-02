import axios from "axios";

let getToken;
try {
    const userFromStorage = localStorage.getItem("user");
    getToken = userFromStorage ? JSON.parse(userFromStorage) : null;
} catch (e) {
    getToken = null;
    console.error("Invalid JSON in localStorage 'user':", e);
}

let token = getToken?.accessToken || "";

const api = axios.create({
    baseURL: "https://localhost:7216/api",
    headers: {
        Authorization: `Bearer ${token}`
    }
})

// Getting all user inventory
export const GetAllInventoryAsync = async (userId) => {
    try {
        const res = await api.get(`/Inventory/get-inventory/${userId}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}


// Delete inventory
export const DeleteInventoryAsync = async (userId, inventoryId) => {
    try {
       let res = await api.delete(`/Inventory/delete-inventory/${userId}/${inventoryId}`)
    } catch (error) {
        console.log(error);
    }
}


// Create Inventory
export const CreateInventoryAsync = async (userId, body) => {
    try {
        const res = await api.post(`/Inventory/create-iventory/${userId}`, body)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}


// Update inventory
export const UpdateInventoryAsync = async (userId, inventoryId, body) => {
    try {
        const res = await api.put(`/Inventory/update-inventory/${userId}/${inventoryId}`, body)
    } catch (error) {
        console.log(error);
    }
}


// Filter inventories
export const FilterInventoryAsync = async (userId, body) => {
    try {
        const res = await api.get(`/Inventory/filter-inventory/${userId}`, body);

        return res.data;
    } catch (error) {
        console.log(error)
    }
}