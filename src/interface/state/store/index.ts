import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../slices/productsSlice';
import colorSystemSlice from '../slices/colorSystemSlice';

export const store = configureStore({
    reducer: {
        productsSlice,
        colorSystemSlice
    },
}); 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;