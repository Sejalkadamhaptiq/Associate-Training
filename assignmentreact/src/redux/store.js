// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cardSlice';
import wishlistReducer from './wishlistSlice';
import authReducer from "./authSlice";
export const store = configureStore({
  reducer: {
     
     products: productReducer,
     cart: cartReducer,
     wishlist: wishlistReducer,
    auth: authReducer,
  },
   devTools: true, // ✅ enables Redux DevTools
});
