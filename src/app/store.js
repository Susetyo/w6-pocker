import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import homeReducer from '../features/homeSlice';
import userReducer from '../features/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    home:homeReducer,
    user:userReducer
  },
});
