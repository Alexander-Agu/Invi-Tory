import axios from "axios";



// Get all user recent activity
export const GetAllUserRecentActivity = async (userId) => {
    try {
        
        const res = await axios.get(`https://localhost:7216/api/RecentActivity/get-recent-activity/${userId}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}