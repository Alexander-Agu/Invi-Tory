import axios from "axios";



// Get all items
export const GetAllItemsAsync = async (userId) => {
    try {
        const res = await axios.get(`https://localhost:7216/api/Item/get-all-items/${userId}`)
        // console.log(res)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}


// Create item
export const CreateItemAsync = async (userId, inventoryId, body) => {
    try {
        const res = await axios.post(`https://localhost:7216/api/Item/create-item/${userId}/${inventoryId}`, body);

        return res.data;
    } catch (error) {
        console.log(error);
    }
} 

// Delete item
export const DeleteItemAsync = async (userId, inventoryId, itemId) => {
    try {
        const res = await axios.delete(`https://localhost:7216/api/Item/delete-item/${userId}/${inventoryId}/${itemId}`);

        return res.data;
    } catch (error) {
        console.log(error);
    }
} 

// Update item
export const UpdateItemAsync = async (userId, inventoryId, itemId, body) => {
    try {
        const res = await axios.put(`https://localhost:7216/api/Item/update-item/${userId}/${inventoryId}/${itemId}`, body);

        return res.data;
    } catch (error) {
        console.log(error);
    }
} 