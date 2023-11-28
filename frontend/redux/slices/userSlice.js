import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
      localStorage.clear()
      location.reload();

    },
    setData: (state, action) => {
      state.user.push(action.payload);
    },
  },
});

export const { login, logout, setData } = userSlice.actions;

export default userSlice.reducer;
