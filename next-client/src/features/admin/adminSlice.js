import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: null,
    careers: null,
    categories: null,
    credits: null,
    counselors: null,
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
        }
    }
});

export const { setAdminData } = adminSlice.actions

export default adminSlice.reducer