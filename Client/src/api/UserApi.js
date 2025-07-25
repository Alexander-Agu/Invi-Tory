import axios from 'axios';
import { GetToken } from '../tools/ApiTools';


let token = GetToken();


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


// Updates user basic information
export const UpdateUserInformationAsync = async (id, body) => {
    try {
        const res = await api.put(`/User/update-basic/${id}`, body);

        return await res.data;
    } catch (error) {
        console.log(error);
    }
}


// Delete account
export const DeleteAccountAsync = async (id) => {
    try {
        const res = await api.delete(`/User/delete/${id}`);

        return await res.data;
    } catch (error) {
        console.log(error);
    }
}