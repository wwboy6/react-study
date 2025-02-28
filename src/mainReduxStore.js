import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './fetchData';

export const store = configureStore({
  reducer: {
    fetchData: counterSlice.reducer,
  },
});
