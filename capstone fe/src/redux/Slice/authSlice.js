import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("USER")
    ? JSON.parse(localStorage.getItem("USER"))
    : null,
  isLogin: localStorage.getItem("USER") ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN: (state, action) => {
      localStorage.setItem("USER", JSON.stringify(action.payload));
      state.user = action.payload;
      state.isLogin = true;
    },
    LOGOUT: (state, action) => {
      localStorage.removeItem("USER");
      state.isLogin = false;
      state.user = null;
    },
  },
});

export const { LOGIN, LOGOUT } = authSlice.actions;

export default authSlice.reducer;
