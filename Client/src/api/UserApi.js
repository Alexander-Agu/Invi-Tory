import axios from 'axios';

const api = axios.create({
    baseURL: "https://invitory.runasp.net/api"
});

// Creating user account
export const RegisterUserAsync = async (body) => {
    try {
        const response = await api.post("/User/register", body);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// Log user in
export const LoginUserAsync = async (body) => {
    try {
        const res = await api.post("/User/login", body);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

// Getting user information
export const FetchUserAsync = async (id) => {
    let token = localStorage.getItem('token'); // or your JWT storage
    const authApi = axios.create({
        baseURL: "https://invitory.runasp.net/api",
        headers: { Authorization: `Bearer ${token}` }
    });
    try {
        const res = await authApi.get(`/User/get-user/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

// Updates user basic information
export const UpdateUserInformationAsync = async (id, body) => {
    let token = localStorage.getItem('token');
    const authApi = axios.create({
        baseURL: "https://invitory.runasp.net/api",
        headers: { Authorization: `Bearer ${token}` }
    });
    try {
        const res = await authApi.put(`/User/update-basic/${id}`, body);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

// Delete account
export const DeleteAccountAsync = async (id) => {
    let token = localStorage.getItem('token');
    const authApi = axios.create({
        baseURL: "https://invitory.runasp.net/api",
        headers: { Authorization: `Bearer ${token}` }
    });
    try {
        const res = await authApi.delete(`/User/delete/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}