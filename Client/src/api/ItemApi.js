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