import { configureStore } from '@reduxjs/toolkit';
import productSlice from './features/productSlice';
import cardItemSlice from './features/cardItemSlice';
const store = configureStore({
  reducer: {
    productItem: productSlice,
    cardItem: cardItemSlice,
  },
});

export default store;
