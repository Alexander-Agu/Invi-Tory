import axios from 'axios';

// const getToken = JSON.parse(localStorage.getItem("user"));


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

// Creating user account
export const RegisterUserAsync = async (body)=> {
    try {
        const response = await axios.post("https://localhost:7216/api/User/register", body);

        return await response.data;
    } catch (error) {
        console.log(error);
    }
}


// Log user in
export const LoginUserAsync = async (body) => {
    try {
        const res = await axios.post("https://localhost:7216/api/User/login", body);

        return await res.data;
    } catch (error) {
        console.log(error);
    }
}


// Getting user information
export const FetchUserAsync = async (id) => {
    try {
        const res = await api.get(`/User/get-user/${id}`);

        return await res.data;
    } catch (error) {
        console.log(error)
    }
}