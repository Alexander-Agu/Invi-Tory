export const GetToken = () => {
    let getToken;
    try {
        const userFromStorage = localStorage.getItem("user");
        getToken = userFromStorage ? JSON.parse(userFromStorage) : null;
    } catch (e) {
        getToken = null;
        console.error("Invalid JSON in localStorage 'user':", e);
    }

    let token = getToken?.accessToken || "";

    return token
}