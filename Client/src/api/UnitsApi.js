import axios, { Axios } from "axios"


// Get amount of inventory boxes a user has
export const GetInventoryCountAsync = async (userId) => {
    try {
        const res = await axios.get(`https://localhost:7216/api/Unit/get-inventory-unit/${userId}`);
        return res.data.inventoryUnit;
        
    } catch (error) {
        console.log(error);
    }
}

export const GetItemCountAsync = async (userId) => {
    try {
        const res = await axios.get(`https://localhost:7216/api/Unit/get-item-unit/${userId}`);
        return res.data.itemUnit;
    } catch (error) {
       console.log(error); 
    }
}