import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slice/users/userSlice";
import propertySlice from "./slice/property/propertySlice";

export const Store = configureStore({
  reducer: {
    user: userSlice,
    property: propertySlice,
  },
});
