import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    items: [],
    category: [],
    selectedCategory: '',
    selectedProduct: {},
  },
  reducers: {
    productItem: (state, action) => {
      state.items = action.payload;
    },
    productCategory: (state, action) => {
      state.category = action.payload;
    },
    selectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    selectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { productItem, productCategory, selectedCategory, selectedProduct } = productSlice.actions;

export default productSlice.reducer;
