
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    useColorScheme: 'dark'
}

// Crea el state para administrar datos de usuario
export const colorSystemSlice = createSlice(
    {
        name: "colorSystemSlice",
        initialState,
        reducers: {
            changeAspect: (state, actions) => {
                state.useColorScheme = actions.payload;
            },
        }
    },
)

export const { changeAspect } = colorSystemSlice.actions;
export default colorSystemSlice.reducer;