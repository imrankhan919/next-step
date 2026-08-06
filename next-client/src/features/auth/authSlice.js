import { createSlice } from '@reduxjs/toolkit'

const userExist = JSON.parse(localStorage.getItem("user"))


const initialState = {
    user: userExist || null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            return {
                ...state,
                user: action.payload
            }
        },
        logOutUser: (state, action) => {
            return {
                ...state,
                user: null
            }
        }
    }
});

export const { setUser, logOutUser } = authSlice.actions

export default authSlice.reducer