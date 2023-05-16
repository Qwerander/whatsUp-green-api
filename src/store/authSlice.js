import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../api/api";

export const fetchUser = createAsyncThunk("user/fetchUser", async (data) => {
  try {
    const response = await Api.settings(data.idInstance, data.apiToken);
    return response;
  } catch (error) {
    console.error("Ошибка:", error);
    return "Ошибка";
  }
});

const initialState = {
  idInstance: "",
  apiToken: "",
  user: "",
  error: "Введены не корректные данные",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.idInstance = action.payload.idInstance;
      state.apiToken = action.payload.apiToken;
    },
    logOut: (state) => {
      state.idInstance = "";
      state.apiToken = "";
      state.user = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload?.wid;
    });
  },
});

export const { setAuth, logOut } = authSlice.actions;

export default authSlice.reducer;
