import { configureStore } from "@reduxjs/toolkit";
import userName from "./slice/userName.slice"

export default configureStore({
    reducer: {
        userName
    }
})