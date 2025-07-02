import axios from "axios";
import { GetToken } from "../tools/ApiTools";


let token = GetToken();

const api = axios.create({
    baseURL: "https://localhost:7216/api",
    headers: {
        Authorization: `Bearer ${token}`
    }
})


// Get all items
export const GetAllItemsAsync = async (userId) => {
    try {
        const res = await api.get(`/Item/get-all-items/${userId}`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}


// Create item
export const CreateItemAsync = async (userId, inventoryId, body) => {
    try {
        const res = await api.post(`/Item/create-item/${userId}/${inventoryId}`, body);

        return res.data;
    } catch (error) {
        console.log(error);
    }
} 

// Delete item
export const DeleteItemAsync = async (userId, inventoryId, itemId) => {
    try {
        const res = await api.delete(`/Item/delete-item/${userId}/${inventoryId}/${itemId}`);

        return res.data;
    } catch (error) {
        console.log(error);
    }
} 

// Update item
export const UpdateItemAsync = async (userId, inventoryId, itemId, body) => {
    try {
        const res = await api.put(`/Item/update-item/${userId}/${inventoryId}/${itemId}`, body);

        return res.data;
    } catch (error) {
        console.log(error);
    }
} 