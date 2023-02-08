import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: true
}
const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {}
})

export default userSlice.reducer;