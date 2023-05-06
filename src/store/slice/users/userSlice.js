import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  USER_SIGNIN,
  USER_SIGNOUT,
  USER_SIGNUP,
  USER_DETAILS,
  EDIT_USER_DETAILS,
} from "./service";
import bestBuddyAxios from "./../../../bestbuddyaxios/bestBuddyAxios";

export const signUp = createAsyncThunk("user/signup", async (data) => {
  try {
    const response = await bestBuddyAxios({
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
    const response = await bestBuddyAxios({
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
    const response = await bestBuddyAxios({
      method: "POST",
      url: USER_SIGNOUT,
      data,
    });

    return response;
  } catch (err) {
    throw err.response.data;
  }
});

export const userInfo = createAsyncThunk("user/userInfo ", async () => {
  try {
    const response = await bestBuddyAxios({
      method: "GET",
      url: USER_DETAILS,
    });

    return response;
  } catch (err) {
    throw err.response.data;
  }
});

export const editUserDetails = createAsyncThunk(
  "user/editUserDetails",
  async (data) => {
    try {
      const response = await bestBuddyAxios({
        method: "PATCH",
        url: `${EDIT_USER_DETAILS}/${data.id}`,
        data: data.data,
      });

      return response;
    } catch (err) {
      throw err.response.data;
    }
  }
);

const initialState = {
  userInfo: [],
  token: localStorage.getItem("access-token") || "",
  message: "",
  status: false,
  isAuthenticated: localStorage.getItem("access-token") ? true : false,
  isLoading: false,
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
    [signUp.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [signUp.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        status: true,
        isLoading: false,
        message: payload.data.message,
      };
    },
    [signUp.rejected]: (state, { error }) => {
      return {
        ...state,
        isLoading: false,
        status: false,
        message: error.message,
      };
    },
    [signIn.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [signIn.fulfilled]: (state, { payload }) => {
      localStorage.setItem("access-token", payload.data.token);
      window.location.href = "/";
      return {
        ...state,
        status: true,
        message: payload.data.message,
        token: payload.data.token,
        isAuthenticated: true,
        isLoading: false,
      };
    },
    [signIn.rejected]: (state, { error }) => {
      return {
        ...state,
        status: false,
        message: error.message,
        isLoading: false,
      };
    },
    [signOut.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [signOut.fulfilled]: (state, { payload }) => {
      localStorage.removeItem("access-token");
      return { ...state, token: "", isAuthenticated: false, isLoading: false };
    },
    [signOut.rejected]: (state, { error }) => {
      return {
        ...state,
        status: false,
        message: error.message,
        isLoading: false,
      };
    },
    [userInfo.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [userInfo.fulfilled]: (state, { payload }) => {
      return { ...state, userInfo: payload.data.data, isLoading: false };
    },
    [userInfo.rejected]: (state, { error }) => {
      return { ...state, message: error.message, isLoading: false };
    },

    [editUserDetails.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [editUserDetails.fulfilled]: (state, { payload }) => {
      return { ...state, message: "User info Updated", isLoading: false };
    },
    [editUserDetails.rejected]: (state, { error }) => {
      return { ...state, message: error.message, isLoading: false };
    },
  },
});

export default userSlice.reducer;
export const { setMessage, setStatus, setAuthenticated } = userSlice.actions;
