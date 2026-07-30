import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice"
import counselor from "./counselor/counselor"

const store = configureStore({
    reducer: { auth, counselor }
})

export default store