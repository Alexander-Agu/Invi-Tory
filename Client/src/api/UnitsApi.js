import axios, { Axios } from "axios"


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