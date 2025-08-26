import axios from "axios";
import { GetToken } from "../tools/ApiTools";


let token = GetToken();

const api = axios.create({
    baseURL: "https://invi-tory-7en0.onrender.com/api",
    headers: {
        Authorization: `Bearer ${token}`
    }
})


// Get inventory valuation data
export const GetInventoryValuationDataAsync = async (userId, inventoryId) => {
    try {
        const res = await api.get(`/InventoryValuation/get-inventory-valuation/${userId}/${inventoryId}`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}