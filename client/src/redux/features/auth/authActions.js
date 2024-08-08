

import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from "react-toastify";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { role, email, password });
      if (data.success) {
        toast.success(data.message);
        localStorage.setItem("token", data.token);
        return { user: data.user, token: data.token }; // Ensure this matches your reducer
      }
      return rejectWithValue(data.message);
    } catch (error) {
      return rejectWithValue(error.response?.data.message || error.message);
    }
  }
);

export const userRegister = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/register", userData);
      if (data.success) {
        toast.success("User Registered Successfully");
        return data; // Adjust if needed
      }
      return rejectWithValue(data.message);
    } catch (error) {
      return rejectWithValue(error.response?.data.message || error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get("/auth/current-user");
      return data; // Ensure this matches your reducer
    } catch (error) {
      return rejectWithValue(error.response?.data.message || error.message);
    }
  }
);
