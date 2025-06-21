import axios from "axios";


// Getting all user inventory
export const GetAllInventoryAsync = async (userId) => {
    try {
        const res = await axios.get(`https://localhost:7216/api/Inventory/get-inventory/${userId}`);
        console.log(res.data)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}


// Delete inventory
export const DeleteInventoryAsync = async (userId, inventoryId) => {
    try {
       let res = await axios.delete(`https://localhost:7216/api/Inventory/delete-inventory/${userId}/${inventoryId}`)
    } catch (error) {
        console.log(error);
    }
}


// Create Inventory
export const CreateInventoryAsync = async (userId, body) => {
    try {
        const res = await axios.post(`https://localhost:7216/api/Inventory/create-iventory/${userId}`, body)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}


// Update inventory
export const UpdateInventoryAsync = async (userId, inventoryId, body) => {
    try {
        const res = await axios.put(`https://localhost:7216/api/Inventory/update-inventory/${userId}/${inventoryId}`, body)
    } catch (error) {
        console.log(error);
    }
}