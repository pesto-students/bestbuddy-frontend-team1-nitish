import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  GET_ALLPROPERTIES,
  GET_PROPERTYBYCATEGORY,
  GET_PROPERTYBYID,
  DELETE_PROPERTY,
  ADD_PROPERTY,
} from "./service";
import bestBuddyAxios from "./../../../bestbuddyaxios/bestBuddyAxios";

export const fetchAllProperties = createAsyncThunk(
  "property/fetchAllProperties",
  async (selectedFilters) => {
    try {
      const response = await bestBuddyAxios({
        method: "GET",
        url: GET_ALLPROPERTIES,
        params: selectedFilters || {},
      });
      return response;
    } catch (err) {
      throw err.response.data;
    }
  }
);

export const fetchPropertiesByCategory = createAsyncThunk(
  "property/fetchPropertiesByCategory",
  async (category) => {
    try {
      const response = await bestBuddyAxios({
        method: "GET",
        url: `${GET_PROPERTYBYCATEGORY}/${category}`,
      });

      return response;
    } catch (err) {
      throw err.response.data;
    }
  }
);

export const fetchPropertyById = createAsyncThunk(
  "property/fetchPropertyById",
  async (id) => {
    try {
      const response = await bestBuddyAxios({
        method: "GET",
        url: `${GET_PROPERTYBYID}/${id}`,
      });

      return response;
    } catch (err) {
      throw err.response.data;
    }
  }
);

export const deleteProperty = createAsyncThunk(
  "property/deleteProperty",
  async (id) => {
    try {
      const response = await bestBuddyAxios({
        method: "DELETE",
        url: `${DELETE_PROPERTY}/${id}`,
      });

      return response;
    } catch (err) {
      throw err.response.data;
    }
  }
);

export const addProperty = createAsyncThunk(
  "property/addProperty",
  async (payload) => {
    try {
      const response = await bestBuddyAxios({
        method: "POST",
        url: `${ADD_PROPERTY}`,
        data: payload,
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
  propertyById: {},
  addedPropertyStatus: false,
  isLoading: false,
};

const propertySlice = createSlice({
  name: "property",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchAllProperties.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [fetchAllProperties.fulfilled]: (state, { payload }) => {
      return { ...state, allProperties: payload.data.data, isLoading: false };
    },
    [fetchAllProperties.rejected]: (state, { error }) => {
      return { ...state, message: error.message };
    },

    [fetchPropertiesByCategory.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [fetchPropertiesByCategory.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        propertiesBycategory: payload.data.data,
        isLoading: false,
      };
    },
    [fetchPropertiesByCategory.rejected]: (state, { error }) => {
      return { ...state, message: error.message };
    },

    [fetchPropertyById.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [fetchPropertyById.fulfilled]: (state, { payload }) => {
      return { ...state, propertyById: payload.data.data, isLoading: false };
    },
    [fetchPropertyById.rejected]: (state, { error }) => {
      return { ...state, message: error.message };
    },

    [deleteProperty.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [deleteProperty.fulfilled]: (state, { payload }) => {
      return { ...state, message: "Deleted Successfully", isLoading: false };
    },
    [deleteProperty.rejected]: (state, { error }) => {
      return { ...state, message: error.message };
    },

    [addProperty.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [addProperty.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        addedPropertyStatus: true,
        message: "Property added Successfully!",
        isLoading: false,
      };
    },
    [addProperty.rejected]: (state, { error }) => {
      return { ...state, addedPropertyStatus: false, message: error.message };
    },
  },
});

export default propertySlice.reducer;
// eslint-disable-next-line
export const {} = propertySlice.actions;
