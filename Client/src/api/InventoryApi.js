import axios from "axios";


// Getting all user inventory
export const GetAllInventoryAsync = async (userId) => {
    try {
        const res = await axios.get(`https://localhost:7216/api/Inventory/get-inventory/${userId}`);
        
        return res.data;
    } catch (error) {
        console.log(error);
    }
}