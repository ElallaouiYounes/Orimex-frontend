import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Reducers/Auth/authSlice"
import navSlice from "./Reducers/navSlice"

const store = configureStore({
    reducer:{
        auth: authSlice,
        nav: navSlice,
    }
})

export default store;