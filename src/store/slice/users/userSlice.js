import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  USER_SIGNIN,
  USER_SIGNOUT,
  USER_SIGNUP,
} from "./service";

export const signUp = createAsyncThunk("user/signup", async (data) => {
  try {
    const response = await axios({
      method: "POST",
      url: USER_SIGNUP,
      data,
    });

    return response;
  } catch (err) {
    throw err.response.data;
  }
});

export const signIn = createAsyncThunk("user/signin", async (data) => {
  try {
    const response = await axios({
      method: "POST",
      url: USER_SIGNIN,
      data,
    });

    return response;
  } catch (err) {
    throw err.response.data;
  }
});

export const signOut = createAsyncThunk("user/signout", async (data) => {
  try {
    const response = await axios({
      method: "POST",
      url: USER_SIGNOUT,
      data,
    });

    return response;
  } catch (err) {
    throw err.response.data;
  }
});

const initialState = {
  userInfo: [],
  token: "",
  message: "",
  status: false,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setMessage: (state) => {
      state.message = "";
    },
    setStatus: (state) => {
      state.status = false;
    },
    setAuthenticated: (state, { payload }) => {
      state.isAuthenticated = payload;
    },
  },
  extraReducers: {
    [signUp.pending]: () => {},
    [signUp.fulfilled]: (state, { payload }) => {
      return { ...state, status: true, message: payload.data.message };
    },
    [signUp.rejected]: (state, { error }) => {
      return { ...state, status: false, message: error.message };
    },
    [signIn.pending]: () => {},
    [signIn.fulfilled]: (state, { payload }) => {
      console.log(payload);
      localStorage.setItem("access-token", payload.data.token);
      window.location.href = "/";
      return {
        ...state,
        status: true,
        message: payload.data.message,
        token: payload.data.token,
        isAuthenticated: true,
      };
    },
    [signIn.rejected]: (state, { error }) => {
      return { ...state, status: false, message: error.message };
    },
    [signOut.pending]: () => {},
    [signOut.fulfilled]: (state, { payload }) => {
      localStorage.removeItem("access-token");
      return { ...state, token: "", isAuthenticated: false };
    },
    [signOut.rejected]: ({ error }) => {
      console.log(error);
    },
  },
});

export default userSlice.reducer;
export const { setMessage, setStatus, setAuthenticated } = userSlice.actions;
