import axios from "axios"

const registerUser = async (credentials) => {
    const response = await axios.post("/api/auth/register", credentials)
    console.log(response)
    return response.data
}


const loginUser = async (credentials) => {
    const response = await axios.post("/api/auth/login", credentials)
    localStorage.setItem("user", JSON.stringify(response.data))
    return response.data
}

const authService = {
    loginUser,
    registerUser
}

export default authService