// // src/redux/productSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Thunk to fetch products
// export const fetchProducts = createAsyncThunk(
//   'products/fetchProducts',
//   async () => {
//     const response = await axios.get('https://dummyjson.com/products');
//     return response.data.products;
//   }
// );

// const productSlice = createSlice({
//   name: 'products',
//   initialState: {
//     items: [],
//     status: 'idle', // 'loading' | 'succeeded' | 'failed'
//     error: null
//   },
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(fetchProducts.pending, state => {
//         state.status = 'loading';
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.items = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   }
// });

// export default productSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to fetch products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products;
  }
);

// Thunk to fetch categories
export const fetchCategories = createAsyncThunk(
  'products/fetchCategories',
  async () => {
    const response = await axios.get('https://dummyjson.com/products/category-list');
    return response.data;
  }
);



// Thunk to fetch a single product by ID
export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  }
);


const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    categories: [],
    categoryStatus: 'idle',
    selectedProduct: null,        // 👈 already correct
    selectedProductStatus: 'idle' // 👈 already correct
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Categories
      .addCase(fetchCategories.pending, state => {
        state.categoryStatus = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categoryStatus = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.categoryStatus = 'failed';
        state.error = action.error.message;
      })

      // Product by ID
      .addCase(fetchProductById.pending, (state) => {
        state.selectedProductStatus = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selectedProductStatus = 'succeeded';
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.selectedProductStatus = 'failed';
        state.error = action.error.message;
      });
  }
});


export default productSlice.reducer;

