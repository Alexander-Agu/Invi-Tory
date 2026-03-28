import axios from "axios";
import { GetToken } from "../tools/ApiTools";


let token = GetToken();

const api = axios.create({
    baseURL: "http://invitory.runasp.net/api",
    headers: {
        Authorization: `Bearer ${token}`
    }
})

// Get all user recent activity
export const GetAllUserRecentActivity = async (userId) => {
    try {
        
        const res = await api.get(`/RecentActivity/get-recent-activity/${userId}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}