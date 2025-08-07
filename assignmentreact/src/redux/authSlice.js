

import { createSlice } from "@reduxjs/toolkit";
import bcrypt from "bcryptjs";

const initialAuth = JSON.parse(localStorage.getItem("auth")) || {
  isAuthenticated: false,
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuth,
  reducers: {
    signup: (state, action) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.find(user => user.email === action.payload.email);

      if (!userExists) {
        const hashedPassword = bcrypt.hashSync(action.payload.password, 10);
        const newUser = { ...action.payload, password: hashedPassword };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        state.isAuthenticated = true;
        state.currentUser = newUser;
        localStorage.setItem("auth", JSON.stringify(state));
      } 
     
    },

    login: (state, action) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(u => u.email === action.payload.email);

      if (user && bcrypt.compareSync(action.payload.password, user.password)) {
        state.isAuthenticated = true;
        state.currentUser = user;
        localStorage.setItem("auth", JSON.stringify(state));
      } 
      // No return!
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
      localStorage.removeItem("auth");
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;


