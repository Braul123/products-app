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
            saveNewProduct: (state, actions) => {
                let products: any = state.products;
                const _newProduct = actions.payload;
                console.log('PRODUCTOS EN STAND');
                products.unshift(_newProduct);
                
            }
        }
    }
)

export const { saveAllProducts, saveNewProduct } = productsSlice.actions;
export default productsSlice.reducer;