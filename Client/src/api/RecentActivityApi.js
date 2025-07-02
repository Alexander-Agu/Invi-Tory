import axios from "axios";

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

// Get all user recent activity
export const GetAllUserRecentActivity = async (userId) => {
    try {
        
        const res = await api.get(`/RecentActivity/get-recent-activity/${userId}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}