import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { GET_ALLPROPERTIES, GET_PROPERTYBYCATEGORY } from "./service";
import bestBuddyAxios from "./../../../bestbuddyaxios/bestBuddyAxios";

export const fetchAllProperties = createAsyncThunk(
  "property/fetchAllProperties",
  async () => {
    try {
      const response = await bestBuddyAxios({
        method: "GET",
        url: GET_ALLPROPERTIES,
      });

      return response;
    } catch (err) {
      throw err.response.data;
    }
  }
);

export const fetchPropertiesByCategory = createAsyncThunk(
  "property/fetchPropertiesByCategory",
  async () => {
    try {
      const response = await bestBuddyAxios({
        method: "GET",
        url: GET_PROPERTYBYCATEGORY,
      });

      return response;
    } catch (err) {
      throw err.response.data;
    }
  }
);

const initialState = {
  allProperties: [],
  propertiesBycategory: [],
};

const propertySlice = createSlice({
  name: "property",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchAllProperties.pending]: () => {},
    [fetchAllProperties.fulfilled]: (state, { payload }) => {
      // console.log(payload.data.data);
      return { ...state, allProperties: payload.data.data };
    },
    [fetchAllProperties.rejected]: (state, { error }) => {
      // return { ...state,  message: error.message };
    },

    [fetchPropertiesByCategory.pending]: () => {},
    [fetchPropertiesByCategory.fulfilled]: (state, { payload }) => {
      console.log(payload.data.data);
      return { ...state, propertiesBycategory: payload.data.data };
    },
    [fetchPropertiesByCategory.rejected]: (state, { error }) => {
      // return { ...state,  message: error.message };
    },
  },
});

export default propertySlice.reducer;
export const {} = propertySlice.actions;
