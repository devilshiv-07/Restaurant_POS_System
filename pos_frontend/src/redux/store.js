import { configureStore } from '@reduxjs/toolkit';
import customerSlice from './slices/customerSlice';

const store = configureStore({
  reducer: {
    customer: customerSlice
  },

  devTools: process.env.NODE_ENV !== 'production',
});

export default store;