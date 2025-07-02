import axios, { Axios } from "axios"
import { GetToken } from "../tools/ApiTools";




let token = GetToken();

const api = axios.create({
    baseURL: "https://localhost:7216/api",
    headers: {
        Authorization: `Bearer ${token}`
    }
})

// Get amount of inventory boxes a user has
export const GetInventoryCountAsync = async (userId) => {
    try {
        const res = await api.get(`/Unit/get-inventory-unit/${userId}`);
        return res.data.inventoryUnit;
        
    } catch (error) {
        console.log(error);
    }
}

export const GetItemCountAsync = async (userId) => {
    try {
        const res = await api.get(`/Unit/get-item-unit/${userId}`);
        return res.data.itemUnit;
    } catch (error) {
       console.log(error); 
    }
}