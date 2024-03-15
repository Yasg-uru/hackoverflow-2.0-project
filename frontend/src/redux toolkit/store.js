// store.js
import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js"; // import the auth reducer
import toast from "react-hot-toast";

const store = configureStore({
  reducer: {
    auth: authReducer, // add the auth reducer under the 'auth' key
  },
});

export default store;

