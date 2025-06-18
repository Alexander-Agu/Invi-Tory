import axios from 'axios';

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
        const res = await axios.get(`https://localhost:7216/api/User/get-user/${id}`);

        return await res;
    } catch (error) {
        console.log(error)
    }
}