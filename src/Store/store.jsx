import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Reducers/Auth/authSlice";
import navSlice from "./Reducers/navSlice";
import productSlice from "./Reducers/PagesReducers/productSlice";
import inventorySlice from "./Reducers/PagesReducers/inventorySlice";
import teamSlice from "./Reducers/PagesReducers/teamSlice";

const store = configureStore({
    reducer:{
        auth: authSlice,
        nav: navSlice,
        productsData: productSlice,
        inventory: inventorySlice,
        team:teamSlice,
    }
})

export default store;