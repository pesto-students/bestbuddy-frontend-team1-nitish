import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slice/users/userSlice";

export const Store = configureStore({
    reducer: {
        user: userSlice
    }
})