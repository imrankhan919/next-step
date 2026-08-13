import axios from "axios"

const fetchAdminOverview = async (token) => {

    const options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    const usersData = await axios.get("/api/admin/users", options)
    const categoriesData = await axios.get("/api/admin/category", options)
    const careersData = await axios.get("/api/admin/career", options)
    const counselorsData = await axios.get("/api/admin/counselors", options)
    const creditsData = await axios.get("/api/admin/credits", options)
    const roadmapData = await axios.get("/api/admin/roadmaps", options)

    const data = {
        users: usersData.data,
        categories: categoriesData.data,
        counselors: counselorsData.data,
        credits: creditsData.data,
        careers: careersData.data,
        roadmaps: roadmapData.data
    }

    return data
}


const updateUser = async (payload) => {

    const options = {
        headers: {
            authorization: `Bearer ${payload.token}`
        }
    }

    const response = await axios.put("/api/admin/" + payload.uid, "_", options)
    return response.data

}


const addCategory = async (payload) => {



    const options = {
        headers: {
            authorization: `Bearer ${payload.token}`
        }
    }

    const response = await axios.post("/api/admin/category", { title: payload.title }, options)
    console.log(response)
    return response.data

}




const adminService = {
    fetchAdminOverview,
    updateUser,
    addCategory
}


export default adminService