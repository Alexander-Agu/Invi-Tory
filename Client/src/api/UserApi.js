import axios from 'axios';


export const RegisterUserAsync = async (body)=> {
    try {
        const response = await axios.post("https://localhost:7216/api/User/register", body);

        return await response.data;
    } catch (error) {
        console.log(error);
    }
}


export const FetchUserAsync = async (id) => {
    try {
        const res = await axios.get(`https://localhost:7216/api/User/get-user/${id}`);

        return await res;
    } catch (error) {
        console.log(error)
    }
}