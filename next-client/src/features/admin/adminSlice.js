import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: null,
    careers: null,
    categories: null,
    credits: null,
    counselors: null,
    roadmaps: null
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdminData: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        setUpdateUser: (state, action) => {
            return {
                ...state,
                users: state.users.map(user => user._id === action.payload._id ? action.payload : user)
            }
        }
    }
});

export const { setAdminData, setUpdateUser } = adminSlice.actions

export default adminSlice.reducer