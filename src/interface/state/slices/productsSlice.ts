import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: []
};

export const productsSlice = createSlice(
    {
        name: "productsSlice",
        initialState,
        reducers: {
            saveAllProducts: (state, actions) => {
                state.products = actions.payload;
            },
        }
    }
)

export const { saveAllProducts } = productsSlice.actions;
export default productsSlice.reducer;