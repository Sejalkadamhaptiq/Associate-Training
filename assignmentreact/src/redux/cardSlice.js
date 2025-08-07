// // src/redux/cartSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [], 
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const existing = state.items.find(i => i.id === action.payload.id);
//       console.log('Reducer received addToCart with payload:', action.payload);
//       if (existing) {
//         existing.quantity += 1;
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     decreaseQuantity: (state, action) => {
//   const item = state.items.find(i => i.id === action.payload);
//   if (item) {
//     if (item.quantity > 1) {
//       item.quantity -= 1;
//     } else {
//       // Optionally remove the item when quantity hits 0
//       state.items = state.items.filter(i => i.id !== action.payload);
//     }
//   }
// },
//  increaseQuantity: (state, action) => {
//   const item = state.items.find(i => i.id === action.payload);
//   if (item) {
   
//       item.quantity += 1;
//   }
// },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter(i => i.id !== action.payload);
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart , decreaseQuantity,increaseQuantity} = cartSlice.actions;
// export default cartSlice.reducer;
  // src/redux/cartSlice.js
  
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity > 1 ? item.quantity -= 1 : 
        state.items = state.items.filter(i => i.id !== action.payload);
      }
    },

   removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
 },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const {
  addToCart, increaseQuantity, decreaseQuantity,
  removeFromCart, clearCart
} = cartSlice.actions;
export default cartSlice.reducer;
