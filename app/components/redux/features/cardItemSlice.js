import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};
const cardItemSlice = createSlice({
  name: 'cardItem',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItems } = cardItemSlice.actions;
export default cardItemSlice.reducer;
